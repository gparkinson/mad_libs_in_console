// alert("I'm working in JS") //
var storytext = "text text text";

function mad_libs(storytext) {
	// var storytext = "Well, we had all these " ;
					// get_noun(2) +
					// "children out planting trees, see, because we figured that ... that was part of their education, to see how, you know, the root systems ... and also the sense of responsibility, taking care of things, being individually responsible. You know what I mean. And the trees all died. They were orange trees. I don’t know why they died, they just died. Something wrong with the soil possibly or maybe the stuff we got from the nursery wasn’t the best. We complained about it. So we’ve got thirty kids there, each kid had his or her own little tree to plant and we’ve got these thirty dead trees. All these kids looking at these little brown sticks, it was depressing."

	document.write(storytext);
}

console.log("is this being run" storytext)

// mad_libs();

function noun_agreement(word,count)
{if (count==1) 
	{return word;}
	else
		{if (word == "children") 
			{return word;}
			else
			{return word+ "s";}}

}

function get_noun(count) {
	var nouns = ["children", "boy", "tree", "stick", "soil"];
	var nouncount = nouns.length;
	var nounnumber = Math.floor((Math.random() * nouncount) + 1);
	var noun = nouns[nounnumber];
	return noun_agreement(noun,count);
}
