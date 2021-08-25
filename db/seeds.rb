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

@admin = User.create!(username: 'shaz', email: 'shaz@email.com', password: '123456')

puts "#{User.count} users created"

Post.create!(name: "Post01", 
            img_url: "https://www.serenaandlily.com/dw/image/v2/AASD_PRD/on/demandware.static/-/Sites-masterCatalog_SerenaandLily/default/dwe5b34f46/hi-res/Nursery_Felt_Animal_Heads_Elephant_MV_0285_Crop_BASE.jpg?sw=1600&sh=2000&sm=fit&strip=false",
            link_url: "https://www.serenaandlily.com/felted-wool-wall-animal-%E2%80%93-elephant/297458.html?utm_source=adlucent&utm_medium=cpc&utm_campaign=adlucent&gclid=CjwKCAjw1JeJBhB9EiwAV612y7e505zBzVL83gSg1YE7deLqGs00y8ytSkA1xyUTK5Lh9F_wHhcsahoC_TwQAvD_BwE#fo_c=745&fo_k=00ad9a64752d015cc37cda6a85a32cbc&fo_s=adlucent",
            description: "Let their imaginations run wild. From the hand-stitched details to the super soft, organic lambswool, this felted elephant brings well-crafted whimsy to the room. Lightweight and easy to mount on the wall.")
Post.create!(name: "Post02", 
            img_url: "https://photo.dwellinggawker.com/wp-content/uploads/2021/08/86107.jpg",
            link_url: "https://www.historiasdecasa.com.br/2021/08/24/casa-cheia-de-surpresas-capitulo-2/",
            description: "Fabio's house is completely amazing: two gardens, cozy bedroom and wooden hot tub. Check it out!")
Post.create!(name: "Post03", 
            img_url: "https://photo2.dwellinggawker.com/wp-content/uploads/2021/08/86097.jpg",
            link_url: "https://www.danslelakehouse.com/2021/07/summer-tablescape-with-loom-table.html",
            description: "Easy summer tablescape with affordable and custom table linens - in ANY size!")


puts "#{Post.count} posts created"

Segment.create!(name: 'Home Decor')
Segment.create!(name: 'Fashion')
Segment.create!(name: 'Crafts')

puts "#{Segment.count} segments created"

