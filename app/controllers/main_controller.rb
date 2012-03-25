class MainController < ApplicationController

  def index
    puts params
    @p = params[:url]
  end
end
