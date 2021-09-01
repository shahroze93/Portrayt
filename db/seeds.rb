# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Segment.destroy_all
Post.destroy_all
User.destroy_all
Comment.destroy_all

@admin = User.create!(username: 'shaz', email: 'shaz@email.com', password: '123456')
@test1 = User.create!(username: 'nash', email: 'nash@email.com', password: '123451a')
@test2 = User.create!(username: 'Eva', email: 'eva@email.com', password: '12345b')
@test3 = User.create!(username: 'annie', email: 'annie@email.com', password: '12345c')
@test4 = User.create!(username: 'isabella', email: 'isabella@email.com', password: '12345d')
@test5 = User.create!(username: 'lewis', email: 'lewis@email.com', password: '12345e')
@test6 = User.create!(username: 'dalanie', email: 'dalanie@email.com', password: '12345f')
@test7 = User.create!(username: 'mathyus', email: 'mathyus@email.com', password: '12345g')
@test8 = User.create!(username: 'amanda', email: 'amanda@email.com', password: '12345h')
@test9 = User.create!(username: 'tylena', email: 'tylena@email.com', password: '12345i')
@test10 = User.create!(username: 'doug', email: 'doug@email.com', password: '12345j')
@test11 = User.create!(username: 'jasmin', email: 'jasmin@email.com', password: '12345k')
@test12 = User.create!(username: 'kaya', email: 'kaya@email.com', password: '12345l')
@test13 = User.create!(username: 'olivia', email: 'olivia@email.com', password: '12345m')
@test14 = User.create!(username: 'alicia', email: 'alicia@email.com', password: '12345n')
@test15 = User.create!(username: 'lucy', email: 'lucy@email.com', password: '123450')
@test16 = User.create!(username: 'jessica', email: 'jessica@email.com', password: '12345p')
@test17 = User.create!(username: 'andrew', email: 'andrew@email.com', password: '12345q')
@test18 = User.create!(username: 'alfred', email: 'alfred@email.com', password: '12345r')
@test19 = User.create!(username: 'willow', email: 'willow@email.com', password: '12345s')

puts "#{User.count} users created"

post1 = Post.create!(name: "Heritage", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/07/86055.jpg",
link_url: "https://www.historiasdecasa.com.br/2021/07/29/lar-acolhedor-para-uma-vida-tranquila/",
description: "Alex lives at Prédio Santo Antônio, a 100-year-old building. This apartment is full of tranquility and beauty.",
user: @admin)
post2 = Post.create!(name: "Cozy", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/08/86107.jpg",
link_url: "https://www.historiasdecasa.com.br/2021/08/24/casa-cheia-de-surpresas-capitulo-2/",
description: "Fabio's house is completely amazing: two gardens, cozy bedroom and wooden hot tub. Check it out!",
user: @admin)
post3 = Post.create!(name: "Sunny Living", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/08/86097.jpg",
link_url: "https://www.danslelakehouse.com/2021/07/summer-tablescape-with-loom-table.html",
description: "Easy summer tablescape with affordable and custom table linens - in ANY size!",
user: @tester)
post4 = Post.create!(name: "Its all about happiness", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/08/86073.jpg",
link_url: "",
description: "Two backyards, beautiful garden and a lot of good memories: this is Vavina's house! Check it out.",
user: @tester)
post5 = Post.create!(name: "Home & Astrology", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/07/86057.jpg",
link_url: "",
description: "Is it possible to put together astrology and home decor? Yes, it is! Check it out.",
user: @admin)
post6 = Post.create!(name: "Cozy Room", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/05/85959.jpg",
link_url: "",
description: "This cozy apartment means a lot to the family - especially for the mother.",
user: @test2)
post7 = Post.create!(name: "Relaxing Atmosphere", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/05/85963.jpg",
link_url: "",
description: "This family lives in a criative and calm apartment. Affection and identification are the words that represent this home.",
user: @test2)
post8 = Post.create!(name: "Nails", 
img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2020/10/252180.jpg",
link_url: "",
description: "Celebrate summer, music, and sunshine with this retro mani.",
user: @test2)
post9 = Post.create!(name: "polish posh", 
img_url: "https://photo.stylegawker.com/wp-content/uploads/style/2020/10/252174.jpg",
link_url: "",
description: "With a monochrome color pallet, you can add a lot of elements without overwhelming the overall look",
user: @test2)
post10 = Post.create!(name: "spider nails", 
img_url: "https://3.bp.blogspot.com/-ouZSxNkKWyQ/WAsFHyTUHvI/AAAAAAAA4Po/nkUDppL3tO4ivwadg1A5HbPyBFeh1ev2QCLcB/s1600/Halloween%2BBlack%2BWidow%2BSpider%2BNail%2BArt%2B%25284%2529.JPG",
link_url: "",
description: "Painting some nail art over nail wraps adds a little something extra.",
user: @test3)
post11 = Post.create!(name: "casually cute", 
img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2021/04/252226.jpg",
link_url: "",
description: "A casually cute Parisian style transitional look",
user: @test3)
post12 = Post.create!(name: "homebody", 
img_url: "https://photo.stylegawker.com/wp-content/uploads/style/2020/02/252008.jpg",
link_url: "",
description: "outfit as well as a few fun things to do if you're staying in",
user: @test2)
post13 = Post.create!(name: "", 
img_url: "https://photo.stylegawker.com/wp-content/uploads/style/2020/02/252004.jpg",
link_url: "",
description: "A layered look that can be worn from day to night, office to event/party.",
user: @test4)
post14 = Post.create!(name: "aztec clay mask", 
img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2020/01/251980.jpg",
link_url: "",
description: "The DIY Aztec clay mask that works for every skin type",
user: @test4)
post15 = Post.create!(name: "Oatmeal Masks", 
img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2020/01/251972.jpg",
link_url: "https://track.stylegawker.com/251972/https://helloglow.co/oatmeal-face-masks/",
description: "7 DIY oatmeal face masks for every skin type",
user: @test5)
post16 = Post.create!(name: "honey soap", 
img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2020/01/251986.jpeg",
link_url: "https://track.stylegawker.com/251986/https://helloglow.co/honey-soap/",
description: "How to make wildflower honey soap",
user: @test5)
post17 = Post.create!(name: "Mason Jar Craft", 
img_url: "https://craftsbyamanda.com/wp-content/uploads/2019/09/Fall-Mason-Jars2.jpg",
link_url: "",
description: "Lets get seasonal",
user: @test4)
post18 = Post.create!(name: "Tie Dye Bags", 
img_url: "https://craftsbyamanda.com/wp-content/uploads/2021/07/drip-tye-die-backpack-RC-SQ-768x768.jpg",
link_url: "",
description: "Add a new colorful look to your collection",
user: @test4)
post19 = Post.create!(name: "A Sunny Welcome", 
img_url: "https://craftsbyamanda.com/wp-content/uploads/2021/08/sunflower-wreath-RC-SQ-768x768.jpg",
link_url: "",
description: "Sunflower Wreath that I made over the weekend",
user: @tester)
post20 = Post.create!(name: "Cute Fox Planters", 
img_url: "https://www.thecrafttrain.com/wp-content/uploads/2020/11/woodland-animal-planters-square.jpg",
link_url: "",
description: "woodland animal plastic bottle planters",
user: @tester)
post21 = Post.create!(name: "Rustic Bath", 
img_url: "https://i.pinimg.com/564x/72/0f/30/720f30c50a093711c4f3a78c0c657e98.jpg",
link_url: "",
description: "my latest renovation",
user: @test5)
post22 = Post.create!(
name: "Mesmerizing Mauve", 
img_url: "https://1.bp.blogspot.com/-BSchmWTj8t0/XWtXm_3sN6I/AAAAAAAALKM/cdV7qYgLp9cI-ertmuEe51XiH6SNGA4WQCLcBGAs/s400/DSC07711-1_edited-1.jpg",
link_url: "",
description: "Mesmerizing Mauve is a dusty mauve creme from the Wrapped In Mystery Fall 2019 Collection from Artistic Nail Design. The collection is inspired by every woman's need to find their own version of glam.",
user: @est8)
post23 = Post.create!(
name: "Rustic", 
img_url: "https://i.pinimg.com/564x/72/0f/30/720f30c50a093711c4f3a78c0c657e98.jpg",
link_url: "",
description: "my latest renovation",
user: @test6)
post24 = Post.create!(
name: "Bamboo craft, Bamboo art, Miniature House", 
img_url: "https://i.etsystatic.com/29501228/r/il/5880e8/3325017151/il_1588xN.3325017151_22v2.jpg",
link_url: "https://www.etsy.com/listing/1056617546/bamboo-craft-bamboo-art-miniature-house?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=handicrafts&ref=sr_gallery-1-10&frs=1",
description: "The miniature is totally made of bamboo, the base is made of plywood. The deck looks realistic and makes people wonder. This is not dollhoue to play with. This is a precise miniature which is a perfect showpiece for your home. Bamboo are cut and processed by hand only. Precise cutting and assembling makes it beautiful and realistic. A perfect showpiece and a wonderful gift for your loved ones.",
user: @test7)
post25 = Post.create!(
name: "Beautiful Wooden Hand Carved Good Luck Symbol Owl Statue", 
img_url: "https://i.etsystatic.com/18113588/r/il/e24297/1620302613/il_1588xN.1620302613_97ak.jpg",
link_url: "https://www.etsy.com/listing/632112393/beautiful-wooden-hand-carved-good-luck?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=handicrafts&ref=sr_gallery-1-8",
description: "Owls represent lucky charms for fortune and protection and they also symbolize knowledge.",
user: @test6)
post26 = Post.create!(
name: "miniature wooden musicians", 
img_url: "https://i.etsystatic.com/24196782/r/il/eb37a2/3293356923/il_1588xN.3293356923_rgn0.jpg",
link_url: "https://www.etsy.com/listing/1062541759/think-craft-india-home-decor-table-decor?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=handicrafts&ref=sr_gallery-1-2&frs=1",
description: "",
user: @test6)
post27 = Post.create!(
name: "Spirit Of America", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/36434.jpg?",
link_url: "https://www.everythingcrossstitch.com/spirit-of-america-mrp-p36434.aspx?k2=y5c66",
description: "Pattern was designed from the artwork of Michael Humphreys.s. Beautifully-colored and richly detailed counted cross stitch pattern that is easy enough for the beginner yet stimulating enough for even the most advanced stitcher. Full cross stitch only. Cover shows the finished dimensions for 14, 18 and 22-count fabric. With 12 years experience, Mystic Stitch is one of the first innovative Needlework Designers to specialize solely in the conversion of artwork to cross stitch pattern. Quality you can count on.",
user: @test9)
post28 = Post.create!(
name: "Winter Magic", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/76891.jpg?",
link_url: "https://www.everythingcrossstitch.com/winter-magic-crop-mrp-p76891.aspx?k2=y5c66",
description: "This counted cross stitch pattern was created from beautiful Artwork Copyright of Mark Keathley. Only full cross stitches are used in this pattern. It is a black and white symbol pattern.",
user: @test11)
post29 = Post.create!(
name: "STRIPED WIDE LEG PANTS, BELL SLEEVE TOP.", 
img_url: "https://thehuntercollector.com/wp-content/uploads/2019/08/striped-pants-1-2-850x1275.jpg",
link_url: "https://thehuntercollector.com/striped-wide-leg-pants-bell-sleeve-top/",
description: "If these photos don’t make it obvious let me express how excited I’m am not only for the long weekend but also to be heading to New York",
user: @test15)
post30 = Post.create!(
name: "'Kiss Me’ DIY Sugar Lip Scrub with Honey", 
img_url: "https://helloglow.co/wp-content/uploads/2015/02/Lip-Scrub_small.jpg",
link_url: "https://helloglow.co/diy-sugar-lip-scrub-with-honey/",
description: "How to Make a DIY Sugar Lip Scrub",
user: @test14)
post31 = Post.create!(
name: "tiny house", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/06/86005.jpg",
link_url: "",
description: "",
user: @test19)
post32 = Post.create!(
name: "DIY Leave-in Coconut Milk Conditioner Spray", 
img_url: "https://helloglow.co/wp-content/uploads/2019/09/Coconut-Milk-Conditioner-Spray.jpg",
link_url: "https://helloglow.co/diy-coconut-milk-conditioner-spray/",
description: "I was surprised to learn how good coconut milk is for skin, but also for the hair",
user: @test14)
post33 = Post.create!(
name: "Jumping Elf Puppets", 
img_url: "https://i.pinimg.com/474x/d1/d3/23/d1d323554915e375b0a9a57c82bf8b92.jpg",
link_url: "",
description: "",
user: @test12)
post34 = Post.create!(
name: "halloween bat craft", 
img_url: "https://i.pinimg.com/474x/16/fb/90/16fb905631261f251c84573fc249237b.jpg",
link_url: "",
description: "",
user: @test12)
post35 = Post.create!(
name: "ALL LILAC OUTFIT", 
img_url: "http://samieze.com/wp-content/uploads/2020/07/all-lilac-outfit-palazzo-pants-styling-lavender-cai-jewellery-schmuck-pearly-ear-cuff-summer-style-2020-berlin-samieze-8.jpg",
link_url: "http://samieze.com/2021/08/all-lilac-outfit/",
description: "",
user: @test4)
post36 = Post.create!(
name: "FAVOURITE SNEAKER SUMMER LOOKS", 
img_url: "http://samieze.com/wp-content/uploads/2021/05/summer_dress_and_sneakers_girly_sporty_2021_outfit_post_converse_dadsneakers6.jpg",
link_url: "http://samieze.com/2021/05/favourite-sneaker-summer-looks/",
description: "",
user: @test4)
post37 = Post.create!(
name: "Lime-Light", 
img_url: "https://1.bp.blogspot.com/-sKPY5QtT4Oc/YKnDxStegaI/AAAAAAAAMH8/gmPPoGOPNbw2c-FANuUBhLJmjLBSdnq_QCLcBGAsYHQ/w400-h400/DSC02252-1.JPG",
link_url: "",
description: "This mani is a rock n' roll, Hard Rock style. Metal spikes, chains, and rhinestones really glam up this look.",
user: @test12)
post38 = Post.create!(
name: "minimalism", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/07/86039.jpg",
link_url: "",
description: "",
user: @test16)
post39 = Post.create!(
name: "MY MUST-HAVE TRAVEL ESSENTIALS I NEVER TRAVEL WITHOUT", 
img_url: "https://i1.wp.com/jyoshankar.com/wp-content/uploads/2019/12/IMG_9430.jpg",
link_url: "https://jyoshankar.com/2019/12/my-must-have-travel-essentials-i-never-travel-without/",
description: "",
user: @test7)
post40 = Post.create!(
name: "PHILIPPINES : THE FUNNY LION, CORON", 
img_url: "https://i2.wp.com/jyoshankar.com/wp-content/uploads/2019/12/jyoshankar_funnylion_coron_asiacollective_travelblogger_philippines_14.jpg",
link_url: "",
description: "",
user: @test9)
post41 = Post.create!(
name: "All The Best Fall Dresses I Tried On So You Don’t Have To…", 
img_url: "https://theeffortlesschic.com/wp-content/uploads/2019/10/Collages19.jpg",
link_url: "",
description: "",
user: @test15)
post42 = Post.create!(
name: "19 Super Stylish Ways to Tie a Scarf (With Video Tutorial)", 
img_url: "https://helloglow.co/wp-content/uploads/2019/09/The-Cowl.jpg",
link_url: "https://helloglow.co/how-to-tie-a-scarf/",
description: "",
user: @test10)
post43 = Post.create!(
name: "VIONIC SUEDE BOOTIES, LACE DRESS.", 
img_url: "https://thehuntercollector.com/wp-content/uploads/2019/09/vionic-3-850x1273.jpg",
link_url: "",
description: "",
user: @test10)
post44 = Post.create!(
name: "Full of Thanks & Giving", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/83135.jpg",
link_url: "",
description: "",
user: @test13)
post45 = Post.create!(
name: "Sunflower Patchwork", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/79860.jpg",
link_url: "",
description: "",
user: @test14)
post46 = Post.create!(
name: "Cardinal Basket", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/2961.jpg?",
link_url: "",
description: "",
user: @test16)
post47 = Post.create!(
name: "", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/04/85903.jpeg",
link_url: "",
description: "",
user: @test18)
post48 = Post.create!(
name: "coffee table styling", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/02/85863.jpg",
link_url: "",
description: "",
user: @test1)
post49 = Post.create!(
name: "Canoe Camp Buffalo", 
img_url: "https://www.everythingcrossstitch.com/images/product/responsive/87501.jpg",
link_url: "",
description: "",
user: @test11)
post50 = Post.create!(
name: "Inspiration: A Muted Sage Green Kitchen", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/02/85867.jpg",
link_url: "",
description: "",
user: @test19)
post51 = Post.create!(
name: "Don't Be Afraid of Black Paint", 
img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-ideas-7370caf99372558a9db9d3834c693dbd-1547158685.jpg",
link_url: "",
description: "",
user: @test17)
post52 = Post.create!(
name: "Style an Empty Fireplace", 
img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-ideas-hbx010120leanneford-021-1581369356.jpg",
link_url: "",
description: "",
user: @test17)
post53 = Post.create!(
name: "Re-Style a Bookshelf", 
img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-design-ideas-flhargraves-st-07-1572385092.jpg?",
link_url: "",
description: "",
user: @test8)
post54 = Post.create!(
name: "", 
img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/46981523-2431583470402708-59846841217443061-n-1548432730.jpg",
link_url: "",
description: "Throw pillows are the easiest way to freshen up in the bedroom or living room. Introducing a new color, print, or shape with a throw pillow can make the whole space feel new again.",
user: @test8)
post55 = Post.create!(
name: "comfort and tranquility", 
img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/08/86083.jpg",
link_url: "",
description: "",
user: @test19)
post56 = Post.create!(
name: "", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/08/86063.jpg",
link_url: "",
description: "I Could Stare At This Home All Day",
user: @tes11)
post56 = Post.create!(
name: "", 
img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/08/86063.jpg",
link_url: "",
description: "I Could Stare At This Home All Day",
user: @tes11)

puts "#{Post.count} posts created"

segment1 = Segment.create!(name: 'Home Decor')
segment2 = Segment.create!(name: 'Fashion')
segment3 = Segment.create!(name: 'Crafts')

puts "#{Segment.count} segments created"

post1.segments << segment1
post2.segments << segment1
post3.segments << segment1
post4.segments << segment1
post5.segments << segment1
post6.segments << segment1
post7.segments << segment1
post8.segments << segment2
post9.segments << segment2
post10.segments << segment2
post11.segments << segment2
post12.segments << segment2
post13.segments << segment2
post14.segments << segment2
post15.segments << segment3
post16.segments << segment3
post17.segments << segment3
post18.segments << segment3
post19.segments << segment3
post20.segments << segment3
post21.segments << segment1
post22.segments << segment2
post23.segments << segment1
post24.segments << segment3
post25.segments << segment3
post26.segments << segment3
post27.segments << segment3
post28.segments << segment3
post29.segments << segment2
post30.segments << segment3
post31.segments << segment1
post32.segments << segment2
post33.segments << segment3
post34.segments << segment3
post35.segments << segment2
post36.segments << segment2
post37.segments << segment2
post38.segments << segment2
post39.segments << segment2
post40.segments << segment2
post41.segments << segment2
post42.segments << segment2
post43.segments << segment2
post44.segments << segment3
post45.segments << segment3
post46.segments << segment3
post47.segments << segment1
post48.segments << segment1
post49.segments << segment3
post50.segments << segment1
post51.segments << segment1
post52.segments << segment1
post53.segments << segment1
post54.segments << segment1
post55.segments << segment1
post56.segments << segment1

comment1 = Comment.create!(content: 'Cool', user: @test5)
comment2 = Comment.create!(content: 'Pretty', user: @test5)
comment3 = Comment.create!(content: 'Neat', user: @test5)
comment4 = Comment.create!(content: 'Nice', user: @test5)
comment5 = Comment.create!(content: 'OMG', user: @tester)
comment6 = Comment.create!(content: 'Its great!', user: @test1)
comment7 = Comment.create!(content: 'Love it', user: @test1)
comment8 = Comment.create!(content: 'Good', user: @test7)
comment9 = Comment.create!(content: 'Thrifty!', user: @test2)
comment10 = Comment.create!(content: 'awesome', user: @test2)
comment11 = Comment.create!(content: 'bright colors!', user: @test2)
comment12 = Comment.create!(content: 'You\'re baby hedgehog level cute.', user: @test4)
comment13 = Comment.create!(content: 'Cool', user: @test3)
comment14 = Comment.create!(content: 'Pretty', user: @test3)
comment15 = Comment.create!(content: 'Neat', user: @test3)
comment16 = Comment.create!(content: 'OMG', user: @test3)
comment17 = Comment.create!(content: 'Nice', user: @test4)
comment18 = Comment.create!(content: 'Love it', user: @test4)
comment19 = Comment.create!(content: 'Awesome', user: @test4)
comment20 = Comment.create!(content: 'Great', user: @test4)

puts "#{Comment.count} comments created"

post1.comments << comment1
post2.comments << comment2
post3.comments << comment3
post4.comments << comment4
post5.comments << comment5
post6.comments << comment6
post7.comments << comment7
post8.comments << comment8
post9.comments << comment9
post10.comments << comment10
post11.comments << comment11
post12.comments << comment12
post13.comments << comment13
post14.comments << comment14
post15.comments << comment15
post16.comments << comment16
post17.comments << comment17
post18.comments << comment18
post19.comments << comment19
post20.comments << comment20