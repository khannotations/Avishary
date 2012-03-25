class MainController < ApplicationController

  def index
    puts params
    @p = params[:url]
    @t = params[:title]
    if not @p
      render "show"
      return
    end
  end
end
