<<<<<<< HEAD
<?php
$request = $_SERVER['REQUEST_URI'];

// If the requested file exists, serve it
if (file_exists(__DIR__ . $request)) {
    return false;
}

// Redirect all other requests to your SPA (index.html)
include 'index.html';
=======
<?php
$request = $_SERVER['REQUEST_URI'];

// If the requested file exists, serve it
if (file_exists(__DIR__ . $request)) {
    return false;
}

// Redirect all other requests to your SPA (index.html)
include 'index.html';
>>>>>>> c8222c1d04fc89527f055b9312c0a349ba069a83
