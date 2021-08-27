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
@tester = User.create!(username: 'nash', email: 'nash@email.com', password: '123456')
@test2 = User.create!(username: 'Eva', email: 'eva@email.com', password: '123456')
@test3 = User.create!(username: 'annie', email: 'annie@email.com', password: '123456')
@test4 = User.create!(username: 'andrew', email: 'andrew@email.com', password: '123456')
@test5 = User.create!(username: 'lewis', email: 'lewis@email.com', password: '123456')

puts "#{User.count} users created"

post1 = Post.create!(name: "Post01", 
            img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/07/86055.jpg",
            link_url: "https://www.historiasdecasa.com.br/2021/07/29/lar-acolhedor-para-uma-vida-tranquila/",
            description: "Alex lives at Prédio Santo Antônio, a 100-year-old building. This apartment is full of tranquility and beauty.",
            user: @admin)
post2 = Post.create!(name: "Post02", 
            img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/08/86107.jpg",
            link_url: "https://www.historiasdecasa.com.br/2021/08/24/casa-cheia-de-surpresas-capitulo-2/",
            description: "Fabio's house is completely amazing: two gardens, cozy bedroom and wooden hot tub. Check it out!",
            user: @admin)
post3 = Post.create!(name: "Post03", 
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
            img_url: "https://photo2.stylegawker.com/wp-content/uploads/style/2020/09/252148.jpg",
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
post20 = Post.create!(name: "Rustic Bath", 
            img_url: "https://i.pinimg.com/564x/72/0f/30/720f30c50a093711c4f3a78c0c657e98.jpg",
            link_url: "",
            description: "my latest renovation",
            user: @test5)

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

comment1 = Comment.create!(content: 'Cool', user: @test5)
comment2 = Comment.create!(content: 'Pretty', user: @test5)
comment3 = Comment.create!(content: 'Neat', user: @test5)
comment4 = Comment.create!(content: 'Nice', user: @test5)
comment5 = Comment.create!(content: 'OMG', user: @tester)
comment6 = Comment.create!(content: 'Its great!', user: @tester)
comment7 = Comment.create!(content: 'Love it', user: @tester)
comment8 = Comment.create!(content: 'Good', user: @tester)
comment9 = Comment.create!(content: 'Thrifty!', user: @test2)
comment10 = Comment.create!(content: 'awesome', user: @test2)
comment11 = Comment.create!(content: 'bright colors!', user: @test2)
comment12 = Comment.create!(content: 'You\'re baby hedgehog level cute.', user: @test2)
comment13 = Comment.create!(content: 'Cool', user: @test3)
comment14 = Comment.create!(content: 'Pretty', user: @test3)
comment15 = Comment.create!(content: 'Neat', user: @test3)
comment16 = Comment.create!(content: 'OMG', user: @test3)
comment17 = Comment.create!(content: 'Nice', user: @test4)
comment18 = Comment.create!(content: 'Love it', user: @test4)
comment19 = Comment.create!(content: 'Awecome', user: @test4)
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