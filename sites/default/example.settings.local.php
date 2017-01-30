<?php

/**
 * Disable css and js preprocessing.
 */
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

/**
 * Disable Render Cache and Dynamic Page Cache.
 */
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

/**
 * Enable local development services.
 */
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

/**
 * Enable access to rebuild.php.
 */
$settings['rebuild_access'] = TRUE;
