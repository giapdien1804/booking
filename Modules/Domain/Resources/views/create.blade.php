@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
    route('domain.index')=>'Trang web',
    route('domain.create')=>'Thêm mới',
    ])}}
@endsection
@section('content')
    {!! Form::open(['method'=>'post','route'=>'domain.store']) !!}
    <div class="columns is-multiline">
        <div class="column is-4">
            <domain-input></domain-input>
            {{Bulma::text('Description','desc')}}
            <div class="columns">
                <div class="column is-4">
                    {{Bulma::select('Server','svr',config('domain.svr'),old('svr'),true)}}
                </div>
                <div class="column is-4">
                    {{Bulma::select('Types','type',config('domain.type'),old('type'),true)}}
                </div>
                <div class="column is-4">
                    {{Bulma::select('Status','status',config('domain.status'),old('status'),true)}}
                </div>
            </div>
            <div class="field">
                <label class="label">Các module hoạt động trên domain này</label>
                <div class="columns is-multiline">
                    @foreach($modules as $module)
                        <div class="column is-6">
                            <input id="module-{{$loop->index}}" type="checkbox" name="module[]"
                                   value="{{$module->name}}" class="switch is-rounded is-success">
                            <label for="module-{{$loop->index}}">{{$module->name}}</label>
                        </div>
                    @endforeach
                </div>
            </div>
            <image-size-input :column-size="6" input-name="image_size"></image-size-input>
            <div class="field">
                <button type="submit" class="button is-info is-fullwidth">Xác nhận</button>
            </div>
        </div>
        <div class="column is-8">
            <user-input input-name="user_uuid"></user-input>
            <lang-input input-name="lang"></lang-input>
        </div>
    </div>
    {!! Form::close() !!}
@endsection
