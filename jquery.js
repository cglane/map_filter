$(document).ready(function() {
            $("p").find("span").addClass("selected");
            $('#answer1').text(averagePrice);
            $('#answer2').text(JSON.stringify(formattedMap));
            $('#answer3').text(name + ":    " + "$" +price);
            $('#answer4').text(JSON.stringify(array));
            $('#answer5').text(JSON.stringify(arrayEight));
            $('#answer6').text(JSON.stringify(numMadeBySeller));

         });
