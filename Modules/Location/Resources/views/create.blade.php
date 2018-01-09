@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
        route('location.index')=>'Địa danh và vị trí',
        route('location.create')=>'Thêm mới',
    ])}}
@endsection

@section('content')
    {!! Form::open(['method'=>'post','route'=>'location.store']) !!}
    <div class="columns">
        <div class="column is-4">
            {{Bulma::text('Tên gọi','title')}}
            {{Bulma::textarea('Mô tả ngắn','desc')}}
            {{Bulma::select('Địa danh(vị trí) này nằm trong','parent_id')}}
            <google-map-input api-key="{{config('location.google_map_api_key')}}"></google-map-input>
            <div class="field">
                <button type="submit" class="button is-success">Xác nhận</button>
            </div>
        </div>
        <div class="column is-8">
            <quill-editor local-media="true" header-title="Chi tiết về địa điểm"></quill-editor>
        </div>
    </div>
    {!! Form::close() !!}
@endsection
