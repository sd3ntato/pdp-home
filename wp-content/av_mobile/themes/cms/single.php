<?php get_header(); ?>

	<div id="content">
		<?php while ( have_posts() ) { ?>
		
			<?php the_post(); ?>
            <div id="post-<?php echo $post->ID; ?>">
				<div class="<?php av_mobile_post_classes(); ?>">
					<div class="post-head-area">
						<h2 class="post-title heading-font"><?php the_title(); ?></h2>
						<div class="post-meta">
							<span class="post-date"><?php the_date(); ?> &bull;</span>
							<span class="post-author"><?php _e( 'By', AVLANG ); ?> <?php the_author(); ?></span>
						</div>
					</div>
					<?php if ( av_mobile_show_thumbnail_on_post() ) { ?>
						<img src="<?php av_mobile_the_post_thumbnail( 480, 320 ); ?>" alt="<?php the_title(); ?>" class="post-thumbnail wp-post-image" />
					<?php } ?>
					<?php the_content(); ?>
					<?php av_mobile_get_next_page_link(); ?>
				</div>
				
				<?php if ( comments_open() ) { ?>
					<?php if ( ! isset( $_GET['av_comments'] ) ) { ?>
						<div id="av-comments-link" class="av-comments-link">
							<button onclick="document.getElementById('comments').style.display='block';document.getElementById('av-comments-link').style.display='none';"><?php _e( 'Leave a Reply', AVLANG ); ?></button>
						</div>
					<?php } ?>
					<div id="comments" <?php if ( ! isset( $_GET['av_comments'] ) ) { echo 'style="display:none;"'; } ?>>
						<?php comments_template(); ?>
					</div>
				<?php } ?>
				
			</div>
		<?php } ?>
	</div> <!-- content -->
	
<?php get_footer(); ?>