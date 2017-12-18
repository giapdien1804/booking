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
        <div class="column is-6">
            <domain-input></domain-input>
            {{Bulma::text('desc','Description')}}
            <div class="field is-grouped">
                <div class="control">
                    {{Bulma::select('Server','svr',config('domain.svr'),old('svr'),true)}}
                </div>
                <div class="control">
                    {{Bulma::select('Types','type',config('domain.type'),old('type'),true)}}
                </div>
                <div class="control">
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
        </div>
        <div class="column is-6">
            <label class="label">Những người dùng sau được phép cập nhật nội dung cho domain này</label>
            <div class="control">
                @foreach($users as $user)
                    <div class="field" style="max-height: 500px; overflow-y: scroll">
                        <input id="user-id-{{$loop->index}}" type="checkbox" name="user_uuid[]"
                               value="{{$user->uuid}}" class="switch is-rounded is-success">
                        <label for="user-id-{{$loop->index}}">{{$user->name}}({{$user->email}})</label>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="column">
            <button type="submit" class="button is-primary">Xác nhận</button>
        </div>
    </div>
    {!! Form::close() !!}
@endsection
