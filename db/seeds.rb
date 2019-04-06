

User.destroy_all()


User.create(
    email: "test@test.com",
    password: "password",
)

for i in (1..10)
    user = User.create(
        email: Faker::Internet.email(),
        password: "password",
    )

    puts user.id

    Video.create(
        title: "title",
        name: "name",
        duration: 20,
        genre: "genre",
        description: "description",
        trailer: "trailer",
        user_id: user.id,
    )

    puts User.find(user.id).videos[0].title

    # t.string "title"
    # t.string "name"
    # t.integer "duration"
    # t.string "genre"
    # t.string "description"
    # t.string "trailer"
end

puts "_____Database_Seeded_____"

