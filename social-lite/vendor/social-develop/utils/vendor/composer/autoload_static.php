<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit303f10605eea86d3ff32cebbf746682d
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'ChadwickMarketing\\Utils\\Test\\' => 29,
            'ChadwickMarketing\\Utils\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ChadwickMarketing\\Utils\\Test\\' => 
        array (
            0 => __DIR__ . '/../..' . '/test/phpunit',
        ),
        'ChadwickMarketing\\Utils\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'ChadwickMarketing\\Utils\\Activator' => __DIR__ . '/../..' . '/src/Activator.php',
        'ChadwickMarketing\\Utils\\Assets' => __DIR__ . '/../..' . '/src/Assets.php',
        'ChadwickMarketing\\Utils\\Base' => __DIR__ . '/../..' . '/src/Base.php',
        'ChadwickMarketing\\Utils\\Capabilities' => __DIR__ . '/../..' . '/src/Capabilities.php',
        'ChadwickMarketing\\Utils\\Constants' => __DIR__ . '/../..' . '/src/Constants.php',
        'ChadwickMarketing\\Utils\\Core' => __DIR__ . '/../..' . '/src/Core.php',
        'ChadwickMarketing\\Utils\\Localization' => __DIR__ . '/../..' . '/src/Localization.php',
        'ChadwickMarketing\\Utils\\PackageLocalization' => __DIR__ . '/../..' . '/src/PackageLocalization.php',
        'ChadwickMarketing\\Utils\\PluginReceiver' => __DIR__ . '/../..' . '/src/PluginReceiver.php',
        'ChadwickMarketing\\Utils\\Service' => __DIR__ . '/../..' . '/src/Service.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit303f10605eea86d3ff32cebbf746682d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit303f10605eea86d3ff32cebbf746682d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit303f10605eea86d3ff32cebbf746682d::$classMap;

        }, null, ClassLoader::class);
    }
}
