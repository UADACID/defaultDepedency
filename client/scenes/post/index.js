class PostIndex extends BlazeComponent{  

	namaSaya(){
		var nama = "aji";
		return nama;
	}

  handleLike(e){
    e.preventDefault();
    console.log("Like btn pressed");
  }



}
PostIndex.register('PostIndex');

