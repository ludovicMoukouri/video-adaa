<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Video Watch</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
    <h2 style="text-align: center"> Regarder une video </h2>
        <div id="root"></div>
        <div id="modal"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
