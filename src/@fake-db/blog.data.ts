export class BlogFakeData {
  public static data = {
    // blog list
    blogList: [
      {
        id: 1,
        img: 'assets/images/slider/02.jpg',
        title: 'The Best Features Coming to iOS and Web design',
        avatar: 'assets/images/portrait/small/avatar-s-7.jpg',
        username: 'Ghani Pradita',
        blogPosted: 'Jan 10, 2020',
        tags: ['Quote', 'Fashion'],
        blogText: 'Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.',
        comment: 76
      },
      {
        id: 2,
        img: 'assets/images/slider/06.jpg',
        title: 'Latest Quirky Opening Sentence or Paragraph',
        avatar: 'assets/images/portrait/small/avatar-s-9.jpg',
        username: 'Jorge Griffin',
        blogPosted: 'Jan 10, 2020',
        tags: ['Gaming', 'Video'],
        blogText: 'Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.',
        comment: '2.1k'
      },
      {
        id: 3,
        img: 'assets/images/slider/04.jpg',
        title: 'Share an Amazing and Shocking Fact or Statistic',
        avatar: 'assets/images/portrait/small/avatar-s-3.jpg',
        username: 'Claudia Neal',
        blogPosted: 'Jan 10, 2020',
        tags: ['Gaming', 'Food'],
        blogText: 'Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.',
        comment: 243
      },
      {
        id: 4,
        img: 'assets/images/slider/03.jpg',
        title: 'Withhold a Compelling Piece of Information',
        avatar: 'assets/images/portrait/small/avatar-s-14.jpg',
        username: 'Fred Boone',
        blogPosted: 'Jan 10, 2020',
        tags: ['Video'],
        blogText: 'Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.',
        comment: 10
      },
      {
        id: 5,
        img: 'assets/images/slider/09.jpg',
        title: 'Unadvertised Bonus Opening: Share a Quote',
        avatar: 'assets/images/portrait/small/avatar-s-13.jpg',
        username: 'Billy French',
        blogPosted: 'Jan 10, 2020',
        tags: ['Quote', 'Fashion'],
        blogText: 'Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.',
        comment: 319
      },
      {
        id: 6,
        img: 'assets/images/slider/10.jpg',
        title: 'Ships at a distance have Every Man’s Wish on Board',
        avatar: 'assets/images/portrait/small/avatar-s-13.jpg',
        username: 'Helena Hunt',
        blogPosted: 'Jan 10, 2020',
        tags: ['Fashion', 'Video'],
        blogText:
          'A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.',
        comment: '1.5k'
      }
    ],

    // sidebar
    blogSidebar: {
      recentPosts: [
        {
          id: 7,
          img: 'assets/images/banner/banner-22.jpg',
          title: 'Why Should Forget Facebook?',
          postedAt: 'Jan 14 2020'
        },
        {
          id: 8,
          img: 'assets/images/banner/banner-27.jpg',
          title: 'Publish your passions, your way',
          postedAt: 'Mar 04 2020'
        },
        {
          id: 9,
          img: 'assets/images/banner/banner-39.jpg',
          title: 'The Best Ways to Retain More',
          postedAt: 'Feb 18 2020'
        },
        {
          id: 10,
          img: 'assets/images/banner/banner-35.jpg',
          title: 'Share a Shocking Fact or Statistic',
          postedAt: 'Oct 08 2020'
        }
      ],
      categories: [
        { category: 'Fashion', icon: 'watch' },
        { category: 'Food', icon: 'shopping-cart' },
        { category: 'Gaming', icon: 'command' },
        { category: 'Quote', icon: 'hash' },
        { category: 'Video', icon: 'video' }
      ]
    },

    // detail
    blogDetail: {
      blog: {
        img: 'assets/images/banner/banner-12.jpg',
        title: 'The Best Features Coming to iOS and Web design',
        avatar: 'assets/images/portrait/small/avatar-s-7.jpg',
        username: 'Ghani Pradita',
        postedAt: 'Jan 10, 2020',
        tags: ['Gaming', 'Video'],
        content: `<p>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul class="p-0 mb-2"><li class="d-block"><span class="mr-25">-</span><span>Preliminary thinking systems</span></li><li class="d-block"><span class="mr-25">-</span><span>Bandwidth efficient</span></li><li class="d-block"><span class="mr-25">-</span><span>Green space</span></li><li class="d-block"><span class="mr-25">-</span><span>Social impact</span></li><li class="d-block"><span class="mr-25">-</span><span>Thought partnership</span></li><li class="d-block"><span class="mr-25">-</span><span>Fully ethical life</span></li></ul>`,
        comments: '1.91k',
        bookmarked: 139
      },
      comments: [
        {
          avatar: 'assets/images/portrait/small/avatar-s-9.jpg',
          username: 'Chad Alexander',
          commentedAt: 'May 24, 2020',
          commentText:
            'A variation on the question technique above, the multiple-choice question great way to engage your reader.'
        }
      ]
    },

    // edit
    blogEdit: {
      avatar: 'assets/images/portrait/small/avatar-s-9.jpg',
      username: 'Chad Alexander',
      postedAt: 'May 24, 2020',
      blogTitle: 'The Best Features Coming to iOS and Web design',
      blogCategories: ['Fashion', 'Gaming', 'Food', 'Video', 'Quote'],
      slug: 'the-best-features-coming-to-ios-and-web-design',
      status: 'Published',
      blogText:
        '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
      featuredImage: 'assets/images/slider/03.jpg'
    }
  };
}
