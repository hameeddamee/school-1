var User = require('../../models/user');

exports.get = async (ctx) => {

  if (ctx.session.user != null) {
    var userId = ctx.session.user._id;

    var user = await User.findById(userId).catch(function(){
      console.log('Error happened when tried to find user in database!');
      ctx.body = 'Error! Try to reload the page';
    });
    //ctx.body = ctx.renderPug('checkout', {user12: user});
    if (user) {
      ctx.state.user = user;
      await ctx.render('checkout');
    }
    else {
      console.log('user whith such id is not exist');
      await ctx.redirect('/');
    }
  }
  else {
    await ctx.redirect('/');
  }
}
