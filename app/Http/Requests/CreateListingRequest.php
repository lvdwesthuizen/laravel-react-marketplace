<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'user_id' => 'required',
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:1000',
            'description' => 'required|string',
            'date_online' => 'required|date',
            'date_offline' => 'required|date',
            'price' => 'required|numeric|string',
            'currency' => 'required|string',
            'category' => 'required|string',
            'image' => 'required|string',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string',
            'mobile' => 'required|string'
        ];
    }
}
