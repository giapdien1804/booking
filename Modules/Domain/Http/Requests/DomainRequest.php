<?php

namespace Modules\Domain\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DomainRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->getMethod() == 'PUT')
            return [
                'name' => 'required|unique:domains,name,' . $this->get('id')
            ];

        return [
            'name' => 'required|unique:domains,name'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Bạn phải nhập tên domain',
            'name.unique' => 'domain này đã tồn tại trên hệ thống',
        ];
    }


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
