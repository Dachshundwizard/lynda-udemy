(function() { // This will isolate any other Javascript

    var app = angular.module('myQuiz', [])

    app.controller('QuizController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
        $scope.score = 0;
        $scope.activeQuestion = -1; // This will incriment. This will show the intro screen, otherwise active question at 0 will be the first question in the array of Questions within the JSON file.
        $scope.activeQuestionAnswered = 0; // These Variables will change depending on the user_input
        $scope.percentage = 0;

        $http.get('quiz_data.json').then(function(quizData) { // 'quizData' object is going to equal the data that is retrieved by loading the 'quiz_data.json' file.
            $scope.myQuestions = quizData.data;
            $scope.totalQuestions = $scope.myQuestions.length; // array will give us the length
        });

        $scope.selectAnswer = function(qIndex, aIndex) {

            var questionState = $scope.myQuestions[qIndex].questionState; // Setting a questionState variable equal to the questionState of the question that was answered and we will pick that out by the index

            if (questionState != 'answered') { // This will first be set to false because we hve not answered it yet
                $scope.myQuestions[qIndex].selectedAnswer = aIndex; // We wil check the selected Answer based on what the user has clicked on
                var correctAnswer = $scope.myQuestions[qIndex].correct; // And this file will be set up based on the correct answer within the JSON file
                $scope.myQuestions[qIndex].correctAnswer = correctAnswer;

                if (aIndex === correctAnswer) { // if the correct answer is the same
                    $scope.myQuestions[qIndex].correctness = 'correct';
                    $scope.score += 1; // The original score was set to 0
                } else {
                    $scope.myQuestions[qIndex].correctness = 'incorrect';
                } // The first time they click it, the question is unanswered. Now the first time they click an answer in a particular question, the questionState is not going to equal answered, so this conditional statement here is going to run, and then we're going to figure out whether they clicked the right answer and set all of these properties.
                $scope.myQuestions[qIndex].questionState = 'answered'; // Somebody could continue to click on the induvidual answers. So every time we it is clicked. we're setting questionState equal to the questionState of the question.
            }
            $scope.percentage = ($scope.score / $scope.totalQuestions) * 100;
        }

        $scope.isSelected = function(qIndex, aIndex) { // Return true or false based on a condition
            return $scope.myQuestions[qIndex].selectedAnswer === aIndex; // Checking isSelected to be true or false
        }
        $scope.isCorrect = function(qIndex, aIndex) {
            return $scope.myQuestions[qIndex].correctAnswer === aIndex;
        }

        $scope.selectContinue = function() {
            return $scope.activeQuestion += 1; // Incriment the active question by 1
        }

        $scope.createShareLinks = function(percentage) {
               var url ='http://codifydesign.com';
               var emailLink ='<a class="btn email" href="mailto:?subject=Try to beat my score!&amp;body=I scored a '+percentage+'% on this quiz about Saturn. Try to beat my score at '+url+'">Email a friend</a>';
               var twitterLink ='<a class="btn twitter" target="_blank" href="http://twitter.com/share?text=I scored a X% on this quiz about Saturn. Try to beat my score at&amp;hashtage=SaturnQuiz&amp;url='+url+'">Tweet your score</a>';
               var newMarkup = emailLink + twitterLink;

               return $sce.trustAsHtml(newMarkup);
             }
         }]);

       })();
