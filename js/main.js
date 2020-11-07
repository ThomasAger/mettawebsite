
let loving_kindness_1 = ["be filled with loving-kindness", "be peaceful and at ease", "be well", "be happy"]
let all_beings = ["all beings"]
let everyone = ["everyone"]
let kindness = ["be happy", "have a nice day", "feel good"]
let family = ["my sister", "my father", "my mother", "my brother"]
let may = ["May"]
let lord_pray = ["lord, may", "heavenly father, may", "god above, may"]



window.onload = function() {

	// load settings from previous load
	var chosen_will = may
	var chosen_wish = kindness
	var chosen_being = everyone

	var will_el = 0
	var wish_el = 0
	var being_el = 0

	// update prayers with settings

	var focus_will = $('.focus > .will')
	var focus_being = $('.focus > .being')
	var focus_wish = $('.focus > .wish')


	var first_will = $('.first > .will')
	var first_being = $('.first > .being')
	var first_wish = $('.first > .wish')


	var second_will = $('.second > .will')
	var second_being = $('.second > .being')
	var second_wish = $('.second > .wish')


	var third_will = $('.third > .will')
	var third_being = $('.third > .being')
	var third_wish = $('.third > .wish')


	var fourth_will = $('.fourth > .will')
	var fourth_being = $('.fourth > .being')
	var fourth_wish = $('.fourth > .wish')

	var fifth_will = $('.fifth > .will')
	var fifth_being = $('.fifth > .being')
	var fifth_wish = $('.fifth > .wish')


	var sixth_will = $('.sixth > .will')
	var sixth_being = $('.sixth > .being')
	var sixth_wish = $('.sixth > .wish')


	var seventh_will = $('.seventh > .will')
	var seventh_being = $('.seventh > .being')
	var seventh_wish = $('.seventh > .wish')


	var eighth_will = $('.eighth > .will')
	var eighth_being = $('.eighth > .being')
	var eighth_wish = $('.eighth > .wish')


	var ninth_will = $('.ninth > .will')
	var ninth_being = $('.ninth > .being')
	var ninth_wish = $('.ninth > .wish')

	var tenth_will = $('.tenth > .will')
	var tenth_being = $('.tenth > .being')
	var tenth_wish = $('.tenth > .wish')

	function AddPrayer(will, wish, being) {
		will.text(chosen_will[will_el]) 
  		wish.text(chosen_wish[wish_el]) 
  		being.text(chosen_being[being_el]) 

  		will_el ++;
  		wish_el ++;
  		being_el ++;

  		if (will_el == chosen_will.length) {
  			will_el = 0;
  		} 
  		if (wish_el == chosen_wish.length) {
  			wish_el = 0;
  		} 
  		if (being_el == chosen_being.length) {
  			being_el = 0;
  		} 
	}
	
  	AddPrayer(focus_will, focus_wish, focus_being)
  	AddPrayer(first_will, first_wish, first_being)
  	AddPrayer(second_will, second_wish, second_being)
  	AddPrayer(third_will, third_wish, third_being)
  	AddPrayer(fourth_will, fourth_wish, fourth_being)
  	AddPrayer(fifth_will, fifth_wish, fifth_being)
  	AddPrayer(sixth_will, sixth_wish, sixth_being)
  	AddPrayer(seventh_will, seventh_wish, seventh_being)
  	AddPrayer(eighth_will, eighth_wish, eighth_being)
  	AddPrayer(ninth_will, ninth_wish, ninth_being)
  	AddPrayer(tenth_will, tenth_wish, tenth_being)


	document.getElementById('create').addEventListener("click", function() {
  		// The text from the ones below move up
  		
  		// First becomes focus

  		var focus_will = $('.focus > .will')
  		var focus_being = $('.focus > .being')
  		var focus_wish = $('.focus > .wish')


  		var first_will = $('.first > .will')
  		var first_being = $('.first > .being')
  		var first_wish = $('.first > .wish')


  		var second_will = $('.second > .will')
  		var second_being = $('.second > .being')
  		var second_wish = $('.second > .wish')


  		var third_will = $('.third > .will')
  		var third_being = $('.third > .being')
  		var third_wish = $('.third > .wish')


  		var fourth_will = $('.fourth > .will')
  		var fourth_being = $('.fourth > .being')
  		var fourth_wish = $('.fourth > .wish')

  		var fifth_will = $('.fifth > .will')
  		var fifth_being = $('.fifth > .being')
  		var fifth_wish = $('.fifth > .wish')


  		var sixth_will = $('.sixth > .will')
  		var sixth_being = $('.sixth > .being')
  		var sixth_wish = $('.sixth > .wish')


  		var seventh_will = $('.seventh > .will')
  		var seventh_being = $('.seventh > .being')
  		var seventh_wish = $('.seventh > .wish')


  		var eighth_will = $('.eighth > .will')
  		var eighth_being = $('.eighth > .being')
  		var eighth_wish = $('.eighth > .wish')


  		var ninth_will = $('.ninth > .will')
  		var ninth_being = $('.ninth > .being')
  		var ninth_wish = $('.ninth > .wish')

  		var tenth_will = $('.tenth > .will')
  		var tenth_being = $('.tenth > .being')
  		var tenth_wish = $('.tenth > .wish')


  		focus_will.text(first_will.text()) 
  		focus_being.text(first_being.text()) 
  		focus_wish.text(first_wish.text()) 

  		first_will.text(second_will.text()) 
  		first_being.text(second_being.text()) 
  		first_wish.text(second_wish.text()) 

  		second_will.text(third_will.text()) 
  		second_being.text(third_being.text()) 
  		second_wish.text(third_wish.text()) 

  		third_will.text(fourth_will.text()) 
  		third_being.text(fourth_being.text()) 
  		third_wish.text(fourth_wish.text()) 

  		fourth_will.text(fifth_will.text()) 
  		fourth_being.text(fifth_being.text()) 
  		fourth_wish.text(fifth_wish.text()) 

  		fifth_will.text(sixth_will.text()) 
  		fifth_being.text(sixth_being.text()) 
  		fifth_wish.text(sixth_wish.text()) 

  		sixth_will.text(seventh_will.text()) 
  		sixth_being.text(seventh_being.text()) 
  		sixth_wish.text(seventh_wish.text()) 

  		seventh_will.text(eighth_will.text()) 
  		seventh_being.text(eighth_being.text()) 
  		seventh_wish.text(eighth_wish.text()) 

  		eighth_will.text(ninth_will.text()) 
  		eighth_being.text(ninth_being.text()) 
  		eighth_wish.text(ninth_wish.text()) 

  		ninth_will.text(tenth_will.text()) 
  		ninth_wish.text(tenth_wish.text()) 
  		ninth_being.text(tenth_being.text()) 

  		AddPrayer(tenth_will, tenth_wish, tenth_being)
  		// The oldest one is populated
  		// All the buttons jump up and down
  		// An animation plays to send the current one
	});
}