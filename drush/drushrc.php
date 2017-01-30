<?php

/**
 * Load additional drushrc.php files
 */
if (file_exists(__DIR__ . '/aliases/drushrc.php')) {
  include __DIR__ . '/aliases/drushrc.php';
}

/**
 * Local alias definitions
 */
if (file_exists(__DIR__ . '/aliases/aliases.drushrc.php')) {
  include __DIR__ . '/aliases/aliases.drushrc.php';
}
