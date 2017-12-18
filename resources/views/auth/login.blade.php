@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <form method="POST" name="loginForm" action="{{ route('login') }}">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Login
                            </p>
                        </header>
                        <div class="card-content">
                            {{ csrf_field() }}
                            <div class="field">
                                <label for="email" class="label">E-Mail Address</label>

                                <div class="control">
                                    <input id="email" type="email"
                                           class="input{{ $errors->has('email') ? ' is-danger' : '' }}"
                                           name="email"
                                           value="{{ old('email') }}" required autofocus>
                                </div>
                                @if ($errors->has('email'))
                                    <p class="help is-info">
                                        {{ $errors->first('email') }}
                                    </p>
                                @endif
                            </div>

                            <div class="field">
                                <label for="password" class="label">Password</label>

                                <div class="control">
                                    <input id="password" type="password"
                                           class="input{{ $errors->has('password') ? ' is-danger' : '' }}"
                                           name="password" required>
                                </div>
                                @if ($errors->has('password'))
                                    <p class="help is-info">
                                        {{ $errors->first('password') }}
                                    </p>
                                @endif
                            </div>
                        </div>
                        <footer class="card-footer">
                            <div class="card-footer-item">
                                <input id="remember" type="checkbox" name="remember"
                                       {{ old('remember') ? 'checked' : '' }}
                                       class="switch is-rounded is-success">
                                <label for="remember">Remember Me</label>
                            </div>
                            <a class="card-footer-item" href="javascript: submitform()">Login</a>
                            <a href="{{ route('password.request') }}" class="card-footer-item">
                                Forgot Your Password?</a>
                            <script type="text/javascript">
                              function submitform() {
                                document.loginForm.submit();
                              }
                            </script>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
