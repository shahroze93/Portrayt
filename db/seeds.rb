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


Post.create!(name: "test" image_url: "https://www.serenaandlily.com/dw/image/v2/AASD_PRD/on/demandware.static/-/Sites-masterCatalog_SerenaandLily/default/dwe5b34f46/hi-res/Nursery_Felt_Animal_Heads_Elephant_MV_0285_Crop_BASE.jpg?sw=1600&sh=2000&sm=fit&strip=false")

puts "#{Post.count} posts created"

# Segment.create!(name: 'Home Decor')
# Segment.create!(name: 'Fashion')
# Segment.create!(name: 'Crafts')

# puts "#{Segment.count} segments created"

