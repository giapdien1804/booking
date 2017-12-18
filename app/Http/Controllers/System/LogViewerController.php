<?php
/**
 * Copyright (c) 2017. Code walk giapdien1804@gmail.com | +841648392803
 */

namespace App\Http\Controllers\System;

use App\Helpers\LaravelLogViewer;
use App\Http\Controllers\Controller;

class LogViewerController extends Controller
{
    protected $request;

    public function __construct()
    {
        $this->request = app('request');
    }

    public function index()
    {

        if ($this->request->input('l')) {
            LaravelLogViewer::setFile(base64_decode($this->request->input('l')));
        }

        if ($this->request->input('dl')) {
            try {
                return $this->download(LaravelLogViewer::pathToLogFile(base64_decode($this->request->input('dl'))));
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } elseif ($this->request->has('del')) {
            try {
                app('files')->delete(LaravelLogViewer::pathToLogFile(base64_decode($this->request->input('del'))));
            } catch (\Exception $e) {
                \Log::alert($e->getMessage());
            }
            return $this->redirect($this->request->url());
        } elseif ($this->request->has('delall')) {
            foreach (LaravelLogViewer::getFiles(true) as $file) {
                try {
                    app('files')->delete(LaravelLogViewer::pathToLogFile($file));
                } catch (\Exception $e) {
                    \Log::alert($e->getMessage());
                }
            }
            return $this->redirect($this->request->url());
        }

        $files = LaravelLogViewer::getFiles(true);
        $current_file = LaravelLogViewer::getFileName();
        $logs = LaravelLogViewer::all();

        if ($this->request->has('view'))
            return response()->json($logs);

        return view('system.log', compact('logs', 'files', 'current_file'));
    }

    private function redirect($to)
    {
        if (function_exists('redirect')) {
            return redirect($to);
        }

        return app('redirect')->to($to);
    }

    private function download($data)
    {
        return response()->download($data);
    }
}
