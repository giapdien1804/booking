@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
    route('domain.index')=>'Trang web',
    route('domain.edit',['id'=>$domain->uuid])=>$domain->name,
    ])}}
@endsection
@section('content')
    {!! Form::open(['method'=>'put','route'=>['domain.update','id'=>$domain->uuid]]) !!}
    <div class="columns is-multiline">
        <div class="column is-4">
            <domain-input domain-name="{{$domain->name}}" domain-ip="{{$domain->ip}}"></domain-input>
            {{Bulma::text('desc','Description')}}
            <div class="columns">
                <div class="column is-4">
                    {{Bulma::select('Server','svr',config('domain.svr'),old('svr',$domain->svr),['placeholder'=>'Select...'])}}
                </div>
                <div class="column is-4">
                    {{Bulma::select('Types','type',config('domain.type'),old('type',$domain->type),['placeholder'=>'Select...'])}}
                </div>
                <div class="column is-4">
                    {{Bulma::select('Status','status',config('domain.status'),old('status',$domain->status),['placeholder'=>'Select...'])}}
                </div>
            </div>
            <div class="field">
                <label class="label">Các module hoạt động trên domain này</label>
                <div class="columns is-multiline">
                    @foreach($modules as $module)
                        <div class="column is-6">
                            <input id="module-{{$loop->index}}" type="checkbox" name="module[]"
                                   value="{{$module->name}}" class="switch is-rounded is-success"
                                   @if(in_array($module->name,$domain->module)) checked @endif
                            >
                            <label for="module-{{$loop->index}}">{{$module->name}}</label>
                        </div>
                    @endforeach
                </div>
            </div>
            <image-size-input data-size="{{json_encode($domain->image_size)}}"
                              input-name="image_size"></image-size-input>
            <p class="help">Chú ý khi thay đổi kích thước ảnh cần thực hiện
                <a href="{{route('help.index',['h'=>'khoi-tao-anh-thu-nho'])}}">lệnh khởi tạo lại ảnh</a> trong quản lý
                file.</p>
            <div class="field">
                <button type="submit" class="button is-info is-fullwidth">Xác nhận</button>
            </div>
        </div>
        <div class="column is-8">
            <user-input data-select="{{json_encode($domain->users->pluck('uuid'))}}"
                        input-name="user_uuid"></user-input>
            <lang-input data-select="{{json_encode($domain->lang['list'])}}" input-name="lang"></lang-input>
        </div>
    </div>
    {!! Form::close() !!}
@endsection
