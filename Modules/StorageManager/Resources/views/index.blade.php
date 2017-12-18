@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
     route('domain.index')=>'Trang web',
     route('domain.show',['uuid'=>$current_domain->uuid])=>$current_domain->name,
    route('storagemanager.index',['domain'=>$current_domain->uuid])=>'Thư viện media',
    ])}}
@endsection
@section('content')
    <file-picker domain="{{$current_domain->uuid}}"></file-picker>
@endsection
