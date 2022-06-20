<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`vo[O9)ybXTpOQ:(oX>PP}<p@?sn>ZV)8zk&@G4{FFTz4F *mB7R/t2+,II6@3^P' );
define( 'SECURE_AUTH_KEY',  '7:Hd9s8`TKVr7t*)F&AETjmWjk/-.xmF^qCO>jX*~0o>ii%aDHL@UwKw2,&TzXhR' );
define( 'LOGGED_IN_KEY',    '-2CJ?lt$]47KMYh[4Y/o>{Ua4TH!Nr:`qelJ/p6=@WzH.lg@M,w8W9}}E2&~0PN0' );
define( 'NONCE_KEY',        'H1D3P.1cw%E|[s$9DK*.P1p;SPreW(G1:ys!^#x={qsF6;+ #/;;onS~z}mGj91J' );
define( 'AUTH_SALT',        'bkY>pRwQ_rW~5|%3/JEV[tHKG$[rK`hyS6e+N/p1j~XBHr@4x_F`w4aV/,Pa>!@E' );
define( 'SECURE_AUTH_SALT', 'J}BV5] l6r%G?(=sun?)c!3zc:`<.oY2b3iwxF!cX{zsJv5cn~4`-9(Iat_x;Hge' );
define( 'LOGGED_IN_SALT',   ']pqG;U1n`y2c$/AaTrUk[{rS_y5DI=*]OqiPY$0h:W@#qnR3QU[T2<mYEm$0Z7*L' );
define( 'NONCE_SALT',       '_[f,6G(fBON_|$EF%M])5Lw ~Mj}gs$`$;.!@&~:%bqFQ}d,t<t3N1}s(]}X+[Ek' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
