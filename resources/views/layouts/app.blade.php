<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    {{Html::style('/css/app.css')}}
</head>
<body>
<div id="app">
    @auth
        <nav class="navbar is-primary navbar-fixed has-shadow border-radius-0" role="navigation"
             aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="{{ url('/') }}">
                    <strong>{{ config('app.name', 'Laravel') }}</strong>
                </a>
                <button class="button navbar-burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-start">
                    <a class="navbar-item" href="{{route('user.index')}}">
                        Người dùng
                    </a>
                    <a class="navbar-item" href="">
                        API
                    </a>
                    <a class="navbar-item" href="{{route('domain.index')}}">
                        Trang web
                    </a>
                    <a class="navbar-item" href="{{route('storage.index')}}">
                        Thư viện
                    </a>
                    <a class="navbar-item">
                        Nội dung
                    </a>
                    <a class="navbar-item">
                        Hệ thống
                    </a>
                    <a class="navbar-item" href="{{route('system-log.view')}}">
                        Lỗi hệ thống
                    </a>
                    <a class="navbar-item" href="{{route('help.index')}}">
                        Trợ giúp
                    </a>
                </div>

                <div class="navbar-end">
                    @guest
                        <a class="navbar-item" href="{{ route('login') }}">Login</a>
                    @else
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                {{ Auth::user()->name }}
                            </a>

                            <div class="navbar-dropdown is-right">
                                <a class="navbar-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault()
                                                  document.getElementById('logout-form').submit()">
                                    Thoát
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                      style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </div>
                        </div>
                    @endguest
                </div>
            </div>
        </nav>
    @endauth

    <div id="global-top-action" class="z-index-5" style="position: fixed; top: 52px;left: 0;right: 0">
        <div class="columns mt-0 bg-light content-top-action">
            @if(View::hasSection('top-one'))
                <div class="column pt-0 pb-0">
                    @yield('top-one')
                </div>
            @endif
            @if(View::hasSection('top-tow'))
                <div class="column pt-0 pb-0">
                    @yield('top-tow')
                </div>
            @endif
        </div>
    </div>
    <section style="margin-top: 100px">
        <div class="container is-fluid">
            @yield('content')
        </div>
    </section>
    @if ($errors->any())
        <div id="global-errors-view">
            <article class="message is-warning">
                <div class="message-header">
                    <p>Errors</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            </article>
        </div>
    @endif
</div>
@yield('before-script')
<!-- Scripts -->
{{Html::script('/js/app.js')}}
@yield('script')
</body>
</html>
