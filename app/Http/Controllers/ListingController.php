<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateListingRequest;
use App\Http\Resources\ListingResource;
use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $string = strtolower($request->string);
        if(isset($string) && strlen($string) > 0){
            $listings = Listing::where('title','like','%'.$string.'%')->orWhere('category','like',$string.'%')->get();
        } else {
            $listings = [];
        }
        return response()->json($listings);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateListingRequest $request)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $listing = Listing::create($data);

        return new ListingResource($listing);
    }

    /**
     * Save the image in the local file system and return saved image path
     *
     * @param  $image
     * @throws \Exception
     */
    private function saveImage($image)
    {   
        // check if image is a valid base64 string
        if(preg_match('/^data:image\/(\w+);base64,/', $image, $type)){
            // take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // get file extension
            $type = strtolower($type[1]); //jpg, png, gif
            //check if the file is an image
            if(!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);
            if($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception ('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if(!File::exists($absolutePath)){
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
