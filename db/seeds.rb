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

puts "#{Post.count} posts created"

segment1 = Segment.create!(name: 'Home Decor')
segment2 = Segment.create!(name: 'Fashion')
segment3 = Segment.create!(name: 'Crafts')

puts "#{Segment.count} segments created"

post1.segments << segment1
post2.segments << segment2
post3.segments << segment3
post4.segments << segment1
post5.segments << segment2

comment1 = Comment.create!(content: 'Cool', user: @admin)
comment2 = Comment.create!(content: 'Pretty', user: @admin)
comment3 = Comment.create!(content: 'Neat', user: @tester)
comment4 = Comment.create!(content: 'Nice', user: @admin)
comment5 = Comment.create!(content: 'OMG', user: @tester)
comment6 = Comment.create!(content: 'Its great!', user: @admin)
comment7 = Comment.create!(content: 'Love it', user: @tester)
comment8 = Comment.create!(content: 'Good', user: @admin)
comment9 = Comment.create!(content: 'Thrifty!', user: @tester)
comment10 = Comment.create!(content: 'Chill', user: @admin)

puts "#{Comment.count} comments created"

post1.comments << comment1
post2.comments << comment2
post3.comments << comment3
post4.comments << comment4
post5.comments << comment5
post2.comments << comment6
post3.comments << comment7
post4.comments << comment8
post5.comments << comment9
post1.comments << comment10