<?php
use Doctrine\DBAL\DriverManager;

function getConnection() {
    $connectionParams = [
        'dbname' => $_ENV['DB_NAME'],
        'user' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASS'],
        'host' => $_ENV['DB_HOST'],
        'driver' => 'pdo_pgsql',
    ];
    return DriverManager::getConnection($connectionParams);
}
