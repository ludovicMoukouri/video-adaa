<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;

class VideosController extends Controller
{
    public function index()
    {
        return Video::all();
    }
 
    public function show(Video $video)
    {
        return $video;
    }
 
    public function store(Request $request)
    {
    	 $this->validate($request, [
        'titre' => 'required|unique:videos|max:255',
        'liens' => 'required'
    ]);
        $video = Video::create($request->all());
 
        return response()->json($video, 201);

        // $video = Video::create($request->all());
 
        // return response()->json($video, 201);
    }
 
    public function update(Request $request, Video $video)
    {
        $video->update($request->all());
 
        return response()->json($video, 200);
    }
 
    public function delete(Video $video)
    {
        $video->delete();
 
        return response()->json(null, 204);
    }
}
