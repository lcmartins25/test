<?php
/**
 * ultimateexpedition functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ultimateexpedition
 */

if ( ! function_exists( 'ultimateexpedition_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function ultimateexpedition_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on ultimateexpedition, use a find and replace
	 * to change 'ultimateexpedition' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'ultimateexpedition', get_template_directory() . '/languages' );

	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'ultimateexpedition' ),
	) );

}
endif;
add_action( 'after_setup_theme', 'ultimateexpedition_setup' );

add_action('rest_api_init', 'register_rest_images_srcset' );
function register_rest_images_srcset(){
    register_rest_field( array('post', 'page', 'photos', 'query'),
        'featured_media_srcset',
        array(
            'get_callback'    => 'get_rest_featured_image_srcset',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image_srcset( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_srcset( $object['featured_media'], 'app-thumb' );
        return $img;
    }
    return false;
}

add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post', 'page', 'photos', 'search'),
        'featured_media_src',
        array(
            'get_callback'    => 'get_rest_featured_image_src',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image_src( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'large' );
        return $img[0];
    }
    return false;
}

add_action( 'rest_api_init', function () {
   register_rest_route( 'custom/v1', '/categories', array(
     'methods' => 'GET',
     'callback' => 'get_taxonomy_hierarchy',
   ) );
 } );

 function get_taxonomy_hierarchy( $taxonomy='category', $parent=1984) {
    $args=array(
            'taxonomy'   => 'category',
            'parent'     => $parent,
            'hide_empty' => 1,
            'orderby'    => 'name',
            'order'      => 'ASC',
        );
    $terms=get_terms( $args);
	$children=array();
	foreach ( $terms as $term) {
		$term->children=get_taxonomy_hierarchy( $taxonomy, $term->term_id);
		array_push($children, array( 
		    'id'   => $term->term_id, 
		    'name'      => $term->name,
		    'children'  => $term->children
		   ));
	}
	return $children;
}

 add_filter( 'rest_allow_anonymous_comments', '__return_true' );

// Remove link from old images
add_filter( 'the_content', 'attachment_image_link_remove_filter' );
 function attachment_image_link_remove_filter( $content ) {
  $content =
  preg_replace(
  array('{<a(.*?)(wp-att|wp-content/uploads)[^>]*><img}',
  '{ wp-image-[0-9]*" /></a>}'),
  array('<img','" />'),
  $content
  );
  return $content;
   }
?>
