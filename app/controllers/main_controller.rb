class MainController < ApplicationController

  def index
    puts params
    @p = params[:url]
    @t = params[:title]
  end
end
