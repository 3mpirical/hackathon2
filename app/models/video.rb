class Video < ApplicationRecord
    has_many :comments
    belongs_to :user

    @client = YouTubeIt::Client.new(:dev_key => "AIzaSyCzBCE_cIVEImQjC5DEsznG_XTgnHfmGcA")

    def self.search(input)
        @client.videos_by(:query => input)
    end
end
