names = ["Huckle", "Berry", "Finn", "John", "Lockeed", "Martin", "Malory", "Rook"]

question = ("Do you know this person? y/n \nAnswer: ")
answerCorrect = "Yes, you are correct! ✅"
answerWrong = "No, you are wrong! ❌"
answerTypo = "⚠️: Invalid response. Please choose y/n for answer!"

def nameList():
  score = 0
  for i in range(len(names)):
    currentResponse = 0
    while currentResponse == 0:
      print(f"Name: {names[i]}")
      answer = input(f"{question}")
      if answer.lower() == "y":
        print(f"{answerCorrect}")
        currentResponse = 1
        score += 1
      elif answer.lower() == "n":
        print(f"{answerWrong}")
        currentResponse = 1
        score -= 1
      else: 
        print(f'{answerTypo}')
  if score >= 4:
    print(f"Your Score: {score}")
nameList()
      
