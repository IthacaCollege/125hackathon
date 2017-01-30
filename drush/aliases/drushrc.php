<?php

// The first example "statusss" is just a simple test
// to make sure your environment is reading this file
// To test, run `drush @yoursite.instance statusss`
$options['shell-aliases'] = array(
  'statusss' =>
    '!echo "\nChecking the status of {{@target}}"
    drush {{@target}} status
    echo "\nChecking the status of {{#dev}}"
    drush {{#dev}} status
    echo "Finished checking the status of {{@target}} and {{#dev}}"',
  'data-dev' =>
    '!echo "\nReplacing the {{@target}} database with the one from {{#dev}}"
    drush sql-sync -y {{#dev}} {{@target}} --create-db --sanitize',
  'data-stage' =>
    '!echo "\nReplacing the {{@target}} database with the one from {{#stage}}"
    drush sql-sync -y {{#stage}} {{@target}} --create-db --sanitize',
  'data-live' =>
    '!echo "\nReplacing the {{@target}} database with the one from {{#live}}"
    drush sql-sync -y {{#live}} {{@target}} --create-db --sanitize',
  'files-dev' =>
    '!echo "\nSyncing files from {{#dev}} to {{@target}}"
    drush rsync -y {{#dev}}:%files {{@target}}:%files',
  'files-stage' =>
    '!echo "\nSyncing files from {{#stage}} to {{@target}}"
    drush rsync -y {{#stage}}:%files {{@target}}:%files',
  'files-live' =>
    '!echo "\nSyncing files from {{#live}} to {{@target}}"
    drush rsync -y {{#live}}:%files {{@target}}:%files',
  'confex' =>
    "!echo '\nDisabling development modules'
    drush {{@target}} pmu -y $(cat ./mods_enabled.local | tr '\n' ' ')
    echo '\nExporting configuration'
    drush {{@target}} cex -y
    echo '\nRe-enabling development modules'
    drush {{@target}} en -y $(cat ./mods_enabled.local | tr '\n' ' ')",
  'confim' =>
    "!echo '\nImporting configuration'
    drush {{@target}} cim -y
    echo '\nEnabling development modules'
    drush {{@target}} en -y $(cat ./mods_enabled.local | tr '\n' ' ')
    echo '\nUpdating database'
    drush {{@target}} updb -y
    echo '\nClearing caches'
    drush {{@target}} cr",
  'rebuild' =>
    "!echo '\nRunning composer install'
    composer install
    drush {{@target}} data-live
    drush {{@target}} confim
    echo '\nLogging into {{@target}} as uid1'
    drush {{@target}} uli uid=1",
  'confim-no-dev' =>
    '!echo "\nImporting configuration"
    drush {{@target}} cim -y
    echo "\nUpdating database"
    drush {{@target}} updb -y
    echo "\nClearing caches"
    drush {{@target}} cr',
);
