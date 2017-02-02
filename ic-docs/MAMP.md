# If you'd like the install this site to use with MAMP, you can follow these instructions

## Clone this repo into your MAMP docroot. (Defined in MAMP's preferences.)

1. `cd /path/to/MAMP/docroot`
2. `git clone git@github.com:IthacaCollege/125hackathon.git`
3. `cd 125hackathon`

## Add the vhost record to MAMP's vhosts file

`vi /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf`

```
<VirtualHost *:80>
    DocumentRoot "/path/to/drupal/root" # This is just wherever you cloned the repo
    ServerName mamp.ithaca.edu # The url you want to type to get to the site locally
    ServerAlias mamp.ithaca.edu.*.xip.io # Optional: Implements xip.io to allow local device testing
</VirtualHost>
```

## Add the local domain to your /etc/hosts file

`sudo vi /etc/hosts`

`127.0.0.1 mamp.ithaca.edu` # The url MUST match the "ServerName" defined in the vhosts file in the last step

## Create the database in MAMP

1. Navigate to "localhost/phpmyadmin"
2. Click "New" in the left sidebar
3. Enter your desired database name
4. Change "Collation" to "utf8_general_ci"
5. Click "Create"

## Create settings.local.php

1. `cd /path/to/drupal/root/sites/default`
2. `cp example.settings.local.php settings.local.php`
3. Edit the new settings.local.php file, and add your database credentials, as well as a hash_salt, since Pantheon keeps that stored on their system instead of the settings file.)

```
$settings['hash_salt'] = 'pOCD7sErZs-6o1S_3TQlclKbKB1xVd1dhiEaGaprePsNZcmWxSWhNahMpm20U5Qct--S8yG_Kg';

$databases['default']['default'] = array (
  'database' => 'databasename', // Replace this with the database name you created
  'username' => 'root',
  'password' => 'root',
  'prefix' => '',
  'host' => '127.0.0.1',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);
```

## Create an alias for your MAMP instance

`vi ~/.drush/ic.aliases.drushrc.php`

```
<?php

$aliases['mamp'] = array (
   'root' => '/path/to/drupal/root',
   'uri' => 'http://mamp.ithaca.edu/',
   '#dev' => '@pantheon.125hackathon.dev',
   '#test' => 'pantheon.125hackathon.test',
   '#live' => '@pantheon.125hackathon.live',
 );
 ```
## Download your Drush aliases from Pantheon

1. Navigate to your [Pantheon Dashboard](https://dashboard.pantheon.io)
2. Click the button to download your "Drush Aliases"
3. Place the downloaded file in `~/.drush/`

## Grab the files from the live site

`drush @ic.mamp files-live`

## Build the site to get the database, etc.

`drush @ic.mamp rebuild`
