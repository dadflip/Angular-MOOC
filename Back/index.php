<?php
require __DIR__ . '/vendor/autoload.php';

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$app = AppFactory::create();

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//hello route
$app->get('/hello/{name}', function ($request, $response, $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

//users route
$app->get('/users', function ($request, $response, $args) {
    $conn = getConnection();
    $sql = "SELECT * FROM users";
    $stmt = $conn->query($sql);
    $users = $stmt->fetchAllAssociative();
    $response->getBody()->write(json_encode($users));
    return $response->withHeader('Content-Type', 'application/json');
});


$app->run();
