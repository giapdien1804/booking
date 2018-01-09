@extends('layouts.help')
@section('top-one')
    {{Bulma::breadcrumb([
        route('help.index')=>'Trung tập trợ giúp',
        route('help.index',['h'=>'khoi-tao-anh-thu-nho'])=>'Khởi tạo hình ảnh thu nhỏ',
        ])}}
@endsection

@section('content')
    {{--<div class="steps is-vertical" data-toggle="steps">
        <div class="step-item is-active is-success">
            <div class="step-marker">
              <span class="icon">
                <i class="fa fa-check"></i>
              </span>
            </div>
            <div class="step-details">
                <p class="step-title">Bước 1</p>
                <p>Vào: <a href="/domain">danh sách domain</a> và nhấn vào module "storage"</p>
                <img src="/storage/help/khoi-tao-anh-buoc-1.png">
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">2</div>
            <div class="step-details">
                <p class="step-title">Bước 2</p>
                <p>Trong giao diện quản lý ảnh, tìm đến menu "tác vụ" ở trên đầu và nhấn tác vụ -> khởi tạo lại ảnh thu nhỏ</p>
                <img src="/storage/help/khoi-tao-anh-buoc-2.png">
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">3</div>
            <div class="step-details">
                <p class="step-title">Bước 3</p>
                <p>Trong hộp thoại khởi tạo hình ảnh nhấn bắt đầu và đợi đến khi tiến trình kết thúc.</p>
                <img src="/storage/help/khoi-tao-anh-buoc-3.png">
            </div>
        </div>
        <div class="steps-actions">
            <div class="steps-action">
                <button data-nav="previous" class="button is-light">previous</button>
            </div>
            <div class="steps-action">
                <button data-nav="next" class="button is-light">Next</button>
            </div>
        </div>
    </div>--}}

    <div class="steps is-balanced is-vertical" data-toggle="steps">
        <div class="step-item is-active">
            <div class="step-marker">
              <span class="icon">
                <i class="fa fa-check"></i>
              </span>
            </div>
            <div class="step-details">
                <p class="is-size-4">Bước 1</p>
                <p>Vào: <a href="/domain">danh sách domain</a> và nhấn vào
                    module "storage"</p>
                <img src="/storage/help/khoi-tao-anh-buoc-1.png">
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">2</div>
            <div class="step-details">
                <p class="is-size-4">Bước 2</p>
                <p>Trong giao diện quản lý ảnh, tìm đến menu "tác vụ" ở trên đầu và nhấn tác vụ -> khởi tạo lại ảnh thu nhỏ</p>
                <img src="/storage/help/khoi-tao-anh-buoc-2.png">
            </div>
        </div>
        <div class="step-item">
            <span class="step-marker">3</span>
            <div class="step-details">
                <p class="is-size-4">Bước 3</p>
                <p>Trong hộp thoại khởi tạo hình ảnh nhấn bắt đầu và đợi đến khi tiến trình kết thúc.</p>
                <img src="/storage/help/khoi-tao-anh-buoc-3.png">
            </div>
        </div>
        <div class="steps-actions">
            <div class="steps-action">
                <button data-nav="previous" class="button is-light">previous</button>
            </div>
            <div class="steps-action">
                <button data-nav="next" class="button is-light">Next</button>
            </div>
        </div>
    </div>
@endsection