const Links1 = 'python-notes'
const Links2 = 'python-ai'
const Links3 = 'python-framework'
const Links4 = 'python-projects'

const isHighlighted = 'python-notes'

export const pythonData = {
    pythonNote: [
        {
            id: 1,
            section: 'Introduction to Python',
            title: "What is Python?",
            note: [
                {
                    text1: `
                    
                    ✅ Core Python	variables, data types, functions, loops, dicts, lists
✅ OOP	classes, inheritance, encapsulation
✅ Data structures & algorithms	recursion, sorting, search, stacks, queues
✅ File handling	read/write files, JSON, CSV
✅ Exception handling	try-except, custom errors
✅ Modules & Packages	import, pip, virtual environments
✅ Advanced Python	decorators, generators, lambda, *args/**kwargs
✅ Standard Libraries	datetime, collections, itertools, os
✅ Tools	Jupyter, VS Code, pip, virtualenv
✅ Testing	unittest, pytest
✅ Real Projects	REST APIs, games, automation, data analysis, etc.

Note: It's just convention. Python follows PEP 8, which recommends <b>snake_case</b> for function and variable names, and <b>PascalCase</b> for class names.

EX : function name : show_my_name







🔲 Topics You Might Still Need to Cover
🔄 1. Django REST Framework - Advanced

Topic <b>-></b>	Description
🔲 ModelSerializer <b>-></b>    Simplifies serializer creation for models
🔲 ViewSets & Routers <b>-></b>     Cleaner way to handle CRUD using one class
🔲 Pagination <b>-></b>     For listing large sets of data
🔲 Filtering & Searching <b>-></b>  With filter_backends, SearchFilter, etc.
🔲 Permissions & Authentication <b>-></b>   JWT/Auth token, IsAuthenticated, etc.
🔲 Throttling & Rate Limiting <b>-></b>     To avoid API overuse
🔲 Custom API Responses <b>-></b>   Return custom error/success formats
🔲 Error Handling <b>-></b>     Handle validation or 404 errors properly
🛡️ 2. Security & Production Setup
Topic <b>-></b>     Description
🔲 CORS setup <b>-></b>     For frontend-backend communication
🔲 JWT or Token Auth <b>-></b>  For login/logout/token refresh
🔲 Deployment <b>-></b>     Using Heroku, Vercel, or other
🔲 Environment variables (.env) <b>-></b>   For hiding secrets like DB keys
🌐 3. Frontend Integration (Optional)

If you're planning React/Vue frontend:

    🔲 CORS

    🔲 API calls using axios or fetch

    🔲 Token-based login integration

📦 4. Bonus Topics (Real-World Usage)
Topic <b>-></b>     Description
🔲 Django Signals <b>-></b>     For post-save hooks, etc.
🔲 Background Tasks (Celery) <b>-></b>  For email, image processing, etc.
🔲 File Upload APIs <b>-></b>   Images, PDFs, etc.
🔲 Testing APIs <b>-></b>   With APITestCase or Postman
🔲 Swagger / API Docs <b>-></b>     Auto-generating API documentation
✅ Summary

You’ve already learned:

    Basic to intermediate DRF usage

    CRUD API development

    SQLite integration

    Admin usage

    Class-based and function-based views

👉 Next Suggested Steps:

If you're building an API project (like your Movie App), here's what I recommend next:

    ✅ Use ModelSerializer and ViewSet

    ✅ Add pagination, filtering, and search

    ✅ Implement login with JWT (using djangorestframework-simplejwt)

    ✅ Add Swagger API docs (drf_yasg or drf-spectacular)

    ✅ Deploy your API on Render, Railway, or Heroku


    //////////////////////////////////////////////////////////////
    <b>The PCPP1™ certification shows that the individual is familiar with the following concepts</b>:

    <b>Advanced use of classes and modelling real-life problems in the OOP categories</b>:
        Classes
        Instances
        Attributes
        Methods
        Class and instance data
        Shallow and deep operations
        Inheritance and polymorphism
        Extended function argument syntax and decorators
        Static and class methods
        Attribute encapsulation
        Composition and inheritance
        Advanced exceptions
        Copying object data
        Serialization
        Metaclasses

    <b>Best practices and standardization</b>:
        PEP8
        PEP 257
        Code layout
        Comments and docstrings
        Naming conventions
        String quotes and whitespaces
        Programming recommendations

    <b>GUI programming</b>:
        Events
        Widgets
        Geometry
        Tools and toolkits
        Conventions

    <b>The elements of network programming</b>:
        Network sockets
        Client-server communication
        JSON and XML files in network communication
        HTTP methods
        CRUD
        Building a simple REST client
    <b>File processing and communicating with a program's environment</b>:
        Processing files:<b> sqlite3, xml, csv, logging, and configparser</b>
        Communication: <b>os, datetime, io, and time</b>



<b>
    All developer skills, plus:

    Software architecture

    Design patterns

    System design

    Algorithms & data structures
</b>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Installing Python",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Naming convention in Python",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: 'Basic Syntax',
            title: "Python syntax and structure",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What does %d do in Python?",
            note: [
                {
                    text1: `The %d operator is used as a placeholder to specify integer values, decimals, or numbers. It allows us to print numbers within strings or other values. The %d operator is put where the integer is to be specified.`,
                    code1: `# declaring numeric variables
                    num = 2021

                    # concatenating numeric value within string
                    print("%d is here!!" % num)`
                }
            ]
        },
        {
            id: 1,
            title: "(f-string) : formatted string literal",
            note: [
                {
                    text1: `The f in strings like this:
                    f"Hello, {name}!"
                    is short for f-string, which stands for formatted string literal.
                    
                    <b>f-String Syntax</b>
f"some text {variable_or_expression} more text"

                    <b>What is an f-string?</b>
An f-string lets you insert variables or expressions directly into a string using {}.
It was introduced in Python 3.6 and makes string formatting easier and cleaner.
🔍 Without f-string (older way):
name = "Anand"
print("Hello, " + name + "!")

✅ With f-string (modern way):
name = "Anand"
print(f"Hello, {name}!")`,
                    code1: `//------------ Ex : 1 ---------
                    a = 10
b = 5
print(f"The sum of {a} and {b} is {a + b}")
//Output: The sum of 10 and 5 is 15`
                },
                {
                    text1: ``,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "chained comparison",
            note: [
                {
                    text1: `Chained comparison is a way to write multiple comparisons in one clean, readable expression — just like you do in math.

                    Chained comparison, in programming, involves combining multiple comparison operations within a single expression, making the code more concise and readable. For example, instead of writing x > y and y > z, you can write x > y > z in Python. This allows you to check if multiple conditions are met in a sequence. 

                    Checking multiple conditions in a single expression is common in programming. In Python, comparison operator chaining allows us to write cleaner, more readable code when evaluating multiple conditions. Instead of using multiple and conditions, Python enables chaining comparisons directly in a mathematical-style expression.
                    `,
                    code1: `// ----------- Ex : 1 -----------
                    x = 5

if 1 < x < 10:
    print("x is between 1 and 10")

// This is equivalent to:
if 1 < x and x < 10:
    print("x is between 1 and 10")
    
    // ---------- Ex : 2 --------
    x, y, z = 5, 10, 20

if x < y <= z:
    print("y is greater than x and less than or equal to z")`
                }
            ]
        },
        {
            id: 1,
            section: `Python Control Statements`,
            title: "Iterative Statements / Repetition statement",
            note: [
                {
                    text1: `Iteration  / repetition refers to the execution of the same code multiple times in succession.
    Repetition of a set of statements in a program is made possible using looping constructs.

    => Looping constructs provide the facility to execute a set of statements in a program repetitively, based on a condition.
    => The statements in a loop are executed again and again as long as the particular logical condition remains true.
    => This condition is checked based on the value of a variable called the loop's control variable
    => When the condition becomes false, the loop terminates.

    => Repetition statements are called loops, and are used to repeat the same code multiple times in succession.
    => Python has two types of loops: Condition-Controlled and Count-Controlled
    => Condition-Controlled loop uses a true/false condition to control the number of times that it repeats - <b>while</b>. Basic syntax:
    while condition:
       statement(s) # notice the indent from of this line relative to the while

    Count-Controlled loop repeats a specific number of times - <b>for</b>. Basic syntax:

    for variable in [value1, value2, etc.]:
       statement(s) # notice the indent from of this line relative to the for
`,
                    code1: `//for variable in [value1, value2, etc.]:
//    statement(s) # notice the indent from of this line relative to the for

//    Examples of for loops
//    --------- Ex : 1 ---------
//    # This program demonstrates a simple for loop
//    # that uses a list of numbers.
   print('I will display the numbers 1 through 5.')
   for num in [1, 2, 3, 4, 5]:
       print num
//    Output:
//    I will display the numbers 1 through 5.
//    1
//    2
//    3
//    4
//    5

// ------------   Ex: 2 ----------
//    # This program also demonstrates a simple for
//    # loop that uses a list of strings.

colors = ['red', 'green', 'blue']
for col in colors:
  if col == 'green':
    print('I love green', col)

for name in ['Winken', 'Blinken', 'Nod']:
  print(name)

//    Output:
// I love green green
// Winken
// Blinken
// Nod

//    **** Using the \`range\` function with the for loop *****
//    "range" simplifies count-controlled "for" loops
// ------------   Ex: 3 ----------
   for num in range(5):
       print num
//    Numbers from 0 through and up till, but not including, 5 are generated. Equivalent to:
   for num in [0, 1, 2, 3, 4]:
       print num
//    Passing a second argument to range the first is used as the starting point and the second is used as the ending limit
   for num in range(1, 5):
       print num
//    Output:
//    1
//    2
//    3
//    4

// ------------   Ex: 4 ----------
//    By default the range function increments by 1, passing a third argument defines the step amount:
   for num in range(1, 10, 2):
       print num
//    Output:
//    1
//    3
//    5
//    7
//    9

// ------------   Ex: 5 ----------
//    The target value can be used in the loop:
//    # Print the table headings.
print ('%-10s%-10s' % ('Number', 'Square'))
print ('--------------------')

//    # Print the numbers 1 through 10
//    # and their squares.
for number in range(1, 11):
  square = number**2
  print ('%10d%10d' % (number, square))
//    Output:
//    Number    Square    
//    ------------------
//             1         1
//             2         4
//             3         9
//             4        16
//             5        25
//             6        36
//             7        49
//             8        64
//             9        81
//            10       100


// ------------   Ex: 6 ----------
print("1st example")

lst = [1, 2, 3]
for i in range(len(lst)):
     print(lst[i], end = " \\n")

print("2nd example")

for j in range(0,5):
    print(j, end = " \\n")
   `
                },
                {
                    text1: `In Python, while loops are used to execute a block of statements repeatedly until a given condition is satisfied. Then, the expression is checked again and, if it is still true, the body is executed again. This continues until the expression becomes false.

                    The following code iterates from 0 to 4 and prints each value using a <b>while</b> loop. It prints <b>End</b> to signify the end of the program after the loop is completed.`,
                    code1: ``
                },
                {
                    text1: `<b>Python for Loop with Strings</b>
A string is a sequence of Unicode letters, each having a positional index. Since, it is a sequence, you can iterate over its characters using the for loop.

<u>Example</u>
The following example compares each character and displays if it is not a vowel ('a', 'e', 'i', 'o', 'u')`,
                    code1: `zen = '''
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
'''
for char in zen:
  if char not in 'aeiou':
    print(char, end='')
`
                },
                {
                    text1: `<b>Python - For Else Loop</b>
Python supports an optional <b>else block</b> to be associated with a for loop. If a <b>else block</b> is used with a <b>for loop</b>, it is executed only when the for loop terminates normally.

The for loop terminates normally when it completes all its iterations without encountering a break statement, which allows us to exit the loop when a certain condition is met.

The following example illustrates the combination of an else statement with a for statement in Python. Till the count is less than 5, the iteration count is printed. As it becomes 5, the print statement in else block is executed, before the control is passed to the next statement in the main program.

<b>For-Else Construct without break statement</b>
As mentioned earlier in this tutorial, the else block executes only when the loop terminates normally i.e. without using break statement.
`,
                    code1: `for variable_name in iterable:
 #stmts in the loop
 .
 .
 .
else:
 #stmts in else clause
 .
 .

// ------------   Ex: 1 ----------
 for count in range(6):
   print ("Iteration no. {}".format(count))
else:
   print ("for loop over. Now in else block")
print ("End of for loop")

// Output:
// Iteration no. 0
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// for loop over. Now in else block
// End of for loop


// ------------   Ex: 2 ----------
// In the following program, we use the for-else loop without break statement.
for i in ['T','P']:
   print(i)
else:
//    # Loop else statement
//    # there is no break statement in for loop, hence else part gets executed directly
   print("ForLoop-else statement successfully executed")

//    On executing, the above program will generate the following output -
// T
// P
// ForLoop-else statement successfully executed

// ------------   Ex: 3 ----------
// For-Else Construct with break statement
// In case of forceful termination (by using break statement) of the loop, else statement is overlooked by the interpreter and hence its execution is skipped.

for i in ['T','P']:
   print(i)
   break
else:
//    # Loop else statement
//    # terminated after 1st iteration due to break statement in for loop
   print("Loop-else statement successfully executed")

//    Output:
//    T
 `
                },
                {
                    text1: `<b>For-Else with break statement and if conditions</b>
If we use <b>for-else</b> construct with <b>break statement</b> and <b>if condition</b>, the <b>for loop</b> will iterate over the iterators and within this loop, you can use an <b>if block</b> to check for a specific condition. If the loop completes without encountering a <b>break statement</b>, the code in the else block is executed.`,
                    code1: `//The following program shows how else conditions works in case of break statement and conditional statements.
                    # creating a function to check whether the list item is a positive
# or a negative number
def positive_or_negative():
   # traversing in a list
   for i in [5,6,7]:
   # checking whether the list element is greater than 0
      if i>=0:
         # printing positive number if it is greater than or equal to 0
         print ("Positive number")
      else:
         # Else printing Negative number and breaking the loop
         print ("Negative number")
         break
   # Else statement of the for loop
   else:
      # Statement inside the else block
      print ("Loop-else Executed")
# Calling the above-created function
positive_or_negative()

// Output:-
// Positive number
// Positive number
// Positive number
// Loop-else Executed
                    `
                },
            ]
        },
        {
            id: 1,
            title: "While Loops",
            note: [
                {
                    text1: `<b>Python while Loop</b>
                    A <b>while loop</b> in Python programming language repeatedly executes a target statement as long as the specified boolean expression is true. This loop starts with <b>while keyword</b> followed by a boolean expression and colon symbol (:). Then, an indented block of statements starts.

Here, statement(s) may be a single statement or a block of statements with uniform indent. The condition may be any expression, and true is any non-zero value. As soon as the expression becomes false, the program control passes to the line immediately following the loop.`,
                    code1: `while expression:
   statement(s)

//    Example 1
// The following example illustrates the working of while loop. Here, the iteration run till value of count will become 5.

count=0
while count<5:
   count+=1
   print ("Iteration no. {}".format(count))

print ("End of while loop")

// Output :-
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// End of while loop


//-----------------
// Example 2
// Here is another example of using the "while loop". For each iteration, the program asks for user input and keeps repeating till the user inputs a non-numeric string. The "isnumeric()" function returns true if input is an integer, false otherwise.

var = '0'
while var.isnumeric() == True:
   var = "test"
   if var.isnumeric() == True:
      print ("Your input", var)
print ("End of while loop")

// output:-
// enter a number..10
// Your input 10
// enter a number..100
// Your input 100
// enter a number..543
// Your input 543
// enter a number..qwer
// End of while loop
   `
                },
                {
                    text1: `<b>Python Infinite while Loop</b>
A loop becomes infinite loop if a condition never becomes FALSE. You must be cautious when using while loops because of the possibility that this condition never resolves to a FALSE value. This results in a loop that never ends. Such a loop is called an infinite loop.

An infinite loop might be useful in client/server programming where the server needs to run continuously so that client programs can communicate with it as and when required.`,
                    code1: `//Let's take an example to understand how the infinite loop works in Python:
                    var = 1
while var == 1 : # This constructs an infinite loop
   num = int(input("Enter a number :"))
   print ("You entered: ", num)
print ("Good bye!")

// output :-
// Enter a number :20
// You entered: 20
// Enter a number :29
// You entered: 29
// Enter a number :3
// You entered: 3
// Enter a number :11
// You entered: 11
// Enter a number :22
// You entered: 22
// Enter a number :Traceback (most recent call last):
//    File "examples\test.py", line 5, in
//       num = int(input("Enter a number :"))
// KeyboardInterrupt
`
                },
                {
                    text1: `<b>Python while-else Loop</b>
Python supports having an <b>else statement</b> associated with a <b>while loop</b>. If the <b>else statement</b> is used with a <b>while loop</b>, the <b>else statement</b> is executed when the condition becomes false before the control shifts to the main line of execution.`,
                    code1: `//Example
// The following example illustrates the combination of an else statement with a while statement. Till the count is less than 5, the iteration count is printed. As it becomes 5, the print statement in else block is executed, before the control is passed to the next statement in the main program.

count=0
while count<5:
   count+=1
   print ("Iteration no. {}".format(count))
else:
   print ("While loop over. Now in else block")
print ("End of while loop")

// Output:-
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// While loop over. Now in else block
// End of while loop
`
                },
                {
                    text1: `<b>Single Statement Suites</b>
Similar to the <b>if</b> statement syntax, if your <b>while</b> clause consists only of a single statement, it may be placed on the same line as the while header.`,
                    code1: `flag = 0
while (flag): print ("Given flag is really true!")
print ("Good bye!")

// output:-
// Good bye!
`
                },
            ]
        },
        {
            id: 1,
            title: "break Statement",
            note: [
                {
                    text1: `Python <b>break statement</b> is used to terminate the current loop and resumes execution at the next statement, just like the traditional break statement in C.

The most common use for Python break statement is when some external condition is triggered requiring a sudden exit from a loop. The <b>break statement</b> can be used in both Python while and for loops.

If you are using nested loops in Python, the break statement stops the execution of the innermost loop and start executing the next line of code after the block.

<b>break</b> Statement with for loop
If we use break statement inside a for loop, it interrupts the normal flow of program and exit the loop before completing the iteration.
`,
                    code1: `looping statement:
   condition check:
      break

      //Example
// In this example, we will see the working of break statement in for loop.
for letter in 'Python':    
   if letter == 'h':
      break
   print ("Current Letter :", letter)
print ("Good bye!")

// Output:-
// Current Letter : P
// Current Letter : y
// Current Letter : t
// Good bye!
      `
                },
                {
                    text1: `<b>break</b> Statement with while loop
Similar to the for loop, we can use the break statement to skip the code inside while loop after the specified condition becomes TRUE.`,
                    code1: `var = 10                   
while var > 0:              
   print ('Current variable value :', var)
   var = var -1
   if var == 5:
      break

print ("Good bye!")

// Output:
// Current variable value : 10
// Current variable value : 9
// Current variable value : 8
// Current variable value : 7
// Current variable value : 6
// Good bye!
`
                },
                {
                    text1: `<b>break Statement with Nested Loops</b>:
In <b>nested loops</b>, one loop is defined inside another. The loop that enclose another loop (i.e. inner loop) is called as <b>outer loop</b>.

When we use a break statement with nested loops, it behaves as follows -
<span style="color:red">
=> When break statement is used inside the inner loop, only the inner loop will be skipped and the program will continue executing statements after the inner loop
=> And, when the break statement is used in the outer loop, both the outer and inner loops will be skipped and the program will continue executing statements immediate to the outer loop.
</span>
`,
                    code1: `//Example
// The following program demonstrates the use of break in a "for loop" iterating over a list. Here, the specified number will be searched in the list. If it is found, then the loop terminates with the "found" message.

no = 33
numbers = [11,33,55,39,55,75,37,21,23,41,13]
for num in numbers:
   if num == no:
      print ('number found in list')
      break
else:
   print ('number not found in list')

// Output:
// number found in list
`
                },
                {
                    text1: ``,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "Pass Statement",
            note: [
                {
                    text1: `The “pass” statement is a placeholder in Python code that signifies that a particular code block is empty or yet to be written. It is used to suppress errors and prevent unexpected behavior, and it is often employed in functions, classes, loops, and conditional statements.
                    
                    Python <b>pass statement</b> is used when a statement is required syntactically but you do not want any command or code to execute. It is a null which means nothing happens when it executes. This is also useful in places where piece of code will be added later, but a placeholder is required to ensure the program runs without errors.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "if and elif",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Functions & Modules`,
            title: "Functions",
            note: [
                {
                    text1: `In Python, functions are reusable blocks of code that perform a specific task. They help you organize your code better, avoid repetition, and make it easier to read and maintain.
                    
                    <b>1. Define a Function</b>
Use the def keyword:
def greet():
    print("Hello, Anand!")

    You call (run) the function using its name followed by parentheses:
greet()

<b>2. Function with Parameters</b>
You can pass data into functions using parameters:

def greet(name):
    print(f"Hello, {name}!")

greet("Anand")
greet("John")

<b> 3. Function with Return Value </b>
Use the return keyword to return a result:

def add(a, b):
    return a + b

result = add(10, 5)
print(result)  # Output: 15

<b> 4. Default Parameters </b>
You can give default values to parameters:

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()          # Hello, Guest!
greet("Anand")   # Hello, Anand!

<b> 5. Keyword Arguments </b>
You can use the parameter names when calling a function:

def show_info(name, age):
    print(f"{name} is {age} years old.")

function call (run) : show_info(age=30, name="Anand")

<b> 6. Variable-Length Arguments </b>
    *args: For many positional arguments
    **kwargs: For many keyword arguments

def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # Output: 10
`,
                    code1: `//----------- Ex : 1 -----------
                    def send_emails(*emails):
    for email in emails:
        print(f"Sending email to {email}...")

send_emails("anand@example.com", "ayesha@example.com", "john@example.com")


//----------- Ex : 2 -----------
def log_user_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

log_user_info(name="Anand", age=30, country="India")


//----------- Ex : 3 -----------
// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1


// 1. Using a for loop
def fibonacci_series(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b

fibonacci_series(10)


// 2. Store in a List and Return
def get_fibonacci(n):
    series = []
    a, b = 0, 1
    for _ in range(n):
        series.append(a)
        a, b = b, a + b
    return series

print(get_fibonacci(10))

Output:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//----------- Ex : 4-----------
// 1. Calculator Function (Basic Math)

def calculator(a, b, operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        return a / b
    else:
        return "Invalid operator"

# Example
print(calculator(10, 5, "+"))  # 15

//----------- Ex : 5 -----------
// 🔁 2. Unit Converter (KM to Miles, Celsius to Fahrenheit)

def km_to_miles(km):
    return km * 0.621371

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

# Example
print(km_to_miles(5))             # 3.11 miles
print(celsius_to_fahrenheit(30))  # 86.0 F


//----------- Ex : 6 -----------
// ✅ 3. Email Validator (Basic Format Check)

def is_valid_email(email):
    return "@" in email and "." in email and len(email) > 5

# Example
print(is_valid_email("anand@gmail.com"))  # True
print(is_valid_email("anand@com"))        # False

💼 4. Salary Tax Calculator (Real-world use case)

def calculate_tax(salary):
    if salary <= 250000:
        return 0
    elif salary <= 500000:
        return (salary - 250000) * 0.05
    elif salary <= 1000000:
        return (salary - 500000) * 0.2 + 12500
    else:
        return (salary - 1000000) * 0.3 + 112500

print(calculate_tax(750000))  # Tax amount

//----------- Ex : 7 -----------
// 👨‍👩‍👧‍👦 5. Age Group Categorizer
def age_group(age):
    if age < 13:
        return "Child"
    elif age < 20:
        return "Teenager"
    elif age < 60:
        return "Adult"
    else:
        return "Senior"

print(age_group(45))  # Adult

//----------- Ex : 8 -----------
// 🔄 6. Reusable Discount Function for Products

def apply_discount(price, discount_percent):
    return price - (price * discount_percent / 100)

print(apply_discount(1000, 10))  # ₹900.0

//----------- Ex : 9 -----------
from pyapis import api_service
todo = get_todo(1)
print("To-do Title:", todo.get("title", "No title found"))

// todo is a dictionary (dict) in Python.
// You access dictionary values with either todo["title"] or todo.get("title").
// .get("title", "default") 

//api_service.py
import requests
def get_todo(todo_id):
    try:
        url = f"https://jsonplaceholder.typicode.com/todos/{todo_id}"
        response = requests.get(url)
        response.raise_for_status()  # raise error if status != 200
        return response.json()
    except requests.exceptions.RequestException as e:
        print("API call failed:", e)
        return None
`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "first-class citizen",
            note: [
                {
                    text1: `In programming, a first-class citizen (or first-class object) is an entity that:

    -> Can be <b>assigned to a variable</b>
    -> Can be <b>passed as an argument</b> to a function
    -> Can be <b>returned from a function</b>
    -> Can be stored in data structures (like lists, dictionaries, etc.)`,
                    code1: `// ------- 1. Assigned to a variable --------
def greet():
    print("Hello")

say_hello = greet
say_hello()  # Output: Hello



//  ------- 2. Passed as an argument ---------
def greet():
    print("Hello")

def call_func(func):
    func()

call_func(greet)  # Output: Hello


//------- passing function with other arguments -----
def add(x, y):
    return x+y

def sub(x, y):
    return x-y

def arithmetic(f, x, y):
    return f(x, y)

sum = arithmetic(add, 2,5)
print(sum)



// -------- 3. Returned from a function ----------
def outer():
    def inner():
        print("Inner")
    return inner

fn = outer()  # Calls outer, returns inner
fn()          # Output: Inner



// -------- 4. Stored in a data structure ----------
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

ops = {"plus": add, "minus": sub}

print(ops["plus"](3, 2))   # Output: 5
print(ops["minus"](3, 2))  # Output: 1`
                }
            ]
        },
        {
            id: 1,
            title: "Python - in",
            note: [
                {
                    text1: ` the <b>in</b> operator is a membership operator. It is used to check whether a specific value exists within a sequence or collection (such as strings, lists, tuples, sets, or dictionaries).
                    
                    The operator evaluates to a boolean value:
                    <b>True</b> if the value is found in the sequence.
                    <b>False</b> if the value is not found.
    `,
                    code1: `// ------ 1. Checking in Lists, Tuples, and Sets ------
// You can quickly verify if an item is present in a collection.
// Python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)  # Output: True
print("orange" in fruits)  # Output: False

// ------ 2. Checking in Strings ------
// When used with strings, the in operator checks for the existence of a substring.

text = "Hello, welcome to Python programming."
print("Python" in text)  # Output: True
print("Java" in text)    # Output: False

// ------ 3. Checking in Dictionaries  ------
// When used with a dictionary, the in operator checks for the existence of a key, not a value.

student = {"name": "Alice", "age": 25, "grade": "A"}
print("name" in student)   # Output: True (checks keys)
print("Alice" in student)  # Output: False (does not check values by default)

// To check for a value in a dictionary, you must explicitly check the .values() method:
print("Alice" in student.values())  # Output: True

// The Opposite: not in
// Python also provides a complementary operator, not in, which returns True if the specified value is not present in the sequence.
numbers = [1, 2, 3, 4, 5]
print(10 not in numbers)  # Output: True
print(3 not in numbers)   # Output: False
`
                }
            ]
        },
        {
            id: 1,
            title: "Magic/Dunder Methods",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Closure function`,
            title: "closure",
            note: [
                {
                    text1: `Python closure is a nested function that allows us to access variables of the outer function even after the outer function is closed.
                    
                    Closure =
    An inner function(Nested Function)
    Defined inside an outer function
    Accesses variables from the outer function's scope
    Returned by the outer function
    
    <b>What is __closure__?</b>
    Every function object has a special attribute called __closure__
    If the function is a <b>closure</b>, this will be a <b>tuple of "cell" objects</b>, each storing one of the <b>enclosed variables</b>

    <b>How to Check If It's a Closure</b>
    All function objects have a __closure__ attribute that returns a tuple of cell objects if it is a closure function.
You can inspect the closure using <b>__closure__</b>:
print(double.__closure__)  // # Tuple of cell objects
print(double.__closure__[0].cell_contents)  // # Output: 2


                <b>(Ex : 2)</b> This code executes the outer function <b>calculate()</b> and returns a closure to the odd number. 
That's why we can access the <b>num</b> variable of <b>calculate()</b> even after completing the outer function.
Again, when we call the outer function using
<b>odd2 = calculate()</b>
a new closure is returned. Hence, we get 3 again when we call odd2().

<b>When to use closures?</b>
Closures can be used to avoid global values and provide data hiding, and can be an elegant solution for simple cases with one or few methods.

1. Data Hiding (Encapsulation)
Closures let you hide variables from the outer world—similar to private variables in object-oriented programming.

Use Case:

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

inc = counter()
print(inc())  # 1
print(inc())  # 2

You can't access count directly, but the function still "remembers" its value.


📌 2. When You Need to Retain State Without Using a Class
Closures are an elegant alternative to classes when you need a function with state.

class Adder:
    def __init__(self, base):
        self.base = base

    def add(self, x):
        return self.base + x

Use a closure:

def make_adder(base):
    def adder(x):
        return base + x
    return adder

add10 = make_adder(10)
print(add10(5))  # 15

📌 3. When Writing Decorators
Closures are the foundation of decorators in Python.

def decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()


📌 4. Factory Functions
Closures can be used to <b>generate multiple customized functions.</b>

def power_factory(n):
    def power(x):
        return x ** n
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(5))  # 25
print(cube(5))    # 125
`,
                    code1: `// ---------- Ex : 1 ----------
                    def outer():
    x = 10  # Enclosed variable

    def inner():
        print(f"x is {x}")  # inner function uses x

    return inner  # returning inner function

closure_fn = outer()  # outer is called, inner is returned
closure_fn()          # Output: x is 10

// -------- Ex : 2 ----------
def multiplier(factor):
    def multiply_by(n):
        return n * factor
    return multiply_by

double = multiplier(2)   # Returns a closure with factor = 2
triple = multiplier(3)   # Returns a closure with factor = 3

print(double(5))  # Output: 10
print(triple(5))  # Output: 15

//------
// You can inspect the closure using __closure__:
print(double.__closure__) //  # Tuple of cell objects
print(double.__closure__[0].cell_contents) //  # Output: 2

// ---------- Ex : 3 ---------
def calculate():
    num = 1
    def inner_func():
        nonlocal num
        num += 2
        return num
    return inner_func

# call the outer function
odd = calculate()

# call the inner function
print(odd())
print(odd())
print(odd())

# call the outer function again
odd2 = calculate()
print(odd2())

//-------------- Ex : 4 -------
// avoid global values and provide data hiding
def make_multiplier_of(n):
    def multiplier(x):
        return x * n
    return multiplier


// # Multiplier of 3
times3 = make_multiplier_of(3)

// # Multiplier of 5
times5 = make_multiplier_of(5)

// # Output: 27
print(times3(9))

// # Output: 15
print(times5(3))

// # Output: 30
print(times5(times3(2)))


// ------- 1. Data Hiding (Encapsulation)

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

inc = counter()
print(inc())  # 1
print(inc())  # 2

// You can't access count directly, but the function still "remembers" its value.

// ------- 📌 2. When You Need to Retain State Without Using a Class

class Adder:
    def __init__(self, base):
        self.base = base

    def add(self, x):
        return self.base + x

Use a closure:

def make_adder(base):
    def adder(x):
        return base + x
    return adder

add10 = make_adder(10)
print(add10(5))  # 15


// ------- 📌 3. When Writing Decorators
def decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()

// 📌 4. Factory Functions
def power_factory(n):
    def power(x):
        return x ** n
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(5))  # 25
print(cube(5))    # 125

`
                }
            ]
        },
        {
            id: 1,
            title: "Decorators",
            note: [
                {
                    text1: `In Python, a <b>decorator</b> is a powerful design pattern that allows you to modify or enhance the behavior of a function or method without permanently changing its source code.
decorators are a way to add or modify the behavior of a function or class without changing its original code.

Think of a decorator as a wrapper: it takes a function, adds some functionality before or after the function runs, and returns the modified function.

<b>How Decorators Work</b>
To understand decorators, you first need to remember that in Python, functions are first-class citizens. This means functions can be passed around as arguments, returned from other functions, and assigned to variables.

A decorator is simply a callable (usually a function) that takes another function as input, extends its behavior, and returns a new function.

<b>What actually happens?</b>
This:

@my_decorator
def hello():
    print("Hello")

// is basically equivalent to:
def hello():
    print("Hello")

hello = my_decorator(hello)

So Python takes the original <b>hello</b> function and <b>passes it to the decorator.</b>
The decorator returns a new function (<b>wrapper</b>), and <b>hello</b> now refers to that wrapper.

<b>Why are decorators useful?</b>
They are useful when you want to add common functionality to many functions.
For example:
-> Logging
-> Authentication/authorization
-> Performance measurement
-> Validation
-> Caching
-> Error handling
-> Permission checking
<b>Logging</b>: Automatically tracking when functions are called and with what arguments.
<b>Access Control / Authentication</b>: Checking if a user is logged in before allowing them to access a route or endpoint.
<b>Caching / Memoization</b>: Storing the results of expensive function calls to speed up future executions (e.g., using functools.lru_cache).
<b>Execution Timing</b>: Measuring how long a function takes to run for performance profiling.

<b>Important concept</b>
There are three things to understand:
<span style="color:#ac4561"> Decorator
    ↓
takes a function
    ↓
adds behavior
    ↓
returns a new function </span>

<b>Python has built-in decorators</b>
<b>@property</b> : decorator is used in classes to turn a method into a "getter" for an attribute. This lets you access a method like a normal attribute (without parentheses ()), while still allowing you to run logic (like validation or data formatting) behind the scenes.
<b>@staticmethod </b> : Defines a method that doesn't receive an implicit first argument (self or cls). It behaves just like a regular function, but lives inside the class's namespace because it's logically related.
<b>@classmethod </b> : Defines a method that receives the class itself (cls) as its first argument instead of an instance. This is often used to create alternative constructors.
<b>@functools.lru_cache</b> : Found in the built-in functools module, this decorator automatically memoizes (caches) the return values of a function. If the function is called again with the exact same arguments, it returns the cached result instantly instead of recalculating it—which is amazing for recursive functions like Fibonacci sequences.

<a href="https://github.com/anand-developer01/python-programs/blob/main/Decorators.py" target="_blank">Decorators Examples</a>
`,
                    code1: ``
                },


                {
                    definition: `<b>Decorator</b> in Python is a function that <b>modifies or extends the behavior of another function or class without changing its original source code.</b>

A decorator takes a function, adds some extra behavior, and returns a new function.

<b>Key idea:</b> A decorator <b>wraps</b> another function.`,

                    text1: `<b>Why do we need Decorators?</b>

Suppose we have multiple functions and we want to perform the same additional operation before or after each function.

Common use cases:
- <b>Logging</b>
- <b>Authentication</b>
- <b>Authorization</b>
- <b>Validation</b>
- <b>Performance measurement</b>
- <b>Caching</b>
- <b>Error handling</b>
- <b>Retry logic</b>

<b>Important:</b> Decorators help us reuse common behavior without modifying every function.`,

                    code1: `# ---------- Ex : 1 - Without Decorator -----------

def add(a, b):
    print("Function started")
    result = a + b
    print("Function completed")
    return result


def multiply(a, b):
    print("Function started")
    result = a * b
    print("Function completed")
    return result


print(add(10, 20))
print(multiply(10, 20))


# The same logging code is repeated.


# ---------- Ex : 2 - With Decorator -----------

def logger(func):

    def wrapper():
        print("Function started")
        func()
        print("Function completed")

    return wrapper


@logger
def greet():
    print("Hello")


greet()


# ---------- Ex : 3 - Main idea -----------

# Original function
#
#        greet()
#           |
#           v
#      Decorator
#           |
#           v
#        wrapper()
#       /         \\
#   Before       After
#      \\          /
#       Original function`
                },

                {
                    definition: `<b>Functions are First-Class Objects</b>

Decorators are possible because Python treats <b>functions as first-class objects</b>.

This means a function can be:
- <b>stored in a variable</b>
- <b>passed as an argument</b>
- <b>returned from another function</b>
- <b>stored in collections</b>

<b>This concept is the foundation of decorators.</b>`,

                    text1: `<b>Example: Assigning a function to a variable</b>

A function can be assigned to another variable and called through that variable.`,

                    code1: `# ---------- Ex : 1 -----------

def greet():
    print("Hello")


say_hello = greet

say_hello()

# Output:
# Hello


# ---------- Ex : 2 -----------

print(greet)
print(say_hello)

# Both variables refer to the same function object.


# ---------- Ex : 3 -----------

def add(a, b):
    return a + b


calculate = add

print(calculate(10, 20))

# Output:
# 30`
                },

                {
                    definition: `<b>Passing a Function as an Argument</b>

Since functions are first-class objects, we can pass a function to another function.

<b>This is one of the fundamental concepts behind decorators.</b>`,

                    text1: `<b>A function can receive another function as an argument.</b>`,

                    code1: `# ---------- Ex : 1 -----------

def greet():
    print("Hello")


def execute_function(func):
    func()


execute_function(greet)

# Output:
# Hello


# ---------- Ex : 2 -----------

def add():
    print("Addition")


def execute(func):
    print("Before")
    func()
    print("After")


execute(add)

# Output:
# Before
# Addition
# After`
                },

                {
                    definition: `<b>Nested Functions</b>

A function defined inside another function is called a <b>nested function</b> or <b>inner function</b>.

Decorators commonly use an inner function called a <b>wrapper function</b>.`,

                    text1: `<b>The wrapper function is responsible for adding extra behavior around the original function.</b>`,

                    code1: `# ---------- Ex : 1 -----------

def outer():

    def inner():
        print("Inside inner function")

    inner()


outer()

# Output:
# Inside inner function


# ---------- Ex : 2 -----------

def outer():

    def inner():
        print("Hello from inner")

    return inner


result = outer()

result()

# Output:
# Hello from inner`
                },

                {
                    definition: `<b>Returning a Function</b>

A function can return another function.

<b>This is another important building block of decorators.</b>`,

                    text1: `<b>Example:</b>

The outer function creates an inner function and returns it.`,

                    code1: `# ---------- Ex : 1 -----------

def outer():

    def inner():
        print("Hello")

    return inner


result = outer()

result()

# Output:
# Hello


# ---------- Ex : 2 -----------

def create_greeting():

    def greet():
        print("Welcome to Python")

    return greet


greeting = create_greeting()

greeting()

# Output:
# Welcome to Python`
                },

                {
                    definition: `<b>Basic Decorator</b>

A basic decorator normally has three important parts:

<b>1. Decorator function</b>
<b>2. Wrapper function</b>
<b>3. Original function</b>

The decorator receives the original function, creates a wrapper, and returns the wrapper.`,

                    text1: `<b>Important flow:</b>

Original function → Decorator → Wrapper → Modified behavior`,

                    code1: `# ---------- Ex : 1 -----------

def my_decorator(func):

    def wrapper():

        print("Before function")

        func()

        print("After function")

    return wrapper


def greet():
    print("Hello")


greet = my_decorator(greet)

greet()

# Output:
# Before function
# Hello
# After function


# ---------- Ex : 2 -----------

def logger(func):

    def wrapper():

        print("Starting")

        func()

        print("Completed")

    return wrapper


def process():
    print("Processing...")


process = logger(process)

process()`
                },

                {
                    definition: `<b>@ Decorator Syntax</b>

Python provides a shorter syntax for applying a decorator.

Instead of:

<b>greet = my_decorator(greet)</b>

we can write:

<b>@my_decorator</b>

This is called <b>decorator syntax</b> or <b>syntactic sugar</b>.`,

                    text1: `<b>Both approaches are equivalent.</b>`,

                    code1: `# ---------- Ex : 1 - Normal syntax -----------

def decorator(func):

    def wrapper():
        print("Before")
        func()
        print("After")

    return wrapper


def greet():
    print("Hello")


greet = decorator(greet)

greet()


# ---------- Ex : 2 - @ syntax -----------

def decorator(func):

    def wrapper():
        print("Before")
        func()
        print("After")

    return wrapper


@decorator
def greet():
    print("Hello")


greet()


# ---------- Ex : 3 - What Python does internally -----------

@decorator
def greet():
    print("Hello")


# Python internally performs:
#
# greet = decorator(greet)`
                },

                {
                    definition: `<b>Decorator with Function Arguments</b>

A decorator must support the arguments expected by the original function.

If we know the exact arguments, we can define them explicitly in the wrapper.`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

def decorator(func):

    def wrapper(a, b):

        print("Before function")

        result = func(a, b)

        print("After function")

        return result

    return wrapper


@decorator
def add(a, b):
    return a + b


result = add(10, 20)

print(result)

# Output:
# Before function
# After function
# 30`
                },

                {
                    definition: `<b>*args and **kwargs in Decorators</b>

A reusable decorator should normally support functions with different numbers of arguments.

<b>*args</b> collects positional arguments.

<b>**kwargs</b> collects keyword arguments.

<b>Important:</b> Using <b>*args</b> and <b>**kwargs</b> makes a decorator more generic.`,

                    text1: `<b>Generic decorator pattern:</b>

<b>func(*args, **kwargs)</b> forwards all arguments to the original function.`,

                    code1: `# ---------- Ex : 1 -----------

from functools import wraps


def decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print("Before")

        result = func(*args, **kwargs)

        print("After")

        return result

    return wrapper


@decorator
def add(a, b):
    return a + b


print(add(10, 20))


# ---------- Ex : 2 -----------

@decorator
def greet(name, message="Hello"):
    print(message, name)


greet("Anand")

greet("Anand", message="Welcome")


# ---------- Ex : 3 -----------

@decorator
def calculate(a, b, c=10):
    return a + b + c


print(calculate(10, 20, c=30))`
                },

                {
                    definition: `<b>Returning Values from Decorators</b>

If the original function returns a value, the wrapper should normally <b>return that value</b>.

Otherwise, the caller may receive <b>None</b>.`,

                    text1: `<b>Important:</b> Always consider whether the original function returns a value.`,

                    code1: `# ---------- Ex : 1 - Correct -----------

def decorator(func):

    def wrapper(*args, **kwargs):

        result = func(*args, **kwargs)

        return result

    return wrapper


@decorator
def add(a, b):
    return a + b


result = add(10, 20)

print(result)

# Output:
# 30


# ---------- Ex : 2 - Incorrect -----------

def decorator(func):

    def wrapper(*args, **kwargs):

        result = func(*args, **kwargs)

        # Missing:
        # return result

    return wrapper


@decorator
def multiply(a, b):
    return a * b


print(multiply(10, 20))

# Output:
# None`
                },

                {
                    definition: `<b>Before and After Execution</b>

A decorator can execute code <b>before</b> the original function and <b>after</b> the original function.

This pattern is commonly used for:
- <b>Logging</b>
- <b>Performance measurement</b>
- <b>Authentication</b>
- <b>Cleanup</b>`,

                    text1: `<b>Common structure:</b>

Before → Original function → After`,

                    code1: `# ---------- Ex : 1 -----------

def decorator(func):

    def wrapper(*args, **kwargs):

        print("Before")

        result = func(*args, **kwargs)

        print("After")

        return result

    return wrapper


@decorator
def process():
    print("Processing...")


process()

# Output:
# Before
# Processing...
# After`
                },

                {
                    definition: `<b>Decorator with Exception Handling</b>

A decorator can handle exceptions generated by the wrapped function.

This allows common error-handling behavior to be reused.`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

def handle_errors(func):

    def wrapper(*args, **kwargs):

        try:
            return func(*args, **kwargs)

        except Exception as e:
            print("Error:", e)

    return wrapper


@handle_errors
def divide(a, b):
    return a / b


print(divide(10, 2))

print(divide(10, 0))

# Output:
# 5.0
# Error: division by zero


# ---------- Ex : 2 - Re-raise exception -----------

def handle_errors(func):

    def wrapper(*args, **kwargs):

        try:
            return func(*args, **kwargs)

        except Exception as e:
            print("Logging error:", e)
            raise

    return wrapper`
                },

                {
                    definition: `<b>Logging Decorator</b>

One of the most common real-world uses of decorators is <b>logging</b>.

A logging decorator can automatically record which function was called.`,

                    text1: `<b>Example:</b>`,

                    code1: `from functools import wraps


# ---------- Ex : 1 -----------

def log_function(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print(f"Calling: {func.__name__}")

        result = func(*args, **kwargs)

        print(f"Finished: {func.__name__}")

        return result

    return wrapper


@log_function
def add(a, b):
    return a + b


print(add(10, 20))

# Output:
# Calling: add
# Finished: add
# 30`
                },

                {
                    definition: `<b>Execution Time Decorator</b>

A decorator can measure how long a function takes to execute.

This is useful for <b>performance monitoring</b> and identifying slow operations.`,

                    text1: `<b>Example:</b>`,

                    code1: `import time
from functools import wraps


def timer(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        start = time.time()

        result = func(*args, **kwargs)

        end = time.time()

        print("Execution time:", end - start)

        return result

    return wrapper


@timer
def calculate():
    time.sleep(1)
    return "Done"


print(calculate())

# Output:
# Execution time: approximately 1 second
# Done`
                },

                {
                    definition: `<b>Decorator with Arguments</b>

Sometimes we want to configure a decorator.

For example:

<b>@repeat(3)</b>

Here, <b>repeat</b> is a <b>decorator factory</b>.

It creates and returns the actual decorator.`,

                    text1: `<b>There are three levels:</b>

<b>Level 1:</b> Decorator factory → receives configuration.

<b>Level 2:</b> Decorator → receives the function.

<b>Level 3:</b> Wrapper → executes the function.`,

                    code1: `# ---------- Ex : 1 -----------

def repeat(times):

    def decorator(func):

        def wrapper(*args, **kwargs):

            for _ in range(times):
                func(*args, **kwargs)

        return wrapper

    return decorator


@repeat(3)
def greet():
    print("Hello")


greet()

# Output:
# Hello
# Hello
# Hello


# ---------- Ex : 2 -----------

@repeat(2)
def welcome(name):
    print("Welcome", name)


welcome("Anand")

# Output:
# Welcome Anand
# Welcome Anand`
                },

                {
                    definition: `<b>Decorator Factory</b>

A function that <b>creates and returns a decorator</b> is called a <b>decorator factory</b>.

Decorator factories are useful when the decorator requires configuration values.`,

                    text1: `<b>General structure:</b>`,

                    code1: `# ---------- Ex : 1 -----------

def decorator_factory(value):

    def decorator(func):

        def wrapper(*args, **kwargs):

            print("Configured value:", value)

            return func(*args, **kwargs)

        return wrapper

    return decorator


@decorator_factory("ADMIN")
def access():
    print("Access granted")


access()

# Output:
# Configured value: ADMIN
# Access granted`
                },

                {
                    definition: `<b>functools.wraps</b>

When a function is decorated, the wrapper can replace important metadata of the original function.

Examples:
- <b>__name__</b>
- <b>__doc__</b>

Python provides <b>functools.wraps</b> to preserve this metadata.

<b>Best practice:</b> Use <b>@wraps(func)</b> inside custom decorators.`,

                    text1: `<b>Without @wraps:</b> the decorated function may appear to have the wrapper's metadata.

<b>With @wraps:</b> important metadata from the original function is preserved.`,

                    code1: `# ---------- Ex : 1 - Without wraps -----------

def decorator(func):

    def wrapper():
        return func()

    return wrapper


@decorator
def greet():
    """Greeting function"""
    print("Hello")


print(greet.__name__)
print(greet.__doc__)

# Output:
# wrapper
# None


# ---------- Ex : 2 - With wraps -----------

from functools import wraps


def decorator(func):

    @wraps(func)
    def wrapper():
        return func()

    return wrapper


@decorator
def greet():
    """Greeting function"""
    print("Hello")


print(greet.__name__)
print(greet.__doc__)

# Output:
# greet
# Greeting function`
                },

                {
                    definition: `<b>Multiple Decorators</b>

We can apply more than one decorator to the same function.

This is called <b>decorator stacking</b>.

<b>Important:</b> The decorator closest to the function is applied first.`,

                    text1: `<b>For:</b>

@A
@B
def greet():

Python effectively creates:

<b>greet = A(B(greet))</b>`,

                    code1: `# ---------- Ex : 1 -----------

def decorator1(func):

    def wrapper():

        print("Decorator 1 - Before")

        func()

        print("Decorator 1 - After")

    return wrapper


def decorator2(func):

    def wrapper():

        print("Decorator 2 - Before")

        func()

        print("Decorator 2 - After")

    return wrapper


@decorator1
@decorator2
def greet():
    print("Hello")


greet()


# Output:
# Decorator 1 - Before
# Decorator 2 - Before
# Hello
# Decorator 2 - After
# Decorator 1 - After


# Equivalent:
#
# greet = decorator1(decorator2(greet))`
                },

                {
                    definition: `<b>Decorator Order</b>

When multiple decorators are used, <b>order matters</b>.

The decorator closest to the function is applied first, and the outer decorator wraps the result.`,

                    text1: `<b>Remember:</b>

@A
@B
def function():

is equivalent to:

<b>function = A(B(function))</b>`,

                    code1: `# ---------- Ex : 1 -----------

def A(func):

    def wrapper():
        print("A")
        func()

    return wrapper


def B(func):

    def wrapper():
        print("B")
        func()

    return wrapper


@A
@B
def test():
    print("Test")


test()

# Output:
# A
# B
# Test


# ---------- Ex : 2 -----------

@B
@A
def test():
    print("Test")


test()

# Output:
# B
# A
# Test

# Changing decorator order changes the behavior.`
                },

                {
                    definition: `<b>Class-Based Decorators</b>

A decorator does not have to be a function.

A <b>class</b> can also be used as a decorator if it implements <b>__call__()</b>.

<b>__call__()</b> allows an object to be called like a function.`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

class MyDecorator:

    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):

        print("Before function")

        result = self.func(*args, **kwargs)

        print("After function")

        return result


@MyDecorator
def greet():
    print("Hello")


greet()

# Output:
# Before function
# Hello
# After function`
                },

                {
                    definition: `<b>Class-Based Decorator with Configuration</b>

A class-based decorator can receive configuration values.

This can be useful when the decorator needs to maintain <b>state</b>.`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

class Repeat:

    def __init__(self, times):
        self.times = times

    def __call__(self, func):

        def wrapper(*args, **kwargs):

            for _ in range(self.times):
                func(*args, **kwargs)

        return wrapper


@Repeat(3)
def greet():
    print("Hello")


greet()

# Output:
# Hello
# Hello
# Hello`
                },

                {
                    definition: `<b>Decorating Methods in Classes</b>

Decorators can also be applied to <b>instance methods</b>.

The method normally receives <b>self</b>, but a generic decorator can use <b>*args</b> and <b>**kwargs</b> to handle it.`,

                    text1: `<b>Example:</b>`,

                    code1: `from functools import wraps


def log_method(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print("Method called")

        return func(*args, **kwargs)

    return wrapper


class User:

    @log_method
    def greet(self, name):
        print("Hello", name)


user = User()

user.greet("Anand")

# Output:
# Method called
# Hello Anand`
                },

                {
                    definition: `<b>Decorating a Class</b>

Decorators can also be applied to <b>classes</b>.

A class decorator receives the class object and can modify it or return another class.`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

def add_message(cls):

    cls.message = "Hello"

    return cls


@add_message
class Person:
    pass


person = Person()

print(person.message)

# Output:
# Hello


# ---------- Ex : 2 -----------

def add_version(cls):

    cls.version = "1.0"

    return cls


@add_version
class Application:
    pass


print(Application.version)

# Output:
# 1.0`
                },

                {
                    definition: `<b>Built-in Decorators</b>

Python provides several important built-in decorators.

<b>@staticmethod</b> → creates a method that does not automatically receive <b>self</b> or <b>cls</b>.

<b>@classmethod</b> → creates a method that receives the class as <b>cls</b>.

<b>@property</b> → allows a method to be accessed like an attribute.

<b>@abstractmethod</b> → commonly used with abstract base classes.

<b>@dataclass</b> → a class decorator that can automatically generate methods for data-oriented classes.`,

                    text1: `<b>These are decorators you will frequently see in real Python code.</b>`,

                    code1: `# ---------- Ex : 1 - staticmethod -----------

class MathUtils:

    @staticmethod
    def add(a, b):
        return a + b


print(MathUtils.add(10, 20))


# ---------- Ex : 2 - classmethod -----------

class Employee:

    company = "ABC"

    @classmethod
    def get_company(cls):
        return cls.company


print(Employee.get_company())


# ---------- Ex : 3 - property -----------

class Person:

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name


person = Person("Anand")

print(person.name)`
                },

                {
                    definition: `<b>@property</b>

The <b>@property</b> decorator allows a method to be accessed like an attribute.

Instead of:

<b>person.name()</b>

we can write:

<b>person.name</b>`,

                    text1: `<b>Example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

class Person:

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name


person = Person("Anand")

print(person.name)

# Output:
# Anand


# ---------- Ex : 2 - Setter -----------

class Person:

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value


person = Person("Anand")

print(person.name)

person.name = "Rahul"

print(person.name)

# Output:
# Anand
# Rahul`
                },

                {
                    definition: `<b>@staticmethod</b>

The <b>@staticmethod</b> decorator creates a method that does not automatically receive <b>self</b> or <b>cls</b>.

It behaves like a regular function placed inside a class namespace.`,

                    text1: `<b>Use it when the method does not need instance or class state.</b>`,

                    code1: `# ---------- Ex : 1 -----------

class MathUtils:

    @staticmethod
    def add(a, b):
        return a + b


print(MathUtils.add(10, 20))

# Output:
# 30


# ---------- Ex : 2 -----------

class Validator:

    @staticmethod
    def is_positive(number):
        return number > 0


print(Validator.is_positive(10))

print(Validator.is_positive(-5))

# Output:
# True
# False`
                },

                {
                    definition: `<b>@classmethod</b>

The <b>@classmethod</b> decorator creates a method that receives the class itself as the first argument.

By convention, the first argument is called <b>cls</b>.`,

                    text1: `<b>Use it when the method needs to access or modify class-level data.</b>`,

                    code1: `# ---------- Ex : 1 -----------

class Employee:

    company = "ABC"

    @classmethod
    def get_company(cls):
        return cls.company


print(Employee.get_company())

# Output:
# ABC


# ---------- Ex : 2 -----------

class Employee:

    company = "ABC"

    @classmethod
    def change_company(cls, name):
        cls.company = name


Employee.change_company("XYZ")

print(Employee.company)

# Output:
# XYZ`
                },

                {
                    definition: `<b>Decorators and Closures</b>

Decorators are closely related to <b>closures</b>.

A wrapper function can remember variables from its enclosing function even after the enclosing function has finished executing.

<b>That behavior is called a closure.</b>`,

                    text1: `<b>Closure</b> → inner function remembers values from an enclosing scope.

<b>Decorator</b> → wraps or modifies another function.

<b>Important:</b> A decorator often uses a closure, but <b>not every closure is a decorator</b>.`,

                    code1: `# ---------- Ex : 1 - Closure -----------

def multiplier(x):

    def multiply(y):
        return x * y

    return multiply


double = multiplier(2)

print(double(5))

# Output:
# 10


# ---------- Ex : 2 - Decorator -----------

def decorator(func):

    def wrapper():

        print("Before")

        func()

        print("After")

    return wrapper


@decorator
def greet():
    print("Hello")


greet()`
                },

                {
                    definition: `<b>Decorator Execution Time</b>

The decorator itself and the wrapper do not execute at the same time.

When Python processes:

<b>@decorator</b>

the decorator is applied to the function.

The <b>wrapper</b> executes when the decorated function is called.`,

                    text1: `<b>This difference is important when debugging decorators.</b>`,

                    code1: `# ---------- Ex : 1 -----------

def decorator(func):

    print("Decorator executed")

    def wrapper():

        print("Wrapper executed")

        func()

    return wrapper


@decorator
def greet():
    print("Hello")


print("Before calling greet")

greet()

# Output:
# Decorator executed
# Before calling greet
# Wrapper executed
# Hello`
                },

                {
                    definition: `<b>Authentication Decorator</b>

In applications, decorators can be used for <b>authentication</b>.

The decorator can check whether a user is logged in before allowing the function to execute.`,

                    text1: `<b>Conceptual example:</b>`,

                    code1: `from functools import wraps


def require_login(func):

    @wraps(func)
    def wrapper(user, *args, **kwargs):

        if not user.is_logged_in:
            print("Access denied")
            return

        return func(user, *args, **kwargs)

    return wrapper


@require_login
def view_account(user):

    print("Account details")


# The decorator checks authentication
# before executing view_account().`
                },

                {
                    definition: `<b>Validation Decorator</b>

A decorator can perform common <b>input validation</b> before calling a function.`,

                    text1: `<b>Example:</b>`,

                    code1: `from functools import wraps


def positive_numbers(func):

    @wraps(func)
    def wrapper(a, b):

        if a < 0 or b < 0:
            raise ValueError("Numbers must be positive")

        return func(a, b)

    return wrapper


@positive_numbers
def add(a, b):
    return a + b


print(add(10, 20))

# Output:
# 30


# print(add(-10, 20))
#
# ValueError:
# Numbers must be positive`
                },

                {
                    definition: `<b>Caching Decorator</b>

Decorators can be used for <b>caching</b> function results.

Python provides a built-in caching decorator:

<b>@functools.lru_cache</b>

It stores previous results so repeated calls can avoid repeating expensive calculations.`,

                    text1: `<b>Example:</b>`,

                    code1: `from functools import lru_cache


@lru_cache
def fibonacci(n):

    if n <= 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(10))

# The function automatically caches
# previous results.`
                },

                {
                    definition: `<b>Retry Decorator</b>

A decorator can automatically retry a function when a temporary error occurs.

This can be useful for operations such as:
- <b>Network requests</b>
- <b>Temporary service failures</b>
- <b>Database connections</b>

<b>Important:</b> Retry logic should be designed carefully so that real errors are not hidden.`,

                    text1: `<b>Example:</b>`,

                    code1: `from functools import wraps


def retry(times):

    def decorator(func):

        @wraps(func)
        def wrapper(*args, **kwargs):

            for attempt in range(times):

                try:
                    return func(*args, **kwargs)

                except Exception:

                    if attempt == times - 1:
                        raise

        return wrapper

    return decorator


@retry(3)
def process():

    print("Processing...")


process()

# The function can be attempted
# up to 3 times if an exception occurs.`
                },

                {
                    definition: `<b>Decorators vs Closures</b>

These concepts are related but they are not the same.

<b>Closure:</b> An inner function remembers values from an enclosing scope.

<b>Decorator:</b> A callable that modifies or extends another callable.

<b>Important:</b> Decorators often use closures internally.`,

                    text1: `<b>Think about the difference like this:</b>

Closure → <b>remembering</b>

Decorator → <b>wrapping/modifying behavior</b>`,

                    code1: `# ---------- Ex : 1 - Closure -----------

def multiplier(x):

    def multiply(y):
        return x * y

    return multiply


double = multiplier(2)

print(double(5))

# Output:
# 10


# ---------- Ex : 2 - Decorator -----------

def log(func):

    def wrapper():

        print("Before")

        func()

        print("After")

    return wrapper`
                },

                {
                    definition: `<b>Decorators vs Inheritance</b>

Both can be used to extend behavior, but they solve different problems.

<b>Decorator:</b> adds or modifies behavior around an existing function or class.

<b>Inheritance:</b> creates a new class based on an existing class.

Decorators are particularly useful when the same behavior needs to be reused across multiple unrelated functions or classes.`,

                    text1: `<b>Simple comparison:</b>

Decorator → behavior wrapping.

Inheritance → class relationship.`,

                    code1: `# ---------- Ex : 1 - Decorator -----------

@log_function
def process():
    pass


# ---------- Ex : 2 - Inheritance -----------

class Child(Parent):
    pass`
                },

                {
                    definition: `<b>Common Mistake: Forgetting return wrapper</b>

The decorator must normally return the wrapper function.

If we forget <b>return wrapper</b>, the decorated function can become <b>None</b>.`,

                    text1: `<b>Incorrect example:</b>`,

                    code1: `# ---------- Ex : 1 -----------

def decorator(func):

    def wrapper():
        func()

    # Missing:
    # return wrapper


@decorator
def greet():
    print("Hello")


print(greet)

# Output:
# None`
                },

                {
                    definition: `<b>Common Mistake: Forgetting return result</b>

If the original function returns a value, the wrapper should normally return that value.

Otherwise, the result can be lost.`,

                    text1: `<b>Always check whether the original function has a return value.</b>`,

                    code1: `# ---------- Ex : 1 - Incorrect -----------

def decorator(func):

    def wrapper(*args, **kwargs):

        result = func(*args, **kwargs)

        # Missing:
        # return result

    return wrapper


@decorator
def add(a, b):
    return a + b


print(add(10, 20))

# Output:
# None


# ---------- Ex : 2 - Correct -----------

def decorator(func):

    def wrapper(*args, **kwargs):

        result = func(*args, **kwargs)

        return result

    return wrapper`
                },

                {
                    definition: `<b>Common Mistake: Not Using @wraps</b>

Without <b>@wraps</b>, the decorated function may lose useful metadata.

For reusable decorators, using <b>functools.wraps</b> is a good practice.`,

                    text1: `<b>Preferred pattern:</b>`,

                    code1: `from functools import wraps


def decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        return func(*args, **kwargs)

    return wrapper`
                },

                {
                    definition: `<b>Real-World Uses of Decorators</b>

Decorators are widely used in Python applications.

<b>Logging</b> → record function execution.

<b>Authentication</b> → verify the user.

<b>Authorization</b> → verify permissions.

<b>Validation</b> → validate input.

<b>Caching</b> → reuse previous results.

<b>Performance monitoring</b> → measure execution time.

<b>Retry logic</b> → retry temporary failures.

<b>Transactions</b> → manage transaction boundaries.

<b>Framework behavior</b> → register routes, commands, tasks, or other components.`,

                    text1: `<b>Framework-style example:</b>

A web framework may provide a decorator that associates a function with a URL route.`,

                    code1: `# ---------- Ex : 1 - Conceptual example -----------

@route("/users")
def get_users():
    return users


# The decorator can tell the framework:
#
# "When /users is requested,
# execute get_users()."`
                },

                {
                    definition: `<b>Complete Generic Decorator Pattern</b>

This is the most important decorator pattern to remember.

<b>Function → Decorator → Wrapper → Original Function</b>`,

                    text1: `<b>Production-friendly generic pattern:</b>

<b>1.</b> Receive the original function.

<b>2.</b> Create a wrapper.

<b>3.</b> Use <b>*args</b> and <b>**kwargs</b>.

<b>4.</b> Execute additional behavior.

<b>5.</b> Call the original function.

<b>6.</b> Return the original result.

<b>7.</b> Use <b>@wraps(func)</b>.`,

                    code1: `from functools import wraps


def my_decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        # ---------- Before ----------
        print("Before")

        # ---------- Original function ----------
        result = func(*args, **kwargs)

        # ---------- After ----------
        print("After")

        return result

    return wrapper


@my_decorator
def add(a, b):

    return a + b


result = add(10, 20)

print(result)

# Output:
# Before
# After
# 30`
                },

                {
                    definition: `<b>Complete Decorator Mental Model</b>

Remember these important concepts:

<b>1. Functions are objects.</b>

Therefore, functions can be passed as arguments.

<b>2. Nested functions are allowed.</b>

Therefore, we can create a wrapper inside a decorator.

<b>3. Functions can return functions.</b>

Therefore, the decorator can return the wrapper.

<b>4. @ syntax applies the decorator.</b>

Therefore:

<b>@decorator</b>
<b>def function():</b>

is equivalent to:

<b>function = decorator(function)</b>.`,

                    text1: `<b>One-line definition to remember:</b>

<b>"A decorator is a callable that takes another callable, adds or changes behavior, and returns a callable."</b>

<b>Most important pattern:</b>

<b>Decorator → receives function → creates wrapper → returns wrapper.</b>`,

                    code1: `# ---------- Ex : 1 - Complete example -----------

from functools import wraps


def decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print("Before function")

        result = func(*args, **kwargs)

        print("After function")

        return result

    return wrapper


@decorator
def greet(name):

    print("Hello", name)


greet("Anand")


# Output:
# Before function
# Hello Anand
# After function


# ---------- Ex : 2 - Equivalent syntax -----------

def greet(name):
    print("Hello", name)


greet = decorator(greet)


# ---------- Ex : 3 - Mental model -----------

# @decorator
# def greet():
#     pass
#
#              |
#              v
#
#     greet = decorator(greet)
#
#              |
#              v
#
#        wrapper function
#
#              |
#              v
#
#       greet() calls wrapper()`
                },

                {
                    definition: `<b>Decorators — Quick Revision</b>

<b>Decorator</b> → modifies or extends behavior.

<b>Wrapper</b> → function that surrounds the original function.

<b>@decorator</b> → shorthand syntax.

<b>*args</b> → accepts arbitrary positional arguments.

<b>**kwargs</b> → accepts arbitrary keyword arguments.

<b>@wraps</b> → preserves original function metadata.

<b>Decorator factory</b> → function that creates a decorator.

<b>Decorator stacking</b> → applying multiple decorators.

<b>Class decorator</b> → decorator applied to a class.

<b>__call__()</b> → allows an object to behave like a callable.

<b>@property</b> → method accessed like an attribute.

<b>@staticmethod</b> → method without automatic self/cls.

<b>@classmethod</b> → method receiving the class as cls.

<b>@lru_cache</b> → caching decorator.

<b>@dataclass</b> → class decorator for data-oriented classes.`,

                    text1: `<b>The 7 things you should remember first:</b>

<b>1.</b> Functions are first-class objects.

<b>2.</b> Functions can be passed as arguments.

<b>3.</b> Functions can return functions.

<b>4.</b> Decorators use wrapper functions.

<b>5.</b> <b>@decorator</b> is shorthand for <b>function = decorator(function)</b>.

<b>6.</b> Use <b>*args, **kwargs</b> for generic decorators.

<b>7.</b> Use <b>@wraps(func)</b> to preserve metadata.`,

                    code1: `# ---------- Ex : 1 - Final reusable pattern -----------

from functools import wraps


def decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        # Extra behavior
        print("Before")

        # Original behavior
        result = func(*args, **kwargs)

        # Extra behavior
        print("After")

        # Preserve original result
        return result

    return wrapper


@decorator
def add(a, b):

    return a + b


print(add(10, 20))

# Output:
# Before
# After
# 30


# ---------- Ex : 2 - Final mental model -----------

#             Original Function
#                    |
#                    v
#               Decorator
#                    |
#                    v
#                 Wrapper
#              /          \\
#           Before       After
#                \\       /
#             Original
#              Function
#                    |
#                    v
#                 Result`
                }

            ]
        },
        {
            id: 1,
            title: "Arguments (*args, **kwargs)",
            note: [
                {
                    text1: `In Python, *args and **kwargs are used to allow functions to accept an arbitrary number of arguments. These features provide great flexibility when designing functions that need to handle a varying number of inputs.
                    
                    In programming, we define a function to make a reusable code that performs similar operation. To perform that operation, we call a function with the specific value, this value is called a function argument in Python.
                    
                    Let's understand *args and **kwargs in Python — these are used when <b>you don't know in advance how many arguments</b> a function will receive.

                    In Python, we can pass a variable number of arguments to a function using special symbols. There are two special symbols:

                    We use Python *args and **kwargs when we are unsure about the number of arguments to pass. *args is used for non-keyworded arguments that we can pass to a function and perform operations, whereas **kwargs is used for a variable number of keyworded arguments passed to a function and performs dictionary operations.

1) *args (Non Keyword Arguments)
2) **kwargs (Keyword Arguments)

We use <b>*args</b> and <b>**kwargs</b> as an argument when we are unsure about the number of arguments to pass in the functions.

 <b>Are *args and **kwargs Python keywords?</b>
🔸 No, args and kwargs are not reserved keywords in Python.
🔸 But * and ** have special meaning in function definitions:

    <b>*</b> unpacks positional arguments into a tuple
    <b>**</b> unpacks Keyword/named arguments into a dict
     You can name them anything:

def my_func(*values, **options):
    print(values)   # tuple of args
    print(options)  # dict of kwargs

    -> Using *args and **kwargs makes your code:
    -> Easier to read
    -> Familiar to other developers

<b>Python *args - (Ex : 1)</b>
Python *args
In Python, *args is used to pass a variable number of positional arguments to a function. It collects these arguments into a tuple, allowing you to handle multiple values without specifying them one by one.

We use Python *args when we’re unsure how many arguments a function might receive during a call.

Key Points to Remember
-> *args collects extra positional arguments into a tuple.
-> It must appear after standard arguments in the function definition.
-> You can loop through args just like a tuple.
-> The name doesn’t have to be args, but the asterisk * is required.


<b>Python **kwargs (Ex : 2)</b>
<b>**kwargs</b> in a function definition → collect keyword arguments into a dictionary.
<b>**dict</b> in a function call → unpack a dictionary into keyword arguments.


<a href="https://github.com/anand-developer01/python-programs/blob/main/dict_kwargs_unpacking.py" target="_blank">(*dict, **kwargs) Unpacking</a> <b>Ex : 3 </b>
**kwargs in a function definition collects named arguments into a dictionary.
**user in a function call unpacks dictionary values into keyword arguments.
Added an AI model configuration example using **model_settings.

Key Points to Remember
<b>--></b> Keyword arguments are collected into a dictionary.(<b> Ex : 5 </b>)
<b>--></b> A keyword argument is an argument passed using <b>name=value</b> syntax.
    student(name="Anand", age=36)
    Here:
    name → keyword
    "Anand" → value
    age → keyword
    36 → value

<b>--></b> ** in a function definition tells Python to collect a variable number of keyword arguments into a dictionary.
Here, <b>kwargs</b> is just a conventional name. You could use another name:
def show_user(**user_details):
	print(user_details)

<b>--></b> <b>kwargs</b> behaves like a dictionary mapping each keyword to its value.
def student(**kwargs):
    print(kwargs["name"])
    print(kwargs["age"])
student(name="Anand", age=36)

<b>--></b> In modern Python, when we iterate over kwargs, the keyword arguments are processed in the order they were provided.
def student(**kwargs):
    for key, value in kwargs.items():
        print(key, value)
student(name="Anand", age=36, city="Hyderabad")
// The order is preserved.
Output:
name Anand
age 36
city Hyderabad

<b>--></b> You can combine <b>*args</b> and <b>**kwargs</b> in a function definition to accept <b>both positional and keyword arguments</b>. The order is important: <b>*args</b> must come before <b>**kwargs</b>.
def student(*args, **kwargs):
    print(args)
    print(kwargs)
student("Anand", 36, city="Hyderabad", role="Developer")
Output:
('Anand', 36)
{'city': 'Hyderabad', 'role': 'Developer'}
 <b>Why?</b>
"Anand"          → positional argument → *args
36               → positional argument → *args
city="Hyderabad" → keyword argument → **kwargs
role="Developer" → keyword argument → **kwargs

<b>--></b> You can also use <b>*args</b> and <b>**kwargs</b> when calling a function to unpack a list/tuple and dictionary into positional and keyword arguments, respectively.
When <b>defining</b> a function, they <b>collect</b> arguments.
When <b>calling</b> a function, they <b>unpack</b> arguments.
1. * unpacks a list/tuple into positional arguments
def add(a, b, c):
    return a + b + c
numbers = [10, 20, 30] 
result = add(*numbers) # approximately like: add(10, 20, 30)
print(result)
# Output:
# 60

2. ** unpacks a dictionary into keyword arguments
def student(name, age, city):
    print(name, age, city)
data = {
    "name": "Anand",
    "age": 36,
    "city": "Hyderabad"
}
student(**data)
//------
// Python treats:
student(**data) # approximately like:
student(
    name="Anand",
    age=36,
    city="Hyderabad"
)

<b>--></b> When using <b>*args</b> and <b>**kwargs</b>, you can provide default values for other parameters in the function definition. These default parameters should come before <b>*args</b> and <b>**kwargs</b>.

<b> Note </b>:
<b>One more important point</b>: kwargs is <b>not a special Python keyword</b>. The special part is **; the name kwargs is just a convention.
<a href="https://github.com/anand-developer01/python-programs/blob/main/args_kwargs_examples.py" target="_blank">(*args, **kwargs) Examples</a>
`,
                    code1: `//---------- Ex : 1 ---------
                    // *args
                    def multiply_all(*args):
    """Function to multiply any number of arguments together."""
    result = 1
    for number in args:
        result *= number
    return result

# Testing the function with different numbers of arguments
print(multiply_all(2, 3))          
print(multiply_all(4, 5, 6))     
print(multiply_all(1, 2, 3, 4, 5)) 
print(multiply_all(10))            
print(multiply_all()) 



//---------- Ex : 2 ---------
def print_kwargs(**kwargs):
    """Function to print key-value pairs passed as keyword arguments."""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Testing the function with different sets of keyword arguments
print_kwargs(name="Raman", age=30, city="New York")
print("---")
print_kwargs(language="Python", version=3.10)
print("---")
print_kwargs(course="Data Science", duration="6 months", level="Intermediate")
// Output: 
// name: Raman
// age: 30
// city: New York
// ---
// language: Python
// version: 3.1
// ---
// course: Data Science
// duration: 6 months
// level: Intermediate


//---------- Ex : 3 ---------
"""Understanding **kwargs in function definitions and calls."""
# \`**kwargs\` in a function definition collects named arguments into a dictionary.
# \`**user\` in a function call unpacks dictionary values into keyword arguments.
# Added an AI model configuration example using **model_settings.

# --------
# 1. **kwargs in a function definition collects keyword arguments.
def show_user(**user_details):
	print(user_details)

show_user(name="Maya", role="developer", active=True)
# Expected output:
# {'name': 'Maya', 'role': 'developer', 'active': True}

# -------
# 2. **dict in a function call unpacks a dictionary into keyword arguments.
def introduce_user(name, role, active):
	print(f"Name: {name}")
	print(f"Role: {role}")
	print(f"Active: {active}")

user = {
	"name": "Maya",
	"role": "developer",
	"active": True,
}

introduce_user(**user)
# Expected output:
# Name: Maya
# Role: developer
# Active: True

# -------
# 3. AI development example: pass model settings from a dictionary.
def generate_text(prompt, model, temperature, max_tokens):
	print("Prompt:", prompt)
	print("Model:", model)
	print("Temperature:", temperature)
	print("Maximum tokens:", max_tokens)


model_settings = {
	"model": "text-model-v1",
	"temperature": 0.2,
	"max_tokens": 200,
}

generate_text("Summarize this document.", **model_settings)
# Expected output:
# Prompt: Summarize this document.
# Model: text-model-v1
# Temperature: 0.2
# Maximum tokens: 200



//---------- Ex : 4 ---------
from flask import Flask, jsonify, request

app = Flask(__name__)

# Route with dynamic parts
@app.route("/profile/<username>/<int:year>/<month>")
def user_profile(**kwargs):
    # kwargs will contain: username, year, and month from the URL
    return jsonify({
        "username": kwargs.get("username"),
        "year": kwargs.get("year"),
        "month": kwargs.get("month")
    })

# Alternative using named parameters directly
@app.route("/greet/<name>")
def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(debug=True)

//http://127.0.0.1:5000/profile/anand/2025/June
// {
//   "username": "anand",
//   "year": 2025,
//   "month": "June"
// }




// ---------------- Ex : 5 --------------
def student(**kwargs):
    print(kwargs)

student(name="Anand", age=36, city="Hyderabad")

// kwargs becomes:

{
    "name": "Anand",
    "age": 36,
    "city": "Hyderabad"
}


// ---------------- Ex : 6 --------------
      `
                }
            ]
        },
        {
            id: 1,
            title: "Lambda",
            note: [
                {
                    text1: `<b>What is a Lambda Function?</b>
Lambda functions are similar to user-defined functions but without a name. They're commonly referred to as anonymous functions.

Lambda functions are efficient whenever you want to create a function that will only contain simple expressions – that is, expressions that are usually a single line of a statement. They're also useful when you want to use the function once.

You can define a lambda function like this:
We use the <b>lambda keyword</b> instead of <b>def</b> to create a lambda function. Here's the syntax to declare the lambda function:
<b>lambda argument(s) : expression</b>
Here,
<b>argument(s)</b> - any value passed to the lambda function
<b>expression </b>- expression is executed and returned

-> lambda is a keyword in Python for defining the anonymous function.
-> argument(s) is a placeholder, that is a variable that will be used to hold the value you want to pass into the function expression. A lambda function can have multiple variables depending on what you want to achieve.
-> expression is the code you want to execute in the lambda function.

Notice that the anonymous function does not have a return keyword. This is because the anonymous function will automatically return the result of the expression in the function once it is executed.

Let's look at an example of a lambda function to see how it works. We'll compare it to a regular user-defined function.

Assume I want to write a function that returns twice the number I pass it. We can define a user-defined function as follows:

def f(x):
  return x * 2

f(3)
>> 6

Now for a lambda function. We'll create it like this:
lambda x: x * 3

<b>When Should You Use a Lambda Function?</b>
You should use the lambda function to create simple expressions. For example, expressions that do not include complex structures such as if-else, for-loops, and so on.

<b>Common Use Cases for Lambda Functions</b>
How to Use a Lambda Function with Iterables
An iterable is essentially anything that consists of a series of values, such as characters, numbers, and so on.

In Python, iterables include strings, lists, dictionaries, ranges, tuples, and so on. When working with iterables, you can use lambda functions in conjunction with two common functions: <b>filter()</b> and <b>map()</b>.

<b>Filter()</b>
When you want to focus on specific values in an iterable, you can use the filter function. The following is the syntax of a filter function:

filter(function, iterable)

Firstly I will use the lambda function to create the expression I want to derive like this:

lambda x: x % 2 == 0
Then I will insert it into the filter function like this:

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filter(lambda x: x % 2 == 0, list1)

>> <filter at 0x1e3f212ad60> # The result is always filter object so I will need to convert it to list using list()

list(filter(lambda x: x % 2 == 0, list1))
>> [2, 4, 6, 8, 10]

<b>Pandas Series - (Ex : 3)</b>
Another place you'll use lambda functions is in data science when creating a data frame from Pandas. A series is a data frame column. You can manipulate all of the values in a series by using the lambda function.

df["lower_name"] = df["name"].apply(lambda x: x.lower())
The apply function will apply each element of the series to the lambda function. The lambda function will then return a value for each element based on the expression you passed to it. In our case, the expression was to lowercase each element.

<a href="https://github.com/anand-developer01/python-programs/blob/main/lambda_function.py" target="_blank">lambda function examples</a>
`,
                    code1: `// ------------- Ex : 1 ------------
                    s1 = 'GeeksforGeeks'

s2 = lambda func: func.upper()
print(s2(s1))
                    
                    
                    // -----------   -----------
                    // You use the \`map()\` function whenever you want to modify every value in an iterable.
list1 = [2, 3, 4, 5]

list(map(lambda x: pow(x, 2), list1))
>> [4, 9, 16, 25]


// ---------- Ex : 3 ---------
//Pandas Series
import pandas as pd

df = pd.DataFrame(
    {"name": ["IBRAHIM", "SEGUN", "YUSUF", "DARE", "BOLA", "SOKUNBI"],
     "score": [50, 32, 45, 45, 23, 45]
    }
)
    df["lower_name"] = df["name"].apply(lambda x: x.lower())`
                }
            ]
        },
        {
            id: 1,
            title: "map",
            note: [
                {
                    text1: `In Python, "map" primarily refers to the built-in map() function. This function applies a given function to each item of an iterable (like a list, tuple, or string) and returns a map object, which is an iterator.

The <b>map()</b> function is used to apply a given function to every item of an iterable, such as a list or tuple, and returns a map object (which is an iterator).      

The <b>map()</b> function executes a given function to each element of an iterable (such as lists, tuples, etc.).

Syntax
map(function, iterables)

<b>map() Arguments</b>
The map() function takes two arguments:

<b>function</b> - a function that is applied to each element of an iterable.
<b>iterables</b> - iterables such as lists, tuples, etc.
Note: We can pass more than one iterable to the map() function.

<b>map() Return Value</b>
The map() function returns a map object, which can be easily converted to lists, tuples, etc.`,
                    code1: `// ------------ Ex : 1 ---------- 
                    numbers = [1,2,3,4]

# returns the square of a number
def square(number):
  return number * number

# apply square() to each item of the numbers list
squared_numbers = map(square, numbers)

# converting to list for printing
result = list(squared_numbers)
print(result) 

# Output: [1,4,9,16]

// ----------- Ex : 2 -----------

def square(n):
    return n*n

numbers = (1, 2, 3, 4)
result = map(square, numbers)
print(result)

# converting the map object to set
result = set(result)
print(result)

// -----------  Ex : 3 ---------
// In a map() function, we can also use a lambda function instead of a regular function. For example,

numbers = (1, 2, 3, 4)
result = map(lambda x: x*x, numbers)
print(result)

# convert to set and print it
print(set(result))`
                }
            ]
        },
        {
            id: 1,
            title: "filter",
            note: [
                {
                    text1: `The <b>filter()</b> function in Python is a built-in function used to construct an iterator from elements of an iterable for which a function returns true.
                    
                    The filter() function selects elements from an iterable based on the result of a function.
                    
                     Syntax
filter(function, iterable)
filter() Parameters
The function takes two parameters:
<b>function</b> - a function that runs for each item of an iterable
<b>iterable</b> - a sequence that needs to be filtered like sets, lists, tuples, etc
`,
                    code1: `// ------------ Ex : 1 -----------
                # Filtering even numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

even_numbers_iterator = filter(is_even, numbers)
even_numbers = list(even_numbers_iterator)
print(even_numbers) # Output: [2, 4, 6, 8, 10]

# Using a lambda function for a more concise filter
positive_numbers = filter(lambda x: x > 0, [-2, -1, 0, 1, 2])
print(list(positive_numbers)) # Output: [1, 2]

// ------------ Ex : 2 -----------
# returns True if the argument passed is even
def check_even(number):
    if number % 2 == 0:
          return True  
    return False

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# if an element passed to check_even() returns True, select it
even_numbers_iterator = filter(check_even, numbers)

# converting to list
even_numbers = list(even_numbers_iterator)
print(even_numbers)

# Output: [2, 4, 6, 8, 10]


// -------------- Ex : 3 ----------
letters = ['a', 'b', 'd', 'e', 'i', 'j', 'o']

# a function that returns True if letter is vowel
def filter_vowels(letter):
    vowels = ['a', 'e', 'i', 'o', 'u']
    if letter in vowels:
        return True 
    else:
        return False

# selects only vowel elements
filtered_vowels = filter(filter_vowels, letters)

# converting to tuple
vowels = tuple(filtered_vowels)
print(vowels)

# Output: ('a', 'e', 'i', 'o')
`
                }
            ]
        },
        {
            id: 1,
            title: "reduce",
            note: [
                {
                    text1: `The <b>reduce()</b> function in Python is a functional programming tool that applies a given function cumulatively to the items of an iterable, from left to right, so as to reduce the iterable to a single value. It is part of the functools module and needs to be imported. 
                    
                    <b>reduce()</b> is used when you want to <b>combine all elements of a sequence into one final value.</b>
It comes from the functools module:<span style="color:#ac4561">
from functools import reduce </span>

                    The <b>reduce(fun,seq)</b> function is used to apply a particular function passed in its argument to all of the list elements mentioned in the sequence passed along. This function is defined in "functools" module.
                    
                    <b>Syntax of reduce()</b>
functools.reduce(function, iterable[, initializer])

<b>function</b>: A function that takes two arguments and performs an operation on them.
<b>iterable</b>: An iterable whose elements are processed by the function.
<b>initializer (optional)</b>: A starting value for the operation. If provided, it is placed before the first element in the iterable.`,
                    code1: `// ----------- Ex : 1----------
                    from functools import reduce

# Function to add two numbers
def add(x, y):
    return x + y

a = [1, 2, 3, 4, 5]
res = reduce(add, a)

print(res)  # Output: 15

//------------- Ex : 2 ----------
// When paired with a lambda function, reduce() becomes a concise and powerful tool for aggregation tasks like summing, multiplying or finding the maximum value.

from functools import reduce
// # Summing numbers with reduce and lambda
a = [1, 2, 3, 4, 5]
res = reduce(lambda x, y: x + y, a)

print(res)

// ------------- Ex : 3 ----------
from functools import reduce

arr = [1, "a", 2, "b"]

nums, strings = reduce(
    lambda acc, x: (
        (acc[0] + [x], acc[1]) if isinstance(x, (int, float)) else (acc[0], acc[1] + [x])
    ),
    arr,
    ([], [])
)

print("Numbers:", nums)   # [1, 2]
print("Strings:", strings)  # ['a', 'b']

`
                }
            ]
        },
        {
            id: 1,
            title: "Generators",
            note: [
                {
                    text1: `This is part of a <b>generator expression</b>, which is Python's compact way of writing a <b>for-loop inside a function call</b> — similar to JavaScript’s .map() or .forEach().
                    
                    A generator expression in Python provides a concise and memory-efficient way to create a generator object. It is syntactically similar to a list comprehension but uses parentheses <b>()</b> instead of square brackets <b>[]</b>.
                    
                    In Python, generators are a special type of iterator created using the <b>def</b> keyword followed by the <b>yield</b> statement. Unlike regular functions that use <b>return</b> to provide a single value, generator functions use <b>yield</b> to produce a sequence of values on demand.
                    <b>Ex : 1</b>
->                     A generator is a <b>special kind of iterator</b>.
-> It’s defined like a regular function using <b>def</b>, but instead of <b>return</b>, it uses <b>yield</b>.
-> Each call to <b>next()</b> on the generator <b>resumes from where it left off</b>, not from the beginning.

The state of the generator is maintained through the <b>yield</b> keyword, and its code only executes when <b>next()</b> is called on the generator object. Generators also support advanced methods like <b>.send(), .throw()</b>, and <b>.close()</b> for more complex use cases.

<b>The "Lazy" Magic</b>
The core difference between a list comprehension and a generator expression is <b>lazy evaluation</b>.

When you run a list comprehension, Python immediately calculates every single value and loads the entire list into your computer's RAM. A generator expression, on the other hand, is a recipe. It doesn't calculate anything until you explicitly ask for the next value. It yields one item, pauses, and waits for you to ask again.

<b>List comprehensions</b>
They are the most common type of comprehension in Python. They allow you to create a new list by applying an expression to each element of an existing iterable. The basic syntax of a list comprehension is as follows:

<b>new_list = [expression for item in iterable if condition]</b>
Here's a breakdown of the components:
-> <b>expression</b>: The operation or transformation applied to each element.
-> <b>item</b>: The variable representing each element in the iterable.
-> <b>iterable</b>: The sequence (list, tuple, string, etc.) being iterated over.
-> <b>condition (optional)</b>: A conditional statement to filter elements.
<b>Ex : 1</b>
# List Comprehension (uses square brackets)
squares_list = [x**2 for x in range(5)]
print(squares_list) 
# Output: [0, 1, 4, 9, 16]
# Generator Expression (uses parentheses)
squares_gen = (x**2 for x in range(5))
print(squares_gen) 
# Output: <generator object <genexpr> at 0x10a2b5350>

<b>Ex : 2</b>
arr = [1, 2, 3, 4, 5]

# Incorrect ❌
# eves = [num for num in arr: if num % 2 == 0]

# Correct ✅
eves = [num for num in arr if num % 2 == 0] 
# Output: [2, 4]

<b>Ex : 3</b>
eves = [num for num in arr<b style="color:red">:</b> if num % 2 == 0] // SyntaxError: invalid syntax
❌ Problem:
You added a colon (<b>:</b>) after arr, which is not allowed in list comprehensions.
In Python, colons are used in for loops or if blocks, but not in list comprehensions.


transpose = [[row[i] for row in matrix] for i in range(len(matrix[0]))] <b>Ex : 4</b>
This means:
-> Outer loop: <b>for i in range(len(matrix[0]))</b> → loop over column indices (0, 1, 2)
-> Inner loop: <b>for row in matrix</b> → for each row, get the <b>i</b>-th element
-> So you're collecting all the i-th elements from each row → that becomes a new row in the transposed matrix


<b>Equivalent Generator Function</b>
A generator expression is shorthand for a generator function.
Generator expression:
squares = (x * x for x in range(5))

Equivalent generator function:
def generate_squares():
    for x in range(5):
        yield x * x

squares = generate_squares()

Both produce values lazily (on demand).


<b>When to Use Generator Expressions</b>
Use them when:
Processing large datasets
Passing values directly to functions like <b>sum(), max(), min(), join(), any(), all()</b>
You don't need to store all results in memory

Examples:
-> total = sum(x * x for x in range(100))
-> result = any(x > 10 for x in [1, 5, 15, 3])
-> text = ",".join(str(x) for x in range(5))


<b> *** List Comprehension [] vs Generator Expression () </b>
<b>Syntax:</b>
    List Comprehensions use square brackets: <b>[x for x in range(10)]</b>
    Generator Expressions use parentheses: <b>(x for x in range(10))</b>

<b>Execution Method (Eager vs. Lazy):</b>
    -> <b>List Comprehensions are eager</b>. They compute the entire sequence immediately and return a fully populated list before moving to the next line of code.
    -> <b>Generator Expressions are lazy</b>. They do not compute anything upfront. They simply create a generator object that pauses and yields the next item only when explicitly asked.

<b>Memory Usage:</b>
    -> <b>List Comprehensions require high memory</b>. If you generate 10 million items, your computer must allocate enough RAM to hold all 10 million items at once.
    -> <b>Generator Expressions are highly memory-efficient</b>. They only hold one item in memory at a time alongside the state of the loop, meaning the memory footprint is tiny and constant regardless of the dataset size.

<b>Reusability:</b> 
    -> List Comprehensions are persistent. Because the data is saved in memory, you can loop over the list as many times as you need.
    -> Generator Expressions are single-use. Once an item is generated, it is forgotten. If you finish iterating through the generator, it is "exhausted" and will be empty if you try to loop through it again.

<b>Supported Operations:</b>
    -> List Comprehensions support standard list features. You can check their length <b>(len(arr))</b>, slice them <b>(arr[1:4])</b>, and access specific indices directly <b>(arr[3])</b>.
    -> Generator Expressions strictly forbid indexing, slicing, and len(). Because the values haven't been generated yet, Python doesn't know how long it is or what the 5th item will be without calculating the first 4.

<b>Performance:</b>
    -> List Comprehensions are faster overall if your final goal requires storing all the elements in memory anyway (like returning a complete dataset).
    -> Generator Expressions have a nearly instant initialization time and are much faster when you are scanning through data looking for a specific condition (because you can break the loop early without having computed the rest of the sequence).
`,
                    code1: `// ------------ Ex : 1 ---------
                    def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(3)

print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3
print(next(counter))  # Raises StopIteration
                    //you're seeing Python's built-in StopIteration exception, which is how generators signal that they are finished.
                    
                    // ---------- Ex : 2 -----------
                    numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]

// ---------- Ex : 3 -----------
// List comprehensions can also include conditional statements to filter elements. Here’s an example that creates a new list of even numbers from an existing list:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens_num = [i for i in numbers if i % 2 == 0]
print(evens_num)



//---------- Ex : 4 ------------
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
transpose = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(transpose)  # Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// or

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

transpose = []

for i in range(len(matrix[0])):  # column index
    new_row = []
    for row in matrix:
    --->print(f"row={row}, i={i}, row[i]={row[i]}")
    --->new_row.append(row[i])
    transpose.append(new_row)

print("Transpose:", transpose)

//---------- ✅ Example 2: Flatten a 2D Matrix
// 🧠 List Comprehension:

flat = [num for row in matrix for num in row]

// 🔍 Expanded Version:

flat = []
for row in matrix:
    for num in row:
        print(f"row={row}, num={num}")
        flat.append(num)

print("Flattened:", flat)

//-------✅ Example 3: Get Even Numbers in a 2D Matrix
// 🧠 List Comprehension:
even = [num for row in matrix for num in row if num % 2 == 0]

// 🔍 Expanded Debuggable Version:
even = []
for row in matrix:
    for num in row:
        if num % 2 == 0:
            print(f"Even found: {num}")
            even.append(num)

print("Even numbers:", even)


// ----------✅ Example 4: Multiply Matrix by 2
// 🧠 List Comprehension:
doubled = [[num * 2 for num in row] for row in matrix]

// 🔍 Expanded Version:
doubled = []

for row in matrix:
    new_row = []
    for num in row:
        doubled_value = num * 2
        print(f"Original: {num}, Doubled: {doubled_value}")
        new_row.append(doubled_value)
    doubled.append(new_row)

print("Doubled Matrix:", doubled)

// ----------✅ Example 5: Diagonal Extraction (Left-to-Right)
// 🧠 List Comprehension:
diagonal = [matrix[i][i] for i in range(len(matrix))]

// 🔍 Expanded Version:
diagonal = []

for i in range(len(matrix)):
    value = matrix[i][i]
    print(f"matrix[{i}][{i}] = {value}")
    diagonal.append(value)

print("Diagonal:", diagonal)
`
                }
            ]
        },
        {
            id: 1,
            title: "Iterator",
            note: [
                {
                    text1: `An <b>iterator</b> is an object that allows you to go through a collection <b>one item at a time.</b> In Python, an iterator is an object that implements the iterator protocol, which consists of the methods <b>__iter__()</b> and <b>__next__()</b>.
                    
                    <b>Iterable vs Iterator</b>
An <b>iterable</b> is any Python object capable of returning its members one at a time, allowing it to be iterated over in a for-loop. Examples of iterables include lists, tuples, strings, and dictionaries.
An <b>iterator</b> is an object that represents a stream of data; it returns the next item of the iterable when you call the <b>next()</b> function on it. An iterator keeps track of its current position in the iterable and raises a <b>StopIteration</b> exception when there are no more items to return.<span style="color:#ac4561">
[10, 20, 30, 40]
   ↓
next() → 10
next() → 20
next() → 30
next() → 40
next() → StopIteration
</span>
<b>Creating an iterator with iter()</b>
Python provides <b>iter()</b> to convert an iterable into an iterator.<span style="color:#ac4561">
numbers = [10, 20, 30]
iterator = iter(numbers)
print(iterator)
// Now use next():
print(next(iterator))
print(next(iterator))
print(next(iterator))</span>
// Output:
// 10
// 20
// 30
If you call next() again:
print(next(iterator))
You get:<span style="color:#ac4561">
StopIteration</span>
because there are no more elements.

<b>How for loop uses iterators</b>
This is an important concept.
When you write:<span style="color:#ac4561">
numbers = [10, 20, 30]
for number in numbers:
    print(number) </span>
Python internally does something conceptually similar to:<span style="color:#ac4561">
iterator = iter(numbers)
while True:
    try:
        number = next(iterator)
        print(number)
    except StopIteration:
        break </span>

        <b>Creating your own iterator</b>
An object becomes an iterator when it implements: (<b>__iter__()</b> and <b>__next__()</b>) methods.(<b> Ex : 1</b>)

<b>Why do we need iterators?</b>
The biggest advantage is that <b>we don't necessarily need to keep all data in memory at once.</b>

<a href="https://github.com/anand-developer01/python-programs/blob/main/iterator.py" target="_blank">iterator examples</a>
                    `,
                    code1: `// ----------- Ex : 1 -----------        
            class Numbers:
                def __init__(self, max_number):
                    self.number = 1
                    self.max_number = max_number

                def __iter__(self):
                    return self

                def __next__(self):
                    if self.number <= self.max_number:
                        result = self.number
                        self.number += 1
                        return result
                    else:
                        raise StopIteration
            
                // Use it:
                numbers = Numbers(3)
                print(next(numbers))
                print(next(numbers))
                print(next(numbers))

                // Output:
                // 1
                // 2
                // 3

                // The next call:
                print(next(numbers))
                // raises:
                StopIteration

                // And you can also use it with a for loop:
                numbers = Numbers(3)
                for n in numbers:
                    print(n)

                // Output:
                // 1
                // 2
                // 3
            
            `
                }
            ]
        },
        {
            id: 1,
            title: "Virtual Environments",
            note: [
                {
                    text1: `When developing software with Python, a basic approach is to install Python on your machine, install all your required libraries via the terminal, write all your code in a single .py file or notebook, and run your Python program in the terminal.

This is a common approach for a lot of beginners and many people transitioning from working with Python for data analytics.

This works fine for simple Python scripting projects. But in complex software development projects, like building a Python library, an API, or software development kit, often you will be working with multiple files, multiple packages, and dependencies. As a result, you will need to isolate your Python development environment for that particular project.

Consider this scenario: you are working on app A, using your system installed Python and you pip install packageX version 1.0 to your global Python library. Then you switch to project B on your local machine, and you install the same packageX but version 2.0, which has some breaking changes between version 1.0 and 2.0.

When you go back to run your app A, you get all sorts of errors, and your app does not run. This is a scenario you can run into when building software with Python. And to get around this, we can use virtual environments.

<b>What is a Virtual Environment?</b>
Python's official documentation says:

"A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system"

A Python Virtual Environment is an isolated space where you can work on your Python projects, separately from your system-installed Python. You can set up your own libraries and dependencies without affecting the system Python. We will use virtualenv to create a virtual environment in Python.

A virtual environment is a tool that helps to keep dependencies required by different projects separate by creating isolated Python virtual environments for them. This is one of the most important tools that most Python developers use.     

<b>Why use a virtual environment?</b>
    -> Each project can use different versions of the same package.
    -> Avoids polluting the global Python environment.
    -> Makes deployment easier and cleaner.

<b>🔧 How to create and use a virtual environment</b>
<b>1. Create a virtual environment</b>
python -m venv <span>env</span>
    env is the name of the virtual environment folder. You can name it anything.
    This creates a directory with Python binaries and local site-packages.
                (OR)
    $ /n/fs/myproject/py310/bin/python3.10 -m venv my_venv_py310
The -m <b>venv</b> tells Python to use the “venv” module to create a virtual environment in a directory called my_venv_py310.


<b>2. Activate the virtual environment</b>
    => On Windows:
<b>./\env/\Scripts/\activate</b>

=> On macOS/Linux:
    <b>source <span style="color:red">env</span>/bin/activate</b>
<b>env</b> is just the <b>name of the virtual environment folder</b> — and yes, you can name it anything you want.
After activation, your terminal prompt usually changes to show the environment name.

<b>3. Install packages inside the environment</b>
pip install flask
This installs <b>flask</b> only inside your virtual environment.

<b>4. Freeze dependencies</b>
pip freeze > requirements.txt
This saves the installed packages to a file, useful for sharing or deployment.
Freezing dependencies means saving a list of all the Python packages (and their exact versions) that are installed in your virtual environment.

<b>5. Deactivate the virtual environment</b>
deactivate

<b>🔁 Recreate environment from requirements.txt</b>
python -m venv env
source env/bin/activate  # or ./\env/\Scripts/\activate on Windows
pip install -r requirements.txt

<b>🧠 Tools that help manage environments</b>
    <b>venv</b> - built-in tool (recommended for most use cases)
    <b>virtualenv</b> - older third-party tool, used when venv is not available
    <b>pipenv</b> - combines package + environment management
    <b>conda</b> - for data science, handles packages + environments
    `,
                    code1: `//If you created your environment like this:
python -m venv myproject_env

// Then to activate it:
source myproject_env/bin/activate

// Deactivate the virtual environment
deactivate

//----- Freezing dependencies ------ 
// Freezing dependencies means saving a list of all the Python packages (and their exact versions) that are installed in your virtual environment.

pip freeze > requirements.txt

// ----- Recreate environment from requirements.txt -----
python -m venv env
source env/bin/activate  # or ./\env/\Scripts/\activate on Windows
pip install -r requirements.txt

`
                }
            ]
        },
        {
            id: 1,
            title: "pip",
            note: [
                {
                    text1: `In Python, pip is a package manager. It is a tool that simplifies the process of installing, managing, and uninstalling software packages and their dependencies. Essentially, it allows you to easily add functionality to your Python projects by installing pre-built libraries and modules. 
                    pip stands for:
<b>📦 Pip Installs Packages</b>
                    pip is the package installer for Python.
It lets you <b>install, upgrade, and manage</b> third-party Python libraries from the <b>Python Package Index (PyPI)</b> — like <b>flask, django, requests, numpy</b>, and more.

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Task</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>✅ Install a package</td>
      <td><code>pip install flask</code></td>
    </tr>
    <tr>
      <td>⬆️ Upgrade a package</td>
      <td><code>pip install --upgrade flask</code></td>
    </tr>
    <tr>
      <td>❌ Uninstall a package</td>
      <td><code>pip uninstall flask</code></td>
    </tr>
    <tr>
      <td>🔍 Check installed packages</td>
      <td><code>pip list</code></td>
    </tr>
    <tr>
      <td>❄️ Freeze dependencies</td>
      <td><code>pip freeze &gt; requirements.txt</code></td>
    </tr>
    <tr>
      <td>📦 Install from requirements</td>
      <td><code>pip install -r requirements.txt</code></td>
    </tr>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Unit Testing (unittest, pytest)",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "[:]  slicing syntax",
            note: [
                {
                    text1: `In Python, [:] is called slicing syntax. It is used to extract a portion of a sequence such as a list, string, tuple, or other sliceable objects.
                    
                    The general syntax is:
<b> sequence[start:stop:step] </b>
Think of it as:
Start → where to begin
Stop → where to stop (not included)
Step → how many positions to move each time

<b>1. Basic [:] </b>
Suppose:
numbers = [10, 20, 30, 40, 50]

If you do:
numbers[:]
You get:
[10, 20, 30, 40, 50]

It means:
"Take everything from the beginning to the end."
So:
numbers[:]
is essentially a way to create a shallow copy of the list.

<b>2. [start:stop]</b>
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])
Output:
[20, 30, 40]
Why?
Python indexes:
Index:    0    1    2    3    4
          ↓    ↓    ↓    ↓    ↓
Value:   10   20   30   40   50

[1:4] means:
<b>Start at index 1</b>
<b>Stop before index 4</b>

Therefore:
20, 30, 40

<b>3. [start:]</b>
If you don't provide the stop:
numbers[2:]
Output:
[30, 40, 50]
Meaning:
Start at index 2 and continue until the end.

<b>4. [:stop]</b>
If you don't provide the start:
numbers[:3]
Output:
[10, 20, 30]
Meaning:
Start from the beginning and stop before index 3.

<b>5. [::step]</b>
Now we have the third part: step.
numbers = [10, 20, 30, 40, 50]
print(numbers[::2])
Output:
[10, 30, 50]

It takes every 2nd element.
Think:
10 → 20 → 30 → 40 → 50
↑         ↑         ↑
take      take      take

<b>6. Reverse a list with [::-1]</b>
This is one of the most important uses.
numbers = [10, 20, 30, 40, 50]
print(numbers[::-1])

Output:
[50, 40, 30, 20, 10]
Why?
[start : stop : step]
   ↓      ↓      ↓
   -      -     -1

-1 means:
Move backwards one position at a time.
So:
[::-1]
means:
Take everything, but move backwards.

<b>7. Strings also support [:]</b>
name = "Anand"
print(name[:])
Output:
Anand
You can also do:
print(name[1:4])
Output:
nan
And:
print(name[::-1])
Output:
dnanA

<b>8. Very important: [:] vs [::] vs [::-1]</b>
These may look confusing initially.
<b>[:]</b>	Everything
<b>[start:]</b>	Start → end
<b>[:stop]</b>	Beginning → stop
<b>[start:stop]</b>	Start → stop
<b>[::2]</b>	Everything, every 2nd element
<b>[::-1]</b>	Everything in reverse
`,
                    code1: `
# ============================================================
# Python Slicing [:]
# ============================================================


# -------------------------- Ex : 1 --------------------------
# Basic slicing: [start:end]

text = "Python"

result = text[0:3]

print(result)

# Output:
# Pyt


# -------------------------- Ex : 2 --------------------------
# Start omitted: [:end]

text = "Python"

result = text[:4]

print(result)

# Output:
# Pyth


# -------------------------- Ex : 3 --------------------------
# End omitted: [start:]

text = "Python"

result = text[2:]

print(result)

# Output:
# thon


# -------------------------- Ex : 4 --------------------------
# Start and end omitted: [:]

text = "Python"

result = text[:]

print(result)

# Output:
# Python


# -------------------------- Ex : 5 --------------------------
# Negative index: [-3:]

text = "Python"

result = text[-3:]

print(result)

# Output:
# hon


# -------------------------- Ex : 6 --------------------------
# Negative end: [:-2]

text = "Python"

result = text[:-2]

print(result)

# Output:
# Pyth


# -------------------------- Ex : 7 --------------------------
# Slicing with step: [start:end:step]

text = "Python"

result = text[0:6:2]

print(result)

# Output:
# Pto


# -------------------------- Ex : 8 --------------------------
# Step only: [::2]

text = "Python"

result = text[::2]

print(result)

# Output:
# Pto


# -------------------------- Ex : 9 --------------------------
# Reverse string: [::-1]

text = "Python"

result = text[::-1]

print(result)

# Output:
# nohtyP


# -------------------------- Ex : 10 --------------------------
# List slicing

numbers = [10, 20, 30, 40, 50]

result = numbers[1:4]

print(result)

# Output:
# [20, 30, 40]


# -------------------------- Ex : 11 --------------------------
# List from beginning

numbers = [10, 20, 30, 40, 50]

result = numbers[:3]

print(result)

# Output:
# [10, 20, 30]


# -------------------------- Ex : 12 --------------------------
# List from a specific index

numbers = [10, 20, 30, 40, 50]

result = numbers[2:]

print(result)

# Output:
# [30, 40, 50]


# -------------------------- Ex : 13 --------------------------
# List with step

numbers = [10, 20, 30, 40, 50]

result = numbers[::2]

print(result)

# Output:
# [10, 30, 50]


# -------------------------- Ex : 14 --------------------------
# Reverse a list

numbers = [10, 20, 30, 40, 50]

result = numbers[::-1]

print(result)

# Output:
# [50, 40, 30, 20, 10]


# -------------------------- Ex : 15 --------------------------
# Tuple slicing

items = ("A", "B", "C", "D", "E")

result = items[1:4]

print(result)

# Output:
# ('B', 'C', 'D')


# -------------------------- Ex : 16 --------------------------
# Tuple with step

items = ("A", "B", "C", "D", "E")

result = items[::2]

print(result)

# Output:
# ('A', 'C', 'E')


# -------------------------- Ex : 17 --------------------------
# Negative slicing

text = "ABCDEFGHIJ"

result = text[-5:-1]

print(result)

# Output:
# FGHI


# -------------------------- Ex : 18 --------------------------
# Reverse using negative step

text = "ABCDEFGHIJ"

result = text[8:2:-1]

print(result)

# Output:
# IHGFED


# -------------------------- Ex : 19 --------------------------
# Every second character

text = "ABCDEFGHIJ"

result = text[1::2]

print(result)

# Output:
# BDFHJ


# -------------------------- Ex : 20 --------------------------
# Copying a list using [:]

numbers = [10, 20, 30, 40, 50]

result = numbers[:]

print(result)

# Output:
# [10, 20, 30, 40, 50]                    
                    `
                }
            ]
        },
        {
            id: 1,
            title: "__name__",
            note: [
                {
                    text1: `<b>What is __name__?</b>
In contrast, the “__main__“ string that is being matched in the if statement does have special semantics. Each time a Python module is imported, Python automatically assigns a string name to the dunder name (__name__) variable in that module's namespace; normally this is the name of the module being imported as defined by its source file name (or package hierarchy name). The outermost module—the one that is there every time you run Python and requires no import—is always assigned “__main__“ as its name. It is the main module that is always present. (See the Python Execution Model documentation for more details.)

The if __name__ == "__main__" block in Python allows you to define code that will only run when the file is executed directly as a script, but not when it's imported as a module into another script.

=> Every Python file (module) has a special built-in variable called <b>__name__</b>.
=> When a Python file is run directly (like <b>python myfile.py</b>), then Python sets <b>__name__ = "__main__"</b> in that file.
=> But if the file is <b>imported</b> from another file (like import myfile), then <b>__name__ = "myfile"</b> (i.e., the module name).

<b>Why is __name__ useful?</b>
The reason that <b>__name__</b> is useful has to do with the fact that Python runs the code that it is importing as a module. Doing an import populates the module's namespace with the variables, functions, and classes defined in the module. With <b>__name__</b> I have a way to control what actually runs and the context in which it runs.

Purpose of <b>if __name__ == "__main__":</b>
It tells Python:
<b>Only run the below code if this file is being executed directly, not when imported.</b>
`,
                    code1: `// ------------ Ex : 1 -----------
                    // # file: payment.py

def greet():
    print("Welcome to the payment system!")

if __name__ == "__main__":
    greet()

//     Output:
//     If you run python payment.py → Output:
// Welcome to the payment system!

// If you do:
// import payment
//  Nothing prints, because __name__ is not "__main__".


// ------------ Ex : 2 -----------
🧪 Real-Time Example:

# utils.py
def add(a, b):
    return a + b

if __name__ == "__main__":
    print(add(3, 4))  # Only runs when this file is executed directly

# main.py
import utils
print(utils.add(10, 5))

//     Output when running main.py:
// 15

// Output when running utils.py:
// 7
`
                }
            ]
        },
        {
            id: 1,
            title: "Context Manager",
            note: [
                {
                    definition: `<b>A context manager in Python is an object that manages a resource or a specific block of code by automatically performing setup before the block and cleanup after the block.</b>

The context manager is commonly used with the <b>"with" statement</b>.

The main purpose is to guarantee that <b>cleanup code is executed, even if an exception occurs</b> inside the "with" block.`,

                    text1: `
A <b>Context Manager</b> in Python is a mechanism used to <b>manage resources automatically.</b>
                    A context manager in Python is a construct that handles the setup and teardown of resources automatically. It is most commonly used with the <b>with statement</b> to ensure that resources—like files, database connections, or network sockets—are properly managed and cleaned up (even if errors occur).
                    
                    <b>Why Use Context Managers?</b>
                    Without a context manager, you have to manually handle cleanup tasks, which can lead to resource leaks if an exception interrupts your code. Context managers guarantee cleanup by:
                    <b>Automating Setup</b>: Preparing the resource before the code block runs (e.g., opening a file).
                    <b>Guaranteed Teardown</b>: Cleaning up after the block finishes, regardless of whether it succeeded or crashed (e.g., closing a file).
    
    The basic syntax is:
with context_manager as variable:
    # code block

Python automatically performs:

1. <b>Setup / resource acquisition</b>
2. Executes the code inside the "with" block
3. <b>Cleanup / resource release</b>

This makes <b>resource management safer and cleaner.</b>`,

                    code1: `# ---------- Ex : 1 : Basic with statement -------------

with open("example.txt", "w") as file:
    file.write("Hello Python")

# Python automatically closes the file
# after the with block finishes.


# ---------- Ex : 2 : Without context manager -------------

file = open("example.txt", "w")

try:
    file.write("Hello Python")
finally:
    file.close()


# ---------- Ex : 3 : With context manager -------------

with open("example.txt", "w") as file:
    file.write("Hello Python")

# No need to explicitly call:
# file.close()


# ---------- Ex : 4 : Why context managers are useful -------------

with open("example.txt", "r") as file:
    data = file.read()

print(data)

# The file is automatically closed after
# leaving the with block.`
                },

                {
                    definition: `The <b>"with" statement</b> is the syntax used to work with a context manager.

It ensures that the context manager's <b>setup and cleanup operations are performed automatically.</b>`,

                    text1: `The general structure is:

with expression as variable:
    statements

The expression must produce an object that supports the <b>context manager protocol.</b>`,

                    code1: `# ---------- Ex : 5 : with statement -------------

with open("data.txt", "r") as file:
    content = file.read()

print(content)


# ---------- Ex : 6 : with without "as" -------------

with open("data.txt", "r"):
    print("File is being used")


# ---------- Ex : 7 : Multiple context managers -------------

with open("input.txt", "r") as source, open("output.txt", "w") as target:
    data = source.read()
    target.write(data)`
                },

                {
                    definition: `Python's <b>context manager protocol</b> is mainly based on two special methods:

<b>__enter__()</b>
<b>__exit__()</b>

An object that implements these methods can be used with the <b>"with" statement.</b>`,

                    text1: `The execution flow is approximately:

1. Python calls <b>__enter__()</b>
2. The value returned by __enter__() is assigned to the <b>"as" variable</b>
3. The code inside the with block executes
4. Python calls <b>__exit__()</b>
5. <b>__exit__() is called even when an exception occurs</b> inside the block.`,

                    code1: `# ---------- Ex : 8 : Context manager protocol -------------

class MyContext:

    def __enter__(self):
        print("Entering context")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context")


with MyContext() as obj:
    print("Inside with block")


# Output:
# Entering context
# Inside with block
# Exiting context`
                },

                {
                    definition: `<b>__enter__()</b> is called when execution enters the "with" block.

It is normally used for <b>setup or resource acquisition.</b>

The value returned by __enter__() becomes the value assigned to the variable after <b>"as"</b>.`,

                    text1: `For example:

with MyContext() as obj:

Here:

MyContext() -> creates the context manager
<b>__enter__() -> is automatically called</b>
obj -> receives the value returned by __enter__()`,

                    code1: `# ---------- Ex : 9 : __enter__() -------------

class Database:

    def __enter__(self):
        print("Database connection opened")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Database connection closed")


with Database() as db:
    print("Using database")


# Output:
# Database connection opened
# Using database
# Database connection closed


# ---------- Ex : 10 : Returning another value from __enter__ -------------

class Example:

    def __enter__(self):
        return "Hello from context manager"

    def __exit__(self, exc_type, exc_value, traceback):
        pass


with Example() as message:
    print(message)

# Output:
# Hello from context manager`
                },

                {
                    definition: `<b>__exit__()</b> is called automatically when Python leaves the "with" block.

It is mainly used for <b>cleanup operations</b> such as closing files, releasing locks, closing database connections, or releasing other resources.`,

                    text1: `__exit__() receives three important arguments:

<b>exc_type</b>
    Type of exception

<b>exc_value</b>
    Exception object / exception value

<b>traceback</b>
    Traceback information

If no exception occurs, <b>all three are None.</b>`,

                    code1: `# ---------- Ex : 11 : __exit__() without exception -------------

class Example:

    def __enter__(self):
        print("Entering")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting")
        print(exc_type)
        print(exc_value)
        print(traceback)


with Example():
    print("Inside")


# Output:
# Entering
# Inside
# Exiting
# None
# None
# None


# ---------- Ex : 12 : __exit__() with exception -------------

class Example:

    def __enter__(self):
        print("Entering")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting")
        print("Exception type:", exc_type)
        print("Exception value:", exc_value)


with Example():
    print("Inside")
    raise ValueError("Something went wrong")


# __exit__() is still called before the exception
# continues outside the context manager.`
                },

                {
                    definition: `The <b>return value of __exit__()</b> determines whether an exception should be suppressed.

If __exit__() returns:

<b>True</b>
    The exception is suppressed.

<b>False or None</b>
    The exception is not suppressed and continues normally.`,

                    text1: `This is an <b>important feature of context managers.</b>

Normally, __exit__() should return None unless you intentionally want to <b>handle and suppress an exception.</b>`,

                    code1: `# ---------- Ex : 13 : Suppressing an exception -------------

class IgnoreError:

    def __enter__(self):
        print("Entering")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting")
        return True


with IgnoreError():
    print("Inside")
    raise ValueError("Something went wrong")

print("Program continues")


# Output:
# Entering
# Inside
# Exiting
# Program continues


# ---------- Ex : 14 : Not suppressing an exception -------------

class DoNotIgnore:

    def __enter__(self):
        print("Entering")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting")
        return False


with DoNotIgnore():
    raise ValueError("Something went wrong")

# ValueError continues after __exit__()`
                },

                {
                    definition: `A <b>custom context manager</b> is a user-defined class that implements the context manager protocol using <b>__enter__() and __exit__().</b>`,

                    text1: `Custom context managers are useful when you want to automatically manage your own resources or operations.

Typical examples:

- Database connections
- Transactions
- Locks
- Temporary files
- Logging
- Timers
- Configuration changes
- Network connections`,

                    code1: `# ---------- Ex : 15 : Custom context manager -------------

class FileManager:

    def __enter__(self):
        print("Opening file")
        self.file = open("data.txt", "w")
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        print("Closing file")
        self.file.close()


with FileManager() as file:
    file.write("Hello Python")


# Output:
# Opening file
# Closing file


# The file is automatically closed.`
                },

                {
                    definition: `Context managers are especially useful when a resource must <b>always be released, even when an exception occurs.</b>`,

                    text1: `The important idea is:

<b>Acquire resource</b>
        ↓
<b>Use resource</b>
        ↓
<b>Exception or normal completion</b>
        ↓
<b>Cleanup resource</b>

This is similar to <b>try/finally</b>, but a context manager packages this behavior into a reusable abstraction.`,

                    code1: `# ---------- Ex : 16 : try/finally equivalent -------------

file = open("data.txt", "w")

try:
    file.write("Hello")
finally:
    file.close()


# ---------- Ex : 17 : Context manager equivalent -------------

with open("data.txt", "w") as file:
    file.write("Hello")


# Both guarantee cleanup,
# but the context manager provides cleaner syntax.`
                },

                {
                    definition: `A context manager can also be used to <b>temporarily change a state</b> and then restore the original state after leaving the with block.`,

                    text1: `The context manager does not have to manage a physical resource.

It can manage <b>any temporary state or behavior.</b>`,

                    code1: `# ---------- Ex : 18 : Temporary state -------------

class TemporarySetting:

    def __enter__(self):
        print("Setting enabled")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Setting restored")


with TemporarySetting():
    print("Using temporary setting")


# Output:
# Setting enabled
# Using temporary setting
# Setting restored`
                },

                {
                    definition: `A context manager can receive a value through <b>__init__()</b> and use that value during __enter__() and __exit__().`,

                    text1: `The lifecycle is:

<b>__init__()</b>
    ↓
<b>__enter__()</b>
    ↓
<b>with block</b>
    ↓
<b>__exit__()</b>`,

                    code1: `# ---------- Ex : 19 : Context manager with constructor -------------

class FileManager:

    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode

    def __enter__(self):
        print("Opening:", self.filename)
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        print("Closing:", self.filename)
        self.file.close()


with FileManager("data.txt", "w") as file:
    file.write("Hello Python")`
                },

                {
                    definition: `Python provides the <b>contextlib</b> module to make context managers easier to create.

The <b>@contextmanager decorator</b> allows you to create a context manager using a <b>generator function</b> instead of writing a class with __enter__() and __exit__().`,

                    text1: `The contextlib.contextmanager pattern uses:

<b>setup code</b>
<b>yield</b>
<b>cleanup code</b>

Code before yield behaves like <b>__enter__()</b>.

The value passed to yield becomes the value after <b>"as"</b>.

Code after yield behaves like <b>__exit__()</b>.`,

                    code1: `# ---------- Ex : 20 : @contextmanager -------------

from contextlib import contextmanager


@contextmanager
def my_context():
    print("Entering context")

    yield

    print("Exiting context")


with my_context():
    print("Inside with block")


# Output:
# Entering context
# Inside with block
# Exiting context`
                },

                {
                    definition: `The value passed to <b>yield</b> from a @contextmanager function becomes the value assigned to the variable after <b>"as"</b>.`,

                    text1: `For example:

with database_connection() as db:

The object yielded by the context manager is assigned to <b>db</b>.`,

                    code1: `# ---------- Ex : 21 : Yielding a value -------------

from contextlib import contextmanager


@contextmanager
def database():
    print("Opening database")

    connection = "Database Connection"

    try:
        yield connection
    finally:
        print("Closing database")


with database() as db:
    print(db)


# Output:
# Opening database
# Database Connection
# Closing database`
                },

                {
                    definition: `The <b>try/finally</b> pattern inside a @contextmanager is important when cleanup must happen even if an exception occurs inside the with block.`,

                    text1: `The general pattern is:

@contextmanager
def something():
    setup()

    try:
        yield resource
    finally:
        cleanup()

The <b>finally block guarantees cleanup.</b>`,

                    code1: `# ---------- Ex : 22 : Exception-safe context manager -------------

from contextlib import contextmanager


@contextmanager
def resource():
    print("Resource acquired")

    try:
        yield
    finally:
        print("Resource released")


with resource():
    print("Using resource")
    raise ValueError("Something went wrong")


# Output:
# Resource acquired
# Using resource
# Resource released
#
# The exception is still raised,
# but cleanup happens first.`
                },

                {
                    definition: `A context manager can also catch exceptions using the <b>try/except/finally</b> pattern inside a @contextmanager function.`,

                    text1: `This allows the context manager to perform <b>custom exception handling</b> while still guaranteeing cleanup.`,

                    code1: `# ---------- Ex : 23 : Handling exception with @contextmanager -------------

from contextlib import contextmanager


@contextmanager
def my_context():

    print("Starting")

    try:
        yield
    except ValueError as error:
        print("Handled:", error)
    finally:
        print("Cleanup")


with my_context():
    print("Inside")
    raise ValueError("Invalid value")


print("Program continues")`
                },

                {
                    definition: `Multiple context managers can be used in a <b>single with statement.</b>

This is useful when multiple resources need to be opened and automatically cleaned up.`,

                    text1: `Each context manager gets entered and exited automatically.

<b>The cleanup happens in reverse order of entry.</b>`,

                    code1: `# ---------- Ex : 24 : Multiple context managers -------------

with open("input.txt", "r") as source, open("output.txt", "w") as target:

    data = source.read()

    target.write(data)


# Equivalent idea:

# Enter source
# Enter target
# Execute block
# Exit target
# Exit source`
                },

                {
                    definition: `Context managers can also be <b>nested.</b>

The inner context manager is entered after the outer context manager and is exited before the outer context manager.`,

                    text1: `Execution order:

<b>Outer __enter__()</b>
    ↓
<b>Inner __enter__()</b>
    ↓
<b>Inner __exit__()</b>
    ↓
<b>Outer __exit__()</b>`,

                    code1: `# ---------- Ex : 25 : Nested context managers -------------

class ContextA:

    def __enter__(self):
        print("A enter")

    def __exit__(self, exc_type, exc_value, traceback):
        print("A exit")


class ContextB:

    def __enter__(self):
        print("B enter")

    def __exit__(self, exc_type, exc_value, traceback):
        print("B exit")


with ContextA():
    with ContextB():
        print("Inside")


# Output:
# A enter
# B enter
# Inside
# B exit
# A exit`
                },

                {
                    definition: `A context manager does not necessarily need to return a value from <b>__enter__().</b>

If __enter__() does not explicitly return anything, it returns <b>None.</b>`,

                    text1: `Therefore:

with MyContext() as value:

value will be <b>None</b> if __enter__() has no return statement.`,

                    code1: `# ---------- Ex : 26 : __enter__() returning None -------------

class Example:

    def __enter__(self):
        print("Enter")
        # No return

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exit")


with Example() as value:
    print(value)


# Output:
# Enter
# None
# Exit`
                },

                {
                    definition: `The context manager protocol is useful because <b>cleanup is guaranteed when control leaves the with block, including when an exception occurs.</b>`,

                    text1: `This makes context managers especially useful for operations where forgetting cleanup could cause problems.

Examples:

File
Database connection
Lock
Network connection
Transaction
Temporary state`,

                    code1: `# ---------- Ex : 27 : File resource -------------

with open("data.txt", "r") as file:
    data = file.read()


# ---------- Ex : 28 : Lock resource -------------

# Conceptual example

with lock:
    update_shared_data()


# The lock is automatically released
# when the block ends.


# ---------- Ex : 29 : Database transaction -------------

# Conceptual example

with database.transaction():
    create_order()
    update_inventory()

# Transaction can automatically
# commit or rollback depending on implementation.`
                },

                {
                    definition: `A context manager can be designed to <b>suppress only specific exceptions.</b>

__exit__() receives the exception type, value, and traceback, so it can inspect the exception before deciding whether to suppress it.`,

                    text1: `Returning <b>True</b> suppresses the exception.

Returning <b>False or None</b> allows the exception to propagate.`,

                    code1: `# ---------- Ex : 30 : Suppress only ValueError -------------

class IgnoreValueError:

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):

        if exc_type is ValueError:
            print("ValueError handled")
            return True

        return False


with IgnoreValueError():
    raise ValueError("Invalid value")


print("Continues")


# ValueError is suppressed.


# ---------- Ex : 31 : TypeError is not suppressed -------------

with IgnoreValueError():
    raise TypeError("Wrong type")

# TypeError propagates normally.`
                },

                {
                    definition: `Context managers are closely related to the <b>try/finally pattern.</b>

The main advantage is that resource-management logic can be encapsulated inside a <b>reusable object or function.</b>`,

                    text1: `Instead of repeating:

try:
    use resource
finally:
    cleanup

you can create a context manager once and use:

with resource:
    use resource

<b>The context manager separates resource-management logic from business logic.</b>`,

                    code1: `# ---------- Ex : 32 : Comparison -------------

# Without context manager

resource = acquire_resource()

try:
    use_resource(resource)
finally:
    release_resource(resource)


# With context manager

with managed_resource() as resource:
    use_resource(resource)


# The second version separates
# resource-management logic from
# business logic.`
                },

                {
                    definition: `Context managers can be used with files, locks, database connections, and many other objects that support the <b>context manager protocol.</b>`,

                    text1: `Common Python examples include:

open()
threading.Lock()
threading.RLock()
temporary resources from tempfile
database connection libraries
network-related resources
custom application resources`,

                    code1: `# ---------- Ex : 33 : File context manager -------------

with open("data.txt", "r") as file:
    print(file.read())


# ---------- Ex : 34 : Lock context manager -------------

import threading

lock = threading.Lock()

with lock:
    print("Critical section")


# The lock is automatically released
# after leaving the with block.`
                },

                {
                    definition: `The <b>contextlib</b> module also provides ready-made utilities for building and working with context managers.`,

                    text1: `Some useful contextlib features are:

<b>contextmanager</b>
    Create context managers using generator functions.

<b>closing</b>
    Ensure an object's close() method is called.

<b>suppress</b>
    Suppress specified exceptions.

<b>redirect_stdout</b>
    Temporarily redirect standard output.

<b>redirect_stderr</b>
    Temporarily redirect standard error.`,

                    code1: `# ---------- Ex : 35 : contextlib.suppress -------------

from contextlib import suppress


with suppress(FileNotFoundError):
    open("missing.txt", "r")


print("Program continues")


# FileNotFoundError is suppressed.


# ---------- Ex : 36 : contextlib.redirect_stdout -------------

from contextlib import redirect_stdout
import io


output = io.StringIO()

with redirect_stdout(output):
    print("Hello Python")

print(output.getvalue())`
                },

                {
                    definition: `A context manager can also be used to <b>measure execution time.</b>

The setup records the start time and the cleanup records the end time.`,

                    text1: `This is a practical example of using a context manager for temporary execution behavior rather than resource management.`,

                    code1: `# ---------- Ex : 37 : Timer context manager -------------

import time


class Timer:

    def __enter__(self):
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.end = time.perf_counter()
        self.elapsed = self.end - self.start
        print("Execution time:", self.elapsed)


with Timer():
    total = sum(range(1_000_000))`
                },

                {
                    definition: `The complete lifecycle of a class-based context manager is:

<b>__init__()</b>
    ↓
<b>__enter__()</b>
    ↓
<b>with block</b>
    ↓
<b>__exit__()</b>
    ↓
<b>Exception propagated or suppressed</b>`,

                    text1: `Important:

<b>__init__()</b>
    Creates/configures the object.

<b>__enter__()</b>
    Performs setup and returns the value for "as".

<b>with block</b>
    Contains the code that uses the resource.

<b>__exit__()</b>
    Performs cleanup and optionally handles exceptions.`,

                    code1: `# ---------- Ex : 38 : Complete lifecycle -------------

class Resource:

    def __init__(self, name):
        print("1. __init__")
        self.name = name

    def __enter__(self):
        print("2. __enter__")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("4. __exit__")


resource = Resource("Database")

with resource as r:
    print("3. with block")


# Output:
# 1. __init__
# 2. __enter__
# 3. with block
# 4. __exit__`
                },

                {
                    definition: `The key idea of a context manager is that it defines a <b>controlled lifecycle around a block of code.</b>`,

                    text1: `Think of it as:

<b>BEFORE</b>
    ↓
Setup

<b>DURING</b>
    ↓
Your code

<b>AFTER</b>
    ↓
Cleanup

The <b>"with" statement</b> connects these three stages.`,

                    code1: `# ---------- Ex : 39 : Mental model -------------

with resource as value:

    # BEFORE
    # __enter__()

    # DURING
    # Your code

# AFTER
# __exit__()


# This is the core idea
# behind Python context managers.`
                },

                {
                    definition: `A context manager is <b>not the same thing as a generator.</b>

A generator produces values using yield.

A context manager manages the lifecycle of a block of code.

The <b>@contextmanager decorator uses a generator internally</b> to create a context manager.`,

                    text1: `So:

<b>Generator</b>
    -> Produces values over time

<b>Context Manager</b>
    -> Manages setup and cleanup around a block

<b>@contextmanager</b>
    -> Allows a generator function to implement context-manager behavior.`,

                    code1: `# ---------- Ex : 40 : Generator vs context manager -------------

# Generator

def numbers():
    yield 1
    yield 2
    yield 3


# Context manager

from contextlib import contextmanager


@contextmanager
def my_context():

    print("Setup")

    yield

    print("Cleanup")


with my_context():
    print("Work")`
                },

                {
                    definition: `A context manager should generally be used when something needs <b>guaranteed setup and cleanup around a block of code.</b>`,

                    text1: `Common real-world use cases:

1. Opening and closing files
2. Acquiring and releasing locks
3. Opening and closing database connections
4. Managing database transactions
5. Temporary configuration changes
6. Measuring execution time
7. Redirecting output
8. Managing network resources
9. Creating and cleaning temporary resources
10. Implementing application-specific resource management`,

                    code1: `# ---------- Ex : 41 : Real-world pattern -------------

class DatabaseConnection:

    def __enter__(self):
        print("Connect to database")
        return self

    def execute(self, query):
        print("Executing:", query)

    def __exit__(self, exc_type, exc_value, traceback):
        print("Close database connection")


with DatabaseConnection() as db:

    db.execute("SELECT * FROM users")

    db.execute("SELECT * FROM orders")


# The connection is automatically closed
# after the with block.`
                },

                {
                    definition: `<b>The most important points to remember about Python context managers are:</b>

1. They manage resources or temporary states.
2. They are commonly used with the <b>"with" statement.</b>
3. Class-based context managers implement <b>__enter__() and __exit__().</b>
4. <b>__enter__()</b> performs setup.
5. The value returned by __enter__() is assigned to the <b>"as" variable.</b>
6. The with block contains the main operation.
7. <b>__exit__()</b> performs cleanup.
8. <b>__exit__() is called even when an exception occurs.</b>
9. Returning <b>True</b> from __exit__() suppresses the exception.
10. Returning <b>False or None</b> allows the exception to propagate.
11. <b>contextlib.contextmanager</b> can create context managers using generator functions.
12. <b>try/finally</b> is the fundamental cleanup mechanism behind the concept.`,

                    text1: `<b>Easy way to remember:</b>

<b>Context Manager = "Manage something before, during, and after a block of code."</b>

with
    ↓
<b>__enter__()</b>
    ↓
<b>WORK</b>
    ↓
<b>__exit__()</b>

<b>Interview definition:</b>

"Python context managers provide a protocol for managing resources using the with statement. A class-based context manager implements __enter__() for setup and __exit__() for cleanup. The __exit__() method is called even when an exception occurs, and its return value determines whether that exception is suppressed."`,

                    code1: `# ---------- Ex : 42 : Complete example -------------

from contextlib import contextmanager


@contextmanager
def database_connection():

    print("1. Opening connection")

    connection = "DB Connection"

    try:
        yield connection

    finally:
        print("3. Closing connection")


with database_connection() as db:

    print("2. Using:", db)


# Output:
# 1. Opening connection
# 2. Using: DB Connection
# 3. Closing connection`
                }
            ]
        },
        {
            id: 1,
            section: `Listes`,
            title: "Listes in Python",
            note: [
                {
                    text1: `In Python, the sequence of various data types is stored in a list. A list is a collection of different kinds of values or items. Since Python lists are mutable, we can change their elements after forming. The comma (,) and the square brackets [enclose the List's items] serve as separators.
                    
                    In Python, a list is a built-in data structure that allows you to store an ordered collection of items. Lists are versatile and can hold a mix of different data types, including numbers, strings, and even other lists. Here are some key features and operations related to lists in Python:

                    <b>Key Features</b>
    <b>Ordered</b>: The items in a list maintain their order. The first item has an index of 0, the second an index of 1, and so on.
    <b>Mutable</b>: Lists are mutable, meaning you can change, add, or remove items after the list has been created.
    <b>Dynamic</b>: You can change the size of a list dynamically as you add or remove elements.
    <b>Heterogeneous</b>: Lists can contain items of different data types (e.g., integers, strings, objects).

                    `,
                    code1: `//Creating a List
// You can create a list by enclosing elements in square brackets ([]):

# Creating a list
my_list = [1, 2, 3, 'four', 5.0]

// 1) Common List Operations
//     "Accessing Elements": You can access elements by their index:
print(my_list[0])  # Output: 1
print(my_list[3])  # Output: 'four'

// 2) "Slicing": You can get a subset of the list using slicing:
print(my_list[1:4])  # Output: [2, 3, 'four']

// 3) Adding Elements:
//     "append()": Adds an item to the end of the list.
my_list.append('new item')

// "insert()": Inserts an item at a specified index.
    my_list.insert(1, 'inserted item')  # Inserts at index 1

// 4) Removing Elements:
    // "remove()": Removes the first occurrence of a specified item.
my_list.remove(2)

// "pop()": Removes an item at a specified index and returns it. If no index is specified, it removes and returns the last item.
    last_item = my_list.pop()  # Removes the last item

// 5) "Finding Length": You can get the number of items in a list using len():
length = len(my_list)

// 6) "Looping Through a List": You can use a for loop to iterate through the items:
for item in my_list:
    print(item)

// 7) "List Comprehensions": A concise way to create lists based on existing lists:
squares = [x**2 for x in range(10)]  # Generates a list of squares

//===============
// # Creating a list
fruits = ['apple', 'banana', 'cherry']

// # Accessing elements
print(fruits[1])  # Output: banana

// # Adding elements
fruits.append('orange')
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']

// # Removing elements
fruits.remove('banana')
print(fruits)  # Output: ['apple', 'cherry', 'orange']

// # Looping through the list
for fruit in fruits:
    print(fruit)

`
                },
                {
                    text1: `
                    
                    <div class='table-res'>
                    <table border=1 >
<tbody><tr>
<th>Method</th>
<th>Description</th>
</tr>
<tr><td>append()</td><td>Adds an element at 
  the end of the list</td></tr>
<tr><td>clear()</td><td>Removes all the 
  elements from the list</td></tr>
<tr><td>copy()</td><td>Returns a copy of the 
  list</td></tr>
<tr><td>count()</td><td>Returns the number of 
  elements with the specified value</td></tr>
<tr><td>extend()</td><td>Add the elements of a 
  list (or any iterable), to the end of the current list</td></tr>
<tr><td>index()</td><td>Returns the index of 
  the first element with the specified value</td></tr>
<tr><td>insert()</td><td>Adds an element at 
  the specified position</td></tr>
<tr><td>pop()</td><td>Removes the element at the 
  specified position</td></tr>
<tr><td>remove()</td><td>Removes the first 
  item with the specified value</td></tr>
<tr><td>reverse()</td><td>Reverses the order 
  of the list</td></tr>
<tr><td>sort()</td><td>Sorts the list</td></tr>
</tbody></table>
</div>
`,
                    code1: ``
                },
                {
                    text1: `The list data type has some more methods. Here are all of the methods of list objects:

list.<b>append</b>(x)
    Add an item to the end of the list. Equivalent to a[len(a):] = [x].
    The .append() <b>method modifies the list in-place</b> and <b>returns</b> None. - <b>Ex : 2 </b>

list.<b>extend</b>(iterable)
    Extend the list by appending all the items from the iterable. Equivalent to a[len(a):] = iterable.
    We can add list items using the extend() method by passing another iterable containing the elements we want to add, like my_list.extend(iterable), which appends each element from the iterable to the end of my_list.

list.<b>insert</b>(i, x)
    Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).

list.<b>remove</b>(x)
    Remove the first item from the list whose value is equal to x. It raises a ValueError if there is no such item.

list.<b>pop</b>([i])
    Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. It raises an IndexError if the list is empty or the index is outside the list range.

list.<b>clear</b>()
    Remove all items from the list. Equivalent to del a[:].

list.<b>index</b>(x[, start[, end]])
    Return zero-based index in the list of the first item whose value is equal to x. Raises a ValueError if there is no such item.

    The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the start argument.

list.<b>count</b>(x) - <b> Ex : 3 </b>
    Return the number of times x appears in the list.
    list.count(x) is a built-in method in Python that <b>returns the number of times the specified element x appears in the list.</b>
    <b>📚 Theoretical Explanation</b>:
    -> It iterates through the entire list.
    -> Compares each element with the given value x using == equality.
    -> Increments a counter each time it finds a match.
    -> Finally, returns the total count of matches found.

list.<b>sort</b>(*, key=None, reverse=False)
    Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).

list.<b>reverse</b>()
    Reverse the elements of the list in place.

list.<b>copy</b>()
    Return a shallow copy of the list. Equivalent to a[:].
`,
                    code1: `//An example that uses most of the list methods:
>>>

fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
fruits.count('apple')
// 2

fruits.count('tangerine')
// 0

fruits.index('banana')
// 3

fruits.index('banana', 4) // # Find next banana starting at position 4
// 6

fruits.reverse()
fruits
// ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']

fruits.append('grape')
fruits
// ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']

fruits.sort()
fruits
// ['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']

fruits.pop()
//'pear'

//----------
// extend()
// # Original list
list1 = [1, 2, 3]
// # Another list to extend with
another_list = [4, 5, 6]

list1.extend(another_list)
print("Extended list:", list1)
//Output:
// Extended list: [1, 2, 3, 4, 5, 6]

// ----------  The .append() method modifies the list in-place and returns None.  -------------
// ----------- Ex : 2 ---------
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
nums = [1, 2, 3]
newList = vowels.append(nums)
print(newList)
// Output : None
// ---------- Correct way is ---------
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
nums = [1, 2, 3]
vowels.append(nums)
print(vowels)
Output: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', [1, 2, 3]]

// ----------- Ex : 3 ----------
data = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 1, "name": "Alice"},
]
target = {"id": 1, "name": "Alice"}
count = data.count(target)
print("Count:", count)

// ---- ❌ Will Not Work for Partial Match: -----
data.count({"id": 1})  # ❌ Doesn't count partial match
// You must compare full dictionaries for count() to work.
// ----- For Partial Match (Alternative): -----
// If you want to count based on part of the dictionary (like only id == 1), use this:
count = sum(1 for d in data if d["id"] == 1)
`
                },
                {
                    text1: `<b>Using Lists as Stacks</b>
                    The list methods make it very easy to use a list as a stack, where the last element added is the first element retrieved (“last-in, first-out”). To add an item to the top of the stack, use append(). To retrieve an item from the top of the stack, use pop() without an explicit index. For example:`,
                    code1: `stack = [3, 4, 5]
stack.append(6)
stack.append(7)
stack
// [3, 4, 5, 6, 7]
stack.pop()
// 7
stack
// [3, 4, 5, 6]
stack.pop()
// 6
stack.pop()
// 5
stack
//[3, 4]`
                },
            ]
        },
        {
            id: 1,
            title: "Change List Items",
            note: [
                {
                    text1: `<b>Change List Items</b>
List is a mutable data type in Python. It means, the contents of list can be modified in place, after the object is stored in the memory. You can assign a new value at a given index position in the list

<b>Change Consecutive List Items</b>
You can replace more consecutive items in a list with another sublist.

<b>Change a Range of List Items(Changing Multiple Items)</b>
If the source sublist has more items than the slice to be replaced, the extra items in the source will be inserted. Take a look at the following code
You can also change multiple items using slicing:
`,
                    code1: `// Syntex:
                    list1[i] = newvalue
                    //------------ Ex : 1 ------------
// Change List Items
colors = ['Red', 'Black', 'Green']
print('Original List:', colors)

// # changing the third item to 'Blue'
colors[2] = 'Blue'

print('Updated List:', colors)

//------------ Ex : 2 ------------
// In the following code, we change the value at index 2 of the given list.
list3 = [1, 2, 3, 4, 5]
print ("Original list ", list3)
list3[2] = 10
print ("List after changing value at index 2: ", list3)
// output -
// Original list [1, 2, 3, 4, 5]
// List after changing value at index 2: [1, 2, 10, 4, 5]

// In the following code, items at index 1 and 2 are replaced by items in another sublist.
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['Y', 'Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)

//  output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'Y', 'Z', 'd']

// Change a Range of List Items(Changing Multiple Items)
// # Example 1 list
my_list = [10, 20, 30, 40]
// # Change the items at index 1 and 2
my_list[1:3] = [25, 35]
print(my_list)  # Output: [10, 25, 35, 40]
// Output: [10, 25, 35, 40]

//------------ Ex : 3 ------------
// # Example 2 list
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['X','Y', 'Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)
// output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'X', 'Y', 'Z', 'd']


//------------ Ex : 4 ------------
// # Example 3 list
// If the sublist with which a slice of original list is to be replaced, has lesser items, the items with match will be replaced and rest of the items in original list will be removed.

// In the following code, we try to replace "b" and "c" with "Z" (one less item than items to be replaced). It results in Z replacing b and c removed.
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)

// output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'Z', 'd']

//------------ Ex : 5 ------------
// Changing Items with a Loop
// # Example 4 list
my_list = [10, 20, 30, 40]

// # Change items that are greater than 25
for i in range(len(my_list)):
    if my_list[i] > 25:
        my_list[i] = my_list[i] * 2

print(my_list)  # Output: [10, 20, 60, 80]
`
                }
            ]
        },
        {
            id: 1,
            title: "Remove List Items",
            note: [
                {
                    text1: `<b>Remove List Item Using remove() Method</b>
                    We can remove list items using the remove() method by specifying the value we want to remove within the parentheses, like <b>my_list.remove(value)</b>, which deletes the first occurrence of value from my_list.
                    This method removes the first occurrence of a specified value.

                    <b>Remove List Item Using pop() Method</b>
                    We can remove list items using the pop() method by calling it without any arguments my_list.pop(), which removes and returns the last item from my_list, or by providing the index of the item we want to remove my_list.pop(index), which removes and returns the item at that index.
                    This method removes an item at a specified index and returns it. If no index is specified, it removes and returns the last item

                    <b>Remove List Item Using clear() Method</b>
                    We can remove all list items using the clear() method by calling it on the list object like my_list.clear(), which empties my_list, leaving it with no elements.
                    This method removes all items from the list.

                    <b>Remove List Item Using del Keyword</b>
                    We can remove list items using the del keyword by specifying the index or slice of the items we want to delete, like <b>del my_list[index]</b> to delete a single item or del <b>my_list[start:stop]</b> to delete a range of items.
                    The <b>del</b> statement can be used to remove an item at a specific index or to delete the entire list.

                    <b>Using List Comprehension</b>
                    we are deleting a series of consecutive items from a list with the slicing
                    `,
                    code1: `//Using remove() Method
                    list1 = ["Rohan", "Physics", 21, 69.75]
print ("Original list: ", list1)

list1.remove("Physics")
print ("List after removing: ", list1)
// output -
// Original list: ['Rohan', 'Physics', 21, 69.75]
// List after removing: ['Rohan', 21, 69.75]

//-------------
// Remove List Item Using pop() Method
list2 = [25.50, True, -55, 45]
print ("Original list: ", list2)
list2.pop(2)
print ("List after popping: ", list2)
//Output:
// Original list:  [25.5, True, -55, 45]
// List after popping:  [25.5, True, 45]

//-------------
// Remove List Item Using clear() Method
my_list = [1, 2, 3, 4, 5]

# Clearing the list
my_list.clear()
print("Cleared list:", my_list)
// Output : Cleared list: []

//------------
// Remove List Item Using del Keyword
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
del list1[2]
print ("List after deleting: ", list1)
//Output : 
// Original list: ['a', 'b', 'c', 'd']
// List after deleting: ['a', 'b', 'd']

//-----------
// Using List Comprehension
// # Example list
my_list = [10, 20, 30, 20, 40]
// # Remove all occurrences of 20
my_list = [x for x in my_list if x != 20]
print(my_list)  # Output: [10, 30, 40]
//Output : [10, 30, 40]
//----------
list2 = [25.50, True, -55, 15]
print ("List before deleting: ", list2)
del list2[0:2]
print ("List after deleting: ", list2)
//Output:
// List before deleting:  [25.5, True, -55, 15]
// List after deleting:  [-55, 15]
`
                }
            ]
        },
        {
            id: 1,
            title: "Loop Lists",
            note: [
                {
                    text1: `Loop Through List Items with For Loop
                    A for loop in Python is used to iterate over a sequence (like a list, tuple, dictionary, string, or range) or any other iterable object. It allows you to execute a block of code repeatedly for each item in the sequence.`,
                    code1: `for item in list:
//    # Code block to execute

//----------
   //we are using a for loop to iterate through each element in the list "lst"
   lst = [25, 12, 10, -21, 10, 100]
for num in lst:
   print (num, end = ' ')
   //Output:
//    25 12 10 -21 10 100

//------------------
// Loop Through List Items with While Loop
my_list = [1, 2, 3, 4, 5]
index = 0

while index < len(my_list):
   print(my_list[index])
   index += 1
   `
                }
            ]
        },
        {
            id: 1,
            title: "List Comprehension",
            note: [
                {
                    text1: `List comprehension offers a concise way to create a new list based on the values of an existing list.
Suppose we have a list of numbers and we desire to create a new list containing the double value of each element in the list.

Syntax: newList = [ expression(element) <b>for</b> element <b>in</b> oldList <b>if</b> condition ] 

<b>Parameter</b>:
<b>expression</b>: Represents the operation you want to execute on every item within the iterable.
<b>element</b>: The term “variable” refers to each value taken from the iterable.
<b>iterable</b>: specify the sequence of elements you want to iterate through.(e.g., a list, tuple, or string).
<b>condition</b>: (Optional) A filter helps decide whether or not an element should be added to the new list.

<b>Return</b>:The return value of a list comprehension is a new list containing the modified elements that satisfy the given criteria.
Python List comprehension provides a much more short syntax for creating a new list based on the values of an existing list.

<b>for Loop vs. List Comprehension</b>
List comprehension makes the code cleaner and more concise than <b>for</b> loop.
Let's write a program to print the square of each list element using both for loop and <b>list</b> comprehension.

<b>Conditionals in List Comprehension</b>
List comprehensions can utilize conditional statements like <b>if…else</b> to filter existing lists.
Let's see an example of an <b>if</b> statement with list comprehension.
`,
                    code1: `//Syntax:
                    [expression for item in list if condition == True]
                    // for every "item" in "list", execute the "expression" "if" the "condition" is "True".
                    // The "if" statement in list comprehension is optional.

                    numbers = [1, 2, 3, 4]
// # list comprehension to create new list
doubled_numbers = [num * 2 for num in numbers]

print(doubled_numbers)
// Output:
[2, 4, 6, 8]

//-----------
// Here is an example of using list comprehension to find the square of the number in
numbers = [1, 2, 3, 4, 5] 
squared = [x ** 2 for x in numbers] 
print(squared)

// Output:
[1, 4, 9, 16, 25]

//---------
// ********** for Loop vs. List Comprehension *********
numbers = [1, 2, 3, 4, 5]
square_numbers = []
// # for loop to square each elements
for num in numbers:
    square_numbers.append(num * num)
print(square_numbers)
// # Output: [1, 4, 9, 16, 25]

//List Comprehension
numbers = [1, 2, 3, 4, 5]
// # create a new list using list comprehension
square_numbers = [num * num for num in numbers]
print(square_numbers)
// # Output: [1, 4, 9, 16, 25]


//-------------
// *********** Conditionals in List Comprehension **********
// # filtering even numbers from a list
even_numbers = [num for num in range(1, 10) if num % 2 == 0 ]
print(even_numbers)

// # Output: [2, 4, 6, 8]

// Here, list comprehension checks if the number from "range(1, 10)" is even or odd. If even, it appends the number in the list.
// Note: The "range()" function generates a sequence of numbers. To learn more, visit Python range().

//------------------
// *********** List Comprehension with String **********
// We can also use list comprehension with iterables other than lists.

word = "Python"
vowels = "aeiou"
// # find vowel in the string "Python"
result = [char for char in word if char in vowels]
print(result)

// # Output: ['o']
`,
                    img: `../assets/images/python/list-comprehension.png`
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Tuples`,
            title: "Tuples in Python",
            note: [
                {
                    text1: `<b>What is a Tuple?</b>
                    A tuple is an ordered collection of values in Python. Tuples are similar to lists, but they are <b>immutable</b>, which means their items cannot be changed after the tuple is created.

                    <b>Key features</b>
                    -> Ordered: Items keep their position and can be accessed by index.
                    -> Immutable: Items cannot be added, removed, or replaced.
                    -> Heterogeneous: A tuple can contain different data types.
                    -> Allows duplicates: The same value can appear more than once.
                    -> Iterable: You can loop through its items.

                    <b>Creating tuples</b>
                    Tuples are usually written with parentheses, but the comma is what creates a tuple. An empty tuple is written as <b>()</b>. A one-item tuple needs a trailing comma: <b>(10,)</b>.

                    <b>When should you use a tuple?</b>
                    Use a tuple for a fixed collection of related values, such as coordinates, database records, or function results. Since tuples cannot be changed, they are useful for protecting data from accidental modification. A tuple containing only hashable values can also be used as a dictionary key or as a set item.

                    <b>Tuple methods</b>
                    Tuples have only two common methods: <b>count()</b>, which counts matching values, and <b>index()</b>, which returns the position of the first matching value. Other operations, such as sorting or appending, require creating a new object or converting the tuple to a list.

                     <a href="https://github.com/anand-developer01/python-programs/blob/main/tuple.py" target="_blank">tuple examples</a>
                    `,
                    code1: `// ------------ Ex : 1 - Creating tuples ------------
                    empty_tuple = ()
numbers = (10, 20, 30)
mixed_tuple = (1, "Python", True, 3.14)

print(numbers)
print(type(numbers))  # <class 'tuple'>

// A one-item tuple needs a comma.
one_item_tuple = (10,)
not_a_tuple = (10)
print(type(one_item_tuple))  # <class 'tuple'>
print(type(not_a_tuple))     # <class 'int'>


// ------------ Ex : 2 - Indexing and slicing ------------
colors = ("red", "green", "blue", "yellow")

print(colors[0])    # red
print(colors[-1])   # yellow
print(colors[1:3])  # ('green', 'blue')
print(colors[::-1]) # ('yellow', 'blue', 'green', 'red')


// ------------ Ex : 3 - Tuples are immutable ------------
point = (10, 20)

// point[0] = 100
// TypeError: 'tuple' object does not support item assignment

// Convert to a list when a change is required.
point_as_list = list(point)
point_as_list[0] = 100
point = tuple(point_as_list)
print(point)  # (100, 20)


// ------------ Ex : 4 - Tuple packing and unpacking ------------
// Packing: Python groups the values into a tuple.
user = "Anand", 36, "Developer"
print(user)  # ('Anand', 36, 'Developer')

// Unpacking: assign each item to a variable.
name, age, role = user
print(name)
print(age)
print(role)

// Extended unpacking with *
first, *middle, last = (1, 2, 3, 4, 5)
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5


// ------------ Ex : 5 - Looping and membership ------------
languages = ("Python", "JavaScript", "Java")

for language in languages:
    print(language)

print("Python" in languages)  # True
print("C++" not in languages) # True


// ------------ Ex : 6 - Tuple methods ------------
values = (10, 20, 10, 30, 10)

print(values.count(10))  # 3
print(values.index(30))  # 3
print(len(values))       # 5


// ------------ Ex : 7 - Nested tuples ------------
coordinates = ((0, 0), (10, 20), (30, 40))
print(coordinates[1])       # (10, 20)
print(coordinates[1][0])    # 10


// ------------ Ex : 8 - Returning multiple values ------------
def get_user():
    return "Anand", "anand@example.com"

user_name, email = get_user()
print(user_name)
print(email)


// ------------ Ex : 9 - Tuple as a dictionary key ------------
locations = {
    (17.3850, 78.4867): "Hyderabad",
    (12.9716, 77.5946): "Bengaluru"
}

print(locations[(17.3850, 78.4867)])  # Hyderabad


// ------------ Ex : 10 - Convert between list and tuple ------------
items = ["pen", "book", "bag"]
items_tuple = tuple(items)
items_list = list(items_tuple)

print(items_tuple)  # ('pen', 'book', 'bag')
print(items_list)   # ['pen', 'book', 'bag']`
                }
            ]
        },
        {
            id: 1,
            section: `Sets`,
            title: "Sets in Python",
            note: [
                {
                    text1: `<b>What is a Set?</b>
                    A set is an unordered collection of <b>unique</b> values in Python. Sets are useful when you need to remove duplicate values or perform mathematical operations such as union, intersection, and difference.

                    <b>Key features</b>
                    -> Unordered: Sets do not store items by index, so indexing and slicing are not supported.
                    -> Unique: Duplicate values are automatically removed.
                    -> Mutable: You can add or remove items after creating a set.
                    -> Iterable: You can loop through the values.
                    -> Elements must be hashable: Numbers, strings, and tuples can be set items, but lists and dictionaries cannot.

                    <b>Creating sets</b>
                    Use curly braces with values, such as <b>{1, 2, 3}</b>. An empty set must be created with <b>set()</b> because <b>{}</b> creates an empty dictionary. Use a comma-separated sequence inside <b>set()</b> to remove duplicates from a list or string.

                    <b>Set operations</b>
                    -> Union: all values from both sets.
                    -> Intersection: values common to both sets.
                    -> Difference: values in the first set but not the second.
                    -> Symmetric difference: values in either set, but not in both.

                    <b>When should you use a set?</b>
                    Use a set for membership checks, removing duplicate data, comparing groups, and finding common or different values. Sets are generally faster than lists for checking whether an item exists.

                    <a href="https://github.com/anand-developer01/python-programs/blob/main/set.py" target="_blank">set examples</a>
                    `,
                    code1: `// ------------ Ex : 1 - Creating sets ------------
                    numbers = {1, 2, 3, 4}
fruits = {"apple", "banana", "orange"}
mixed_set = {1, "Python", 3.14, True}

print(numbers)
print(type(numbers))  # <class 'set'>

// An empty set must use set().
empty_set = set()
empty_dictionary = {}
print(type(empty_set))        # <class 'set'>
print(type(empty_dictionary)) # <class 'dict'>


// ------------ Ex : 2 - Duplicate values are removed ------------
values = {1, 2, 2, 3, 3, 3, 4}
print(values)  # {1, 2, 3, 4}

names = ["Anand", "Ravi", "Anand", "Meena"]
unique_names = set(names)
print(unique_names)  # {'Anand', 'Ravi', 'Meena'}


// ------------ Ex : 3 - Adding items ------------
skills = {"Python", "JavaScript"}

skills.add("SQL")
skills.update(["React", "Docker"])
print(skills)


// ------------ Ex : 4 - Removing items ------------
colors = {"red", "green", "blue"}

colors.remove("green")   # Raises KeyError if the value is missing.
colors.discard("yellow") # Does not raise an error if the value is missing.
removed_color = colors.pop() # Removes and returns an arbitrary item.
print(colors)
print(removed_color)

colors.clear()
print(colors)  # set()


// ------------ Ex : 5 - Membership checks ------------
allowed_roles = {"admin", "editor", "viewer"}

print("admin" in allowed_roles)  # True
print("guest" in allowed_roles)  # False
print("guest" not in allowed_roles) # True


// ------------ Ex : 6 - Union ------------
frontend = {"HTML", "CSS", "JavaScript"}
backend = {"Python", "SQL", "Docker"}

all_skills = frontend | backend
print(all_skills)
print(frontend.union(backend))


// ------------ Ex : 7 - Intersection ------------
team_a = {"Python", "SQL", "Git"}
team_b = {"Python", "Docker", "Git"}

common_skills = team_a & team_b
print(common_skills)  # {'Python', 'Git'}
print(team_a.intersection(team_b))


// ------------ Ex : 8 - Difference ------------
only_in_team_a = team_a - team_b
only_in_team_b = team_b - team_a

print(only_in_team_a)  # {'SQL'}
print(only_in_team_b)  # {'Docker'}
print(team_a.difference(team_b))


// ------------ Ex : 9 - Symmetric difference ------------
different_skills = team_a ^ team_b
print(different_skills)  # {'SQL', 'Docker'}
print(team_a.symmetric_difference(team_b))


// ------------ Ex : 10 - Subset and superset ------------
small_set = {1, 2}
large_set = {1, 2, 3, 4}

print(small_set.issubset(large_set))   # True
print(large_set.issuperset(small_set)) # True
print(small_set <= large_set)          # True
print(large_set >= small_set)          # True


// ------------ Ex : 11 - Looping through a set ------------
languages = {"Python", "JavaScript", "Java"}

for language in languages:
    print(language)

// Set order is not guaranteed, so do not rely on the output order.
for language in sorted(languages):
    print(language)


// ------------ Ex : 12 - Set methods ------------
numbers = {1, 2, 3}

print(len(numbers))       # 3
print(numbers.copy())     # {1, 2, 3}
print(numbers.isdisjoint({4, 5})) # True


// ------------ Ex : 13 - Hashable and unhashable values ------------
valid_set = {(1, 2), "Python", 10}
print(valid_set)

// invalid_set = {[1, 2], "Python"}
// TypeError: unhashable type: 'list'


// ------------ Ex : 14 - Practical example: common users ------------
newsletter_users = {"anand", "ravi", "meena"}
event_users = {"ravi", "meena", "suresh"}

print(newsletter_users & event_users) # Users in both groups.
print(newsletter_users | event_users) # Users in either group.
print(event_users - newsletter_users) # New event users.


// ------------ Ex : 15 - Convert a set back to a list ------------
unique_numbers = {4, 1, 3, 2}
sorted_numbers = sorted(unique_numbers)
numbers_list = list(unique_numbers)

print(sorted_numbers) # [1, 2, 3, 4]
print(numbers_list)   # List order is not guaranteed.


// ------------ Ex : 16 - Set comprehension ------------
even_squares = {number * number for number in range(1, 6) if number % 2 == 0}
print(even_squares)  # {4, 16}`
                }
            ]
        },
        {
            id: 1,
            title: "Set comprehension",
            note: [
                {
                    text1: `Set comprehension is a concise way to create a set using a <b>for</b> loop, optionally with an <b>if</b> condition.
                    
                    <b>Systex</b>:
                    {expression for item in iterable}
                    With a condition:
                    {expression for item in iterable if condition}

                    The important difference is the <b>{}</b> syntax and the fact that the result is a <b>set</b>, so duplicate values are automatically removed.
                    `,
                    code1: `// ------------------ Without comprehension: ------------
                    numbers = [1, 2, 3, 4, 5]
                    result = set()
                    for num in numbers:
                        result.add(num * 2)
                    print(result)
                    // Output:
                    // {2, 4, 6, 8, 10}

                    // --------------- Using set comprehension: --------------
                    numbers = [1, 2, 3, 4, 5]
                    result = {num * 2 for num in numbers}
                    print(result)

                    // Output:
                    // {2, 4, 6, 8, 10}
                    // So:
                    {num * 2 for num in numbers}
                    // means:
                    // For every \`num\` in \`numbers\`, calculate \`num * 2\` and put the result into a set.

                    // -------------- 3. Duplicate Values ---------
// This is where set comprehension becomes particularly useful.

numbers = [1, 2, 2, 3, 3, 4, 5, 5]
result = {num for num in numbers}
print(result)
// Output:
// {1, 2, 3, 4, 5}

// Duplicates are automatically removed because a set cannot contain duplicate elements.
// You can simplify this even further:
result = set(numbers)
// But set comprehension becomes more useful when you transform or filter values.

// --------------  4. Set Comprehension with if -----------------

Example: get only even numbers.
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = {num for num in numbers if num % 2 == 0}
print(even_numbers)

// Output:
// {2, 4, 6}

// Here:
{num for num in numbers if num % 2 == 0}
// can be read as:
// Take num from numbers if num is even, and add it to the set.

// --------------  5. Transformation + Condition ----------------
// You can transform the value as well.
numbers = [1, 2, 3, 4, 5, 6]
result = {num * 10 for num in numbers if num % 2 == 0}
print(result)
// Output:
// {20, 40, 60}

// Break it down:
{num * 10 for num in numbers if num % 2 == 0}


// Part	Meaning
// num * 10	Expression/result
// for num in numbers	Iterate through numbers
// if num % 2 == 0	Keep only even numbers
// { ... }	Create a set

// -------- 6. Set Comprehension with Strings ------------
name = "programming"
letters = {char for char in name}
print(letters)

// Output could be:
// {'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n'}

// Notice that repeated characters such as m, g, and r appear only once.

// ---------- 7. Get Unique Even Numbers -----------------
numbers = [1, 2, 2, 3, 4, 4, 6, 6, 7, 8]
result = {num for num in numbers if num % 2 == 0}
print(result)

// Output:
// {2, 4, 6, 8}
// This is a very common interview-style example.

// ------------- 8. Set Comprehension vs List Comprehension -------------
// List comprehension
result = [x * 2 for x in numbers]
// Result:
// [2, 4, 4, 6, 8]

// Set comprehension
result = {x * 2 for x in numbers}
// Result:
// {2, 4, 6, 8}

// Main difference:
// [] → List comprehension
// {} → Set comprehension

// But remember:

{x for x in numbers}
is a set comprehension, whereas:
{x: x for x in numbers}
is a dictionary comprehension.

// ------------- 9. Nested for in Set Comprehension -------------------
// You can also use multiple for loops.
result = {x * y for x in [1, 2, 3] for y in [10, 20]}
print(result)
// Output:
// {10, 20, 30, 40, 60}

// Equivalent normal loops:
result = set()
for x in [1, 2, 3]:
    for y in [10, 20]:
        result.add(x * y)


// ------------- 10. Important Interview Point ----------------
// A set comprehension:
// Creates a set by applying an expression to each item of an iterable, optionally filtering items using a condition.

// General pattern:
{expression for item in iterable if condition}

// For example:
squares = {x * x for x in range(1, 6)}

// Output:
{1, 4, 9, 16, 25}

// --------- Easy way to remember ---------
// Think of it as:

SET
 ↓
{ expression
  for item in iterable
  if condition
}

// So the three comprehension types you've been learning are:
# List comprehension
[x * 2 for x in numbers]

# Set comprehension
{x * 2 for x in numbers}

# Dictionary comprehension
{x: x * 2 for x in numbers}
                    `
                }
            ]
        },
        {
            id: 1,
            section: `Dictionaries`,
            title: "Dictionaries",
            note: [
                {
                    text1: `Python dictionaries are a powerful built-in data type that allows you to store key-value pairs for efficient data retrieval and manipulation.
                    Dictionaries are Python's implementation of a data structure that is more generally known as an associative array. A dictionary consists of a collection of key-value pairs. Each key-value pair maps the key to its associated value.

You can define a dictionary by enclosing a comma-separated list of key-value pairs in curly braces ({}). A colon (:) separates each key from its associated value:

-> A dictionary in Python is a <b>mutable collection of key-value pairs</b> that allows for efficient data retrieval using unique keys.
-> Both dict() and {} can create dictionaries in Python. Use {} for <b>concise syntax</b> and dict() for <b>dynamic creation</b> from iterable objects.
-> <b>dict()</b> is a <b>class</b> used to create dictionaries. However, it's <b>commonly called a built-in function</b> in Python.
-> <b>.__dict__ is a special attribute</b> in Python that holds an object's <b>writable attributes</b> in a dictionary.
-> Python dict is implemented as a <b>hashmap</b>, which allows for <b>fast key lookups</b>.

Dictionaries are one of Python's most important and useful built-in data types. They provide a mutable collection of key-value pairs that lets you efficiently access and mutate values through their corresponding keys:

<b>Python's dictionaries have the following characteristics</b>:
<b>Mutable</b>: The dictionary values can be updated in place.
<b>Dynamic</b>: Dictionaries can grow and shrink as needed.
<b>Efficient</b>: They're implemented as hash tables, which allows for fast key lookup.
person["city"] = "Hyderabad" # Add new key-value
<b>Ordered</b>: Starting with Python 3.7, dictionaries keep their items in the same order they were inserted.
The keys of a dictionary have a couple of restrictions. They need to be:

<b>Hashable</b>: This means that you can't use unhashable objects like lists as dictionary keys.
<b>Unique</b>: This means that your dictionaries won't have duplicate keys.

<b>1. Keys must be unique</b>
d = {"a": 1, "b": 2, "a": 3}
print(d)  # {'a': 3, 'b': 2}
The last "a" overwrites the first.

<b>2. Values can be of any type</b>
person = {
    "name": "Anand",
    "age": 30,
    "skills": ["Python", "React"],
    "is_employed": True
}

<b>3. Accessing Values</b>
print(person["name"])      # Output: Anand
print(person.get("age"))   # Output: 30
print(person.get("city", "Unknown"))  # Default if key not found

<b>4. Adding or Updating Items</b>
person["city"] = "Hyderabad"         # Add new key-value
person["age"] = 31                   # Update existing

<b>5. Deleting Items</b>
del person["city"]        # Deletes key 'city'
person.pop("skills")      # Removes and returns the value of 'skills'

<b>6. Check key </b>
"name" in person	// Returns True

<b>Nested Dictionaries</b>
users = {
    "anand": {"age": 30, "role": "admin"},
    "ravi": {"age": 25, "role": "user"}
}

<b>dict.keys()</b>	Get all keys
<b>dict.values()</b>	Get all values
<b>dict.items()</b>	Get key-value pairs as tuples
<b>dict.get(k)</b>	Safe access to value (returns None if not found)
<b>dict.pop(k)</b>	Remove a key and return its value
<b>dict.update()</b>	Merge/overwrite with another dictionary
<b>dict.clear()</b>	Remove all items


<b>for ... in list</b>	Loop through list items
<b>for ... in dict.items()</b>	Loop through key-value pairs
<b>enumerate()</b>	Get index + item from a list
<b>zip()</b>	Combine two or more lists together
<b>range()</b>	Generate number sequences (looping)
`,
                    code1: `d = {
    key: value,
    key: value,
      .
      .
      .
    key: value
}
    

//---------- Ex :1 -----------`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "items() - Looping through both keys and values",
            note: [
                {
                    text1: `The .items() method is used on a dictionary to return a view object that contains all the key-value pairs as tuples.
                    
                    <b>.items()</b> returns a <b>dict_items</b> object, which is an iterable view (not a list).
                    <b>1. Looping through both keys and values</b>
for key, value in person.items():
    print(f"{key} => {value}")
    `,
                    code1: `// ----------- Ex : 1 ---------
                    person = {
    "name": "Anand",
    "age": 30,
    "city": "Hyderabad"
}
print(person.items())

// 🔁 Output:
// dict_items([('name', 'Anand'), ('age', 30), ('city', 'Hyderabad')])

// ----------- Ex : 2 ---------
// Looping through both keys and values
person = {
    "name": "Anand",
    "age": 30,
    "city": "Hyderabad"
}
for key, value in person.items():
    print(f"{key} => {value}")

// ------------ Ex : 3 ---------
// Sorting by keys or values
sorted_by_key = dict(sorted(person.items()))
# {'age': 30, 'city': 'Hyderabad', 'name': 'Anand'}

// ------------ Ex : 4 ---------
marks = {
    "Math": 85,
    "Science": 92,
    "English": 78
}

# Total and average
total = sum(marks.values())
avg = total / len(marks)

// ------------ Ex : 5 ---------
invoice = {
    "invoice_no": "INV1001",
    "date": "2025-06-12",
    "items": [
        {"name": "Pen", "price": 10, "qty": 2},
        {"name": "Notebook", "price": 50, "qty": 1}
    ]
}

# Calculate total
total = sum(item["price"] * item["qty"] for item in invoice["items"])
print(total)


// ------------ Ex : 6 ---------
// API Response (Weather App)
weather = {
    "city": "Hyderabad",
    "temperature": 34,
    "unit": "Celsius",
    "condition": "Sunny"
}

print(f"{weather['city']} - {weather['temperature']}°{weather['unit']}")


// ------------ Ex : 6 ---------
// Analytics / Counters
words = ["apple", "banana", "apple", "orange", "banana", "apple"]

freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

# freq => {'apple': 3, 'banana': 2, 'orange': 1}


// ------------ Ex : 7 ---------
// Loop through keys:
person = {"name": "Anand", "age": 30, "city": "Hyderabad"}

for key in person:
    print(key)  # name, age, city

    // ------------ Ex : 8 ---------
// Loop through values:
for value in person.values():
    print(value)

// ------------ Ex : 9 ---------
// 🔸 Loop through key-value pairs:
for key, value in person.items():
    print(f"{key} = {value}")
`
                },
            ]
        },
        {
            id: 1,
            title: "List of Dictionaries",
            note: [
                {
                    text1: `A list of dictionaries is exactly what it sounds like:
    A <b>list</b> ([]) that contains multiple <b>dictionary</b> ({}) entries.
    Each dictionary represents a record or object with key: value pairs.`,
                    code1: `students = [
    {"name": "Anand", "age": 20, "marks": 85},
    {"name": "Ravi", "age": 21, "marks": 90},
    {"name": "Sneha", "age": 19, "marks": 95}
]

for student in students:
    print(student["name"], student["marks"])

//------------ Ex : 2 ---------
// Filter students above 90 marks
top_students = [s for s in students if s["marks"] > 90]
print(top_students)

//------------ Ex : 3 ---------
// Extract specific fields
names = [s["name"] for s in students]
print(names)  # ['Anand', 'Ravi', 'Sneha']
    `
                }
            ]
        },
        {
            id: 1,
            title: "enumerate()",
            note: [
                {
                    text1: `Returns both index and value while looping a list.`,
                    code1: `//------------ Ex : 1 ---------
                    colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(index, color)

// Output:
// 0 red
// 1 green
// 2 blue
`
                }
            ]
        },
        {
            id: 1,
            title: "zip()",
            note: [
                {
                    text1: `Combines multiple sequences together.`,
                    code1: `//------------ Ex : 1 ---------
                    names = ["Anand", "Ravi", "Meena"]
scores = [90, 85, 88]

for name, score in zip(names, scores):
    print(f"{name} scored {score}")

// Output:
// Anand scored 90
// Ravi scored 85
// Meena scored 88
`
                }
            ]
        },
        {
            id: 1,
            title: "range()",
            note: [
                {
                    text1: `Used to generate a sequence of numbers:
                    range(start, stop, step):
                    `,
                    code1: `//------------ Ex : 1 ---------
                    for i in range(5):
    print(i)  # 0 to 4
range(start, stop, step):
for i in range(1, 10, 2):
    print(i)  # 1, 3, 5, 7, 9`
                }
            ]
        },
        {
            id: 1,
            section: `Array`,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `File Handling`,
            title: "File Handling",
            note: [
                {
                    text1: `In Python, the built-in function open() is used to open a file. It returns a file object, which has methods and attributes to read, write, and manipulate the file.

    Syntax: <b>file_object = open(file_name, mode) </b>
    
    <b>'r':-	Read (Default)</b> : Opens a file for reading. Raises an error if the file does not exist.
<b>'w' :-	Write</b> : Opens a file for writing. Creates a new file if it doesn't exist or truncates (overwrites) an existing file.
<b>'a' :-	Append</b> : Opens a file for appending. Appends data at the end of the file without overwriting existing content. Creates a file if it doesn't exist.
<b>'x' :-	Exclusive Creation</b> : Creates a new file. Fails if the file already exists.
<b>'b' :-	Binary Mode</b> : Used for non-text files like images or executables (e.g., 'rb', 'wb').
<b>'+' :-	Open for Updating</b> : Reading and writing (e.g., 'r+').

<b>Best Practice</b>: Always close files after use to free up system resources, or better yet, use the with statement (context manager) which handles closing automatically.
Python automatically closes the file.
<b>2. Using the with Statement (Context Manager)</b>
The with statement ensures that the file is properly closed as soon as the block of code inside it finishes executing, even if exceptions occur.

<b>3. Reading Files</b>
You can read the contents of a file using different methods depending on your needs:
    <b>read(size)</b>: Reads the entire file (or up to size bytes).
    <b>readline()</b>: Reads a single line from the file.
    <b>readlines()</b>: Reads all lines and returns them as a list of strings.
<b>4. Writing and Appending Data</b>
    <b>write(string)</b>: Writes a string to the file.
    <b>writelines(list_of_strings)</b>: Writes a list of strings to the file.
    <b>file.close()</b>       # Close the file

<b>5. Working with File Paths (pathlib)</b>
For robust file and path manipulation across different operating systems (Windows, macOS, Linux), Python provides the modern pathlib module.
    pathlib is Python's modern way to work with files and directories. It is usually preferred over os.path because the code is cleaner and more object-oriented.
    <b>Import Path</b>
    <b>from pathlib import Path</b>
    <b>Create a path</b>:
    file_path = Path("data/sample.txt")
    print(file_path)
    Output:
    data/sample.txt

    <b>Path.cwd()</b> : Returns the current working directory.
<b>Path("file.txt")</b> : Creates a Path object representing the specified file or directory path.
<b>path.exists()</b> : Checks whether the specified file or directory exists.
<b>path.is_file()</b> : Checks whether the path points to a file.
<b>path.is_dir()</b> : Checks whether the path points to a directory.
<b>path.mkdir()</b> : Creates a new directory at the specified path.
<b>path.read_text()</b> : Reads the entire contents of a text file and returns it as a string.
<b>path.write_text()</b> : Writes a string to a text file. If the file already exists, its contents are replaced.
<b>path.unlink()</b> : Deletes the file represented by the path.
<b>path.iterdir()</b> : Returns an iterator containing the files and directories inside the specified directory.
<b>path.glob("*.txt")</b> : Finds files and directories matching a pattern within the specified directory.
<b>path.rglob("*.txt")</b> : Finds files and directories matching a pattern recursively, including subdirectories.
<b>path.name</b> : Returns the name of the file or directory, including its extension.
<b>path.stem</b> : Returns the file or directory name without its extension.
<b>path.suffix</b> : Returns the file extension, including the dot, such as \`.txt\` or \`.pdf\`.
<b>path.parent</b> : Returns the parent directory of the current path.
`,
                    code1: `// ---------  # Writing to a file using 'with' --------
                with open("example.txt", "w") as file:
                    file.write("Hello, World!\n")
                    file.write("Python file handling is easy.")
                    
                    // --------- Write ---------
with open("sample.txt", "w") as file:
    file.write("Hello Python")

// --------- Append ---------
with open("sample.txt", "a") as file:
    file.write("\nWelcome to AI")

// --------- 4. Read a File ---------
Read entire file
with open("sample.txt", "r") as file:
    print(file.read())

// --------- Read one line ---------
with open("sample.txt", "r") as file:
    print(file.readline())

// --------- Read all lines ---------
with open("sample.txt", "r") as file:
    print(file.readlines())
// Output:
// ['Hello\\n', 'Python\\n', 'AI']
 
// --------- 5. Read Line by Line ---------
with open("sample.txt", "r") as file:
    for line in file:
        print(line.strip())

// --------- 6. Check if File Exists ---------
import os
if os.path.exists("sample.txt"):
    print("File exists")
else:
    print("File not found")

// --------- 7. Delete a File ---------
import os
if os.path.exists("sample.txt"):
    os.remove("sample.txt")

// --------- 8. Working with Binary Files ---------
with open("image.jpg", "rb") as file:
    data = file.read()

// --------- 9. Exception Handling ---------
try:
    with open("sample.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("File not found")

// ----------- Working with File Paths (pathlib) ---------
from pathlib import Path

// # Define a path
file_path = Path("example.txt")

// # Check if file exists
if file_path.exists():
    print("File found!")
    content = file_path.read_text()
    print(content)
else:
    print("File does not exist.")






    // 1. Import Path 
from pathlib import Path
// Create a path:
file_path = Path("data/sample.txt")
print(file_path)
// Output:
// data/sample.txt


// 2. Current Directory
from pathlib import Path
current = Path.cwd()
print(current)
// cwd() = Current Working Directory
// For example:
// /home/anand/python-project

// 3. Create a Directory
from pathlib import Path
folder = Path("data")
folder.mkdir()

// This creates:
python-project/
└── data/


// Create parent directories
folder = Path("data/documents/pdf")
folder.mkdir(parents=True)
// parents=True creates all missing directories.


// 4. Check Whether Something Exists
path = Path("data/sample.txt")
print(path.exists())
// Returns:
// True
// or
// False

// You can also check specifically:
path.is_file()
path.is_dir()


// 5. Create and Write a File
// Instead of:
with open("sample.txt", "w") as file:
    file.write("Hello Python")

// You can use:
from pathlib import Path
file = Path("sample.txt")
file.write_text("Hello Python")
// Very convenient.



// 6. Read a File
from pathlib import Path
file = Path("sample.txt")
content = file.read_text()
print(content)


// 7. Append to a File
// Path doesn't have a direct append_text() method.
// You can do:
file = Path("sample.txt")
with file.open("a") as f:
    f.write("\\nHello AI")


// 8. Delete a File
file = Path("sample.txt")
file.unlink()
unlink() = delete a file.



// 9. List Files in a Directory
// Suppose:
project/
├── data/
│   ├── users.json
│   ├── users.csv
│   └── notes.txt

// You can do:
from pathlib import Path
data = Path("data")
for file in data.iterdir():
    print(file)
// Output:
// data/users.json
// data/users.csv
// data/notes.txt


// 10. Find Specific Files
All .txt files
for file in Path("data").glob("*.txt"):
    print(file)
// All JSON files
for file in Path("data").glob("*.json"):
    print(file)
// Search recursively

// If you have:

data/
├── file1.txt
├── documents/
│   └── file2.txt
└── backup/
    └── file3.txt

// Use:
for file in Path("data").rglob("*.txt"):
    print(file)

// Output:
data/file1.txt
data/documents/file2.txt
data/backup/file3.txt
// rglob() = recursive glob.



// 11. File Name and Extension
file = Path("documents/report.pdf")

print(file.name)
print(file.stem)
print(file.suffix)

// Output:
// report.pdf
// report
// .pdf

// So:
name → report.pdf
stem → report
suffix → .pdf



// 12. Parent Directory
file = Path("documents/report.pdf")
print(file.parent)
// Output:
// documents


// 13. Joining Paths ⭐
// This is one of the most useful features.
// Instead of:
path = "data" + "/" + "users" + "/" + "users.json"

// Use:
from pathlib import Path
path = Path("data") / "users" / "users.json"
print(path)

// Output:
// data/users/users.json
// The / operator joins paths.

// 14. Very Important Example
Imagine your AI project has:
ai-project/
│
├── data/
│   ├── documents/
│   │   ├── book.pdf
│   │   └── notes.txt
│   │
│   └── users.json
│
└── main.py
// You can manage everything using:

from pathlib import Path

BASE_DIR = Path("data")

documents = BASE_DIR / "documents"

print(documents.exists())

for file in documents.iterdir():
    print(file.name)

// Output:
// True
// book.pdf
// notes.txt


// 15. pathlib vs os.path

// Old style:
import os

path = os.path.join("data", "documents", "file.txt")

if os.path.exists(path):
    print("Exists")

Modern style:

from pathlib import Path

path = Path("data") / "documents" / "file.txt"

if path.exists():
    print("Exists")

// I recommend learning the pathlib approach.






    // ------------ Working with File Paths (pathlib) ---------
    from pathlib import Path

path = Path("data/example.txt")

print(path.name)      # example.txt
print(path.stem)      # example
print(path.suffix)    # .txt
print(path.parent)    # data
print(path.exists())  # True/False
// ------------ Handling Exceptions -----------
// When dealing with files, errors can occur (e.g., file not found, permission denied). Use try-except blocks to handle them gracefully.
try:
    with open("non_existent_file.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Error: The file was not found.")
except IOError:
    print("Error: An I/O error occurred.")
    `
                }
            ]
        },
        {
            id: 1,
            title: "Text vs binary files",
            note: [
                {
                    definition: `<b>Text files</b> store data as a sequence of characters, while <b>binary files</b> store data as a sequence of raw bytes.

<b>Text files</b> are intended to be interpreted using a character encoding such as UTF-8.
<b>Binary files</b> contain raw byte data and are not automatically interpreted as characters.
Examples of text files:
- .txt
- .csv
- .json
- .xml
- .html
- .py
- .log

Examples of binary files:
- .jpg / .jpeg
- .png
- .gif
- .pdf
- .mp3
- .mp4
- .zip
- .exe

<b>Key idea:</b>
Text = characters → encoded/decoded using an encoding such as UTF-8.
Binary = bytes → handled directly as bytes.`,

                    text1: `<b>1. Text files use character encoding</b>
When Python reads a text file, it converts the bytes stored on disk into Python <b>str</b> objects using an encoding.
For example:
UTF-8 bytes → Python str
When writing:
Python str → UTF-8 bytes → file
The most commonly used encoding is <b>UTF-8</b>.

<b>2. Binary files use bytes</b>
When Python opens a binary file, it does not decode the contents into characters.
Instead, Python returns a <b>bytes</b> object.
Text mode:
<b>str</b> ↔ file
Binary mode:
<b>bytes</b> ↔ file

<b>3. Main difference</b>
Text files are suitable when the data represents readable characters.
Binary files are suitable when the data represents raw binary information such as images, audio, video, PDFs, compressed files, or executable files.

<b>4. File modes</b>
Text mode:
"r"   → read text
"w"   → write text
"a"   → append text
"r+"  → read and write text
"w+"  → write and read text
"a+"  → append and read text

Binary mode:
"rb"  → read binary
"wb"  → write binary
"ab"  → append binary
"rb+" → read and write binary
"wb+" → write and read binary
"ab+" → append and read binary

<b>Important:</b>
The "b" in the mode means <b>binary</b>.
If "b" is not specified, Python normally uses <b>text mode</b>.

<b>5. Text mode returns str</b>
When a text file is opened in text mode, methods such as read() return a <b>str</b>.

<b>6. Binary mode returns bytes</b>
When a file is opened in binary mode, methods such as read() return a <b>bytes</b> object.

<b>7. Encoding matters in text files</b>
You can explicitly specify the encoding:
open("file.txt", "r", encoding="utf-8")
This is recommended because it makes the expected encoding explicit.

<b>8. Binary files do not use text encoding</b>
You normally should not use encoding when opening a file in binary mode:
open("image.jpg", "rb")
Binary data should be handled as bytes.

<b>9. Why not read an image as text?</b>
An image contains arbitrary byte values. Trying to interpret those bytes as UTF-8 text can produce a UnicodeDecodeError because the byte sequence may not represent valid UTF-8 characters.

<b>10. Why not write text directly to a binary file?</b>
Binary mode expects a <b>bytes-like object</b>, not a Python str.
You need to encode text first:
text.encode("utf-8")

<b>11. Converting between text and bytes</b>
str → bytes:
text.encode("utf-8")
bytes → str:
data.decode("utf-8")

<b>12. Text vs binary comparison</b>
Text file:
- Data is treated as characters
- Python uses str
- Encoding/decoding is involved
- Human-readable content is common
- Example: TXT, CSV, JSON

Binary file:
- Data is treated as bytes
- Python uses bytes
- No character decoding is automatically performed
- Human readability is not required
- Example: JPG, PNG, PDF, MP3

<b>13. Real-time usage</b>
Use text files for:
- Application logs
- Configuration files
- JSON data
- CSV data
- Source code
- Plain text documents

Use binary files for:
- Images
- Videos
- Audio
- PDFs
- ZIP files
- Executable files
- Serialized binary data

<b>14. Important Python types</b>
Text file:
type(data) → <b>str</b>
Binary file:
type(data) → <b>bytes</b>

<b>15. Important rule</b>
If the file represents <b>human-readable characters</b>, use text mode.
If the file represents <b>raw binary data</b>, use binary mode.`,

                    code1: `# ------------------- Ex : 1 ----------------
# Writing and reading a text file

text = "Hello Python"

with open("message.txt", "w", encoding="utf-8") as file:
    file.write(text)

with open("message.txt", "r", encoding="utf-8") as file:
    data = file.read()

print(data)
print(type(data))

# Output:
# Hello Python
# <class 'str'>


# ------------------- Ex : 2 ----------------
# Writing multiple lines to a text file

lines = [
    "Python\\n",
    "Java\\n",
    "JavaScript\\n"
]

with open("languages.txt", "w", encoding="utf-8") as file:
    file.writelines(lines)

with open("languages.txt", "r", encoding="utf-8") as file:
    data = file.read()

print(data)

# Output:
# Python
# Java
# JavaScript


# ------------------- Ex : 3 ----------------
# Reading a text file line by line

with open("languages.txt", "r", encoding="utf-8") as file:

    for line in file:
        print(line.strip())

# Output:
# Python
# Java
# JavaScript


# ------------------- Ex : 4 ----------------
# Text data is stored as str

with open("message.txt", "r", encoding="utf-8") as file:
    data = file.read()

print(data)
print(type(data))

# Output:
# Hello Python
# <class 'str'>


# ------------------- Ex : 5 ----------------
# Text -> bytes using encode()

text = "Hello Python"

data = text.encode("utf-8")

print(data)
print(type(data))

# Output:
# b'Hello Python'
# <class 'bytes'>


# ------------------- Ex : 6 ----------------
# Bytes -> text using decode()

data = b"Hello Python"

text = data.decode("utf-8")

print(text)
print(type(text))

# Output:
# Hello Python
# <class 'str'>


# ------------------- Ex : 7 ----------------
# Writing bytes to a binary file

data = b"Hello Python"

with open("data.bin", "wb") as file:
    file.write(data)

with open("data.bin", "rb") as file:
    result = file.read()

print(result)
print(type(result))

# Output:
# b'Hello Python'
# <class 'bytes'>


# ------------------- Ex : 8 ----------------
# Text mode vs binary mode

with open("message.txt", "r", encoding="utf-8") as file:
    text_data = file.read()

with open("data.bin", "rb") as file:
    binary_data = file.read()

print(type(text_data))
print(type(binary_data))

# Output:
# <class 'str'>
# <class 'bytes'>


# ------------------- Ex : 9 ----------------
# Writing text to a binary file causes an error

text = "Hello Python"

with open("data.bin", "wb") as file:
    file.write(text)

# TypeError:
# a bytes-like object is required, not 'str'


# ------------------- Ex : 10 ----------------
# Correct way: encode text before writing in binary mode

text = "Hello Python"

with open("data.bin", "wb") as file:
    file.write(text.encode("utf-8"))

with open("data.bin", "rb") as file:
    data = file.read()

print(data)

# Output:
# b'Hello Python'


# ------------------- Ex : 11 ----------------
# Reading binary data

with open("data.bin", "rb") as file:
    data = file.read()

print(data)

# Output:
# b'Hello Python'


# ------------------- Ex : 12 ----------------
# Real-time example: reading an image

with open("photo.jpg", "rb") as file:
    image_data = file.read()

print(type(image_data))
print(len(image_data))

# Output:
# <class 'bytes'>
# number of bytes in the image


# ------------------- Ex : 13 ----------------
# Real-time example: copying an image

with open("source.jpg", "rb") as source:
    data = source.read()

with open("backup.jpg", "wb") as destination:
    destination.write(data)

print("Image copied successfully")


# ------------------- Ex : 14 ----------------
# Better approach for large binary files:
# Read and write using chunks

with open("source.jpg", "rb") as source:
    with open("backup.jpg", "wb") as destination:

        while chunk := source.read(4096):
            destination.write(chunk)

print("Large file copied successfully")


# ------------------- Ex : 15 ----------------
# Unicode text example

text = "Hello Python 😊 తెలుగు"

with open("unicode.txt", "w", encoding="utf-8") as file:
    file.write(text)

with open("unicode.txt", "r", encoding="utf-8") as file:
    data = file.read()

print(data)

# Output:
# Hello Python 😊 తెలుగు


# ------------------- Ex : 16 ----------------
# Different encodings

text = "Hello"

data = text.encode("utf-8")

print(data)

decoded_text = data.decode("utf-8")

print(decoded_text)

# Output:
# b'Hello'
# Hello


# ------------------- Ex : 17 ----------------
# Demonstrating UTF-8 encoding

text = "A"

data = text.encode("utf-8")

print(data)
print(list(data))

# Output:
# b'A'
# [65]


# ------------------- Ex : 18 ----------------
# Unicode character uses multiple UTF-8 bytes

text = "😊"

data = text.encode("utf-8")

print(data)
print(list(data))

# Output:
# b'\\xf0\\x9f\\x98\\x8a'
# [240, 159, 152, 138]


# ------------------- Ex : 19 ----------------
# Reading a text file with explicit encoding

with open("message.txt", "r", encoding="utf-8") as file:
    data = file.read()

print(data)


# ------------------- Ex : 20 ----------------
# Real-time example: application log file

with open("application.log", "a", encoding="utf-8") as file:
    file.write("Application started\\n")
    file.write("Database connected\\n")
    file.write("Request processed successfully\\n")


# ------------------- Ex : 21 ----------------
# Real-time example: JSON is a text file

import json

user = {
    "id": 101,
    "name": "Anand",
    "role": "Developer"
}

with open("user.json", "w", encoding="utf-8") as file:
    json.dump(user, file, indent=4)

with open("user.json", "r", encoding="utf-8") as file:
    data = json.load(file)

print(data)
print(type(data))

# Output:
# {'id': 101, 'name': 'Anand', 'role': 'Developer'}
# <class 'dict'>


# ------------------- Ex : 22 ----------------
# Real-time example: CSV is normally treated as text

import csv

with open("employees.csv", "w", newline="", encoding="utf-8") as file:

    writer = csv.writer(file)

    writer.writerow(["ID", "Name", "Role"])
    writer.writerow([101, "Anand", "Developer"])
    writer.writerow([102, "Rahul", "Tester"])


# ------------------- Ex : 23 ----------------
# Binary file chunk processing

chunk_size = 1024

with open("video.mp4", "rb") as source:

    while True:

        chunk = source.read(chunk_size)

        if not chunk:
            break

        print("Received chunk:", len(chunk), "bytes")


# ------------------- Ex : 24 ----------------
# Checking whether the returned data is str or bytes

with open("message.txt", "r", encoding="utf-8") as file:
    data = file.read()

if isinstance(data, str):
    print("This is text data")


with open("data.bin", "rb") as file:
    data = file.read()

if isinstance(data, bytes):
    print("This is binary data")


# ------------------- Ex : 25 ----------------
# Important comparison in one example

text = "Hello"

# Text representation
with open("text.txt", "w", encoding="utf-8") as file:
    file.write(text)

# Binary representation
binary_data = text.encode("utf-8")

with open("binary.bin", "wb") as file:
    file.write(binary_data)

with open("text.txt", "r", encoding="utf-8") as file:
    text_result = file.read()

with open("binary.bin", "rb") as file:
    binary_result = file.read()

print(text_result)
print(type(text_result))

print(binary_result)
print(type(binary_result))

# Output:
# Hello
# <class 'str'>
# b'Hello'
# <class 'bytes'>


# ------------------- Ex : 26 ----------------
# Real-time example: file upload handling

def save_uploaded_file(file_data, filename):

    with open(filename, "wb") as file:
        file.write(file_data)

    print("File saved successfully")


image_data = b"binary image data"

save_uploaded_file(image_data, "uploaded.jpg")


# ------------------- Ex : 27 ----------------
# Converting binary data back into text

binary_data = "Hello Python".encode("utf-8")

text_data = binary_data.decode("utf-8")

print(text_data)

# Output:
# Hello Python


# ------------------- Ex : 28 ----------------
# Wrong decoding can cause UnicodeDecodeError

data = "తెలుగు".encode("utf-8")

# Correct:
print(data.decode("utf-8"))

# Incorrect:
# print(data.decode("ascii"))

# UnicodeDecodeError can occur because
# the bytes are UTF-8 encoded, not ASCII.


# ------------------- Ex : 29 ----------------
# Binary file does not automatically decode

data = b"Hello Python"

with open("data.bin", "wb") as file:
    file.write(data)

with open("data.bin", "rb") as file:
    result = file.read()

print(result)

# Python gives bytes directly:
# b'Hello Python'


# ------------------- Ex : 30 ----------------
# Real-time file copy using binary mode

def copy_file(source_path, destination_path):

    with open(source_path, "rb") as source:
        with open(destination_path, "wb") as destination:

            while chunk := source.read(8192):
                destination.write(chunk)

    print("File copied successfully")


copy_file("input.pdf", "backup.pdf")`
                }
            ]
        },
        {
            id: 1,
            title: "File pointer: tell() / seek()",
            note: [
                {
                    definition: `<b>File pointer</b> is the current position inside an open file where Python will perform the next read or write operation.

When a file is opened, Python maintains a <b>file pointer</b>.
<b>tell()</b> returns the current position of the file pointer.
<b>seek()</b> moves the file pointer to a specific position.

<b>Key idea:</b>
tell()  → "Where am I currently?"
seek()  → "Move me to this position."

The position is generally measured in <b>bytes</b> from the beginning of the file.
<b>Important:</b>
The exact behavior of positions can be more nuanced in text mode because of character encoding and newline handling. For learning and ordinary ASCII/UTF-8 examples, thinking of the position as a byte offset is useful.`,

                    text1: `<b>1. tell()</b>
The <b>tell()</b> method returns the current file pointer position.
Syntax:
file.tell()

Example:
with open("file.txt", "r", encoding="utf-8") as file:
    print(file.tell())

If the pointer is at the beginning of the file, tell() normally returns:
0

<b>2. seek()</b>
The <b>seek()</b> method moves the file pointer to a specified position.

Syntax:
file.seek(offset)

Example:
file.seek(5)
This moves the file pointer to position 5.

<b>3. seek() parameters</b>
The complete form is:
file.seek(offset, whence)

<b>offset</b>:
The number of positions to move.

<b>whence</b>:
Specifies the reference point.

Common values:
0 → beginning of the file
1 → current position
2 → end of the file

Examples:
file.seek(0)
→ Move to the beginning.

file.seek(5)
→ Move to position 5 from the beginning.

file.seek(0, 2)
→ Move to the end.

<b>4. Reading after seek()</b>
After moving the pointer, the next read starts from the new position.

<b>5. tell() after read()</b>
When data is read, the file pointer moves forward.

Example:
file.read(5)

The pointer moves after those 5 bytes/characters as applicable to the file mode.

<b>6. seek(0)</b>
One of the most commonly used patterns is:
file.seek(0)
It moves the pointer back to the beginning of the file.
This allows the same open file to be read again.

<b>7. seek(0, 2)</b>
This moves the pointer to the end of the file.

It is commonly used when you need to work relative to the end.

<b>8. Important difference</b>
tell():
<b>Returns</b> the current pointer position.
seek():
<b>Changes</b> the pointer position.

<b>9. File pointer and read()</b>
Suppose the file contains:
Hello Python
Initially:
pointer → 0
After:
file.read(5)
the pointer moves forward.
The next read continues from the new position.

<b>10. File pointer and readline()</b>
readline() also moves the pointer forward because Python has consumed data from the file.

<b>11. File pointer and write()</b>
Writing also changes the file pointer.

After writing data, the pointer normally moves to the position immediately after the newly written data.

<b>12. Why use seek()?</b>
seek() is useful when you need to:
- Read the same file again
- Jump to a specific location
- Read data from a particular position
- Move to the beginning
- Move to the end
- Reposition a file before writing
- Process large files more efficiently
- Work with binary files

<b>13. Why use tell()?</b>
tell() is useful when you need to:
- Know the current position
- Track how much data has been processed
- Save a position for later
- Debug file-reading logic
- Monitor progress while processing a large file

<b>14. Text mode vs binary mode</b>
In <b>binary mode</b>, tell() and seek() positions are naturally based on byte offsets.

In <b>text mode</b>, Python performs encoding/decoding and newline handling, so arbitrary numeric seeking can have restrictions. For predictable random access, <b>binary mode</b> is often preferred.

<b>15. Negative seek()</b>
Negative offsets are not generally supported from the beginning of a file.
For example:
file.seek(-5, 0)
can raise an error.

However, moving backward relative to the current position or end is possible in appropriate contexts, especially with binary files.

<b>16. Real-time example</b>
A large video file can be opened in binary mode, and seek() can move directly to a particular byte position instead of reading the entire file from the beginning.

<b>17. Important relationship</b>
tell() and seek() are often used together:
position = file.tell()
file.seek(...)
file.seek(position)
This allows you to remember a position and return to it later.

<b>18. Important caution</b>
seek() does not mean "go to character number" in every situation.
For binary files, offsets are byte positions.
For text files, encoding can make one character occupy multiple bytes, so arbitrary positioning should be handled carefully.

<b>19. File pointer visualization</b>
File:
Hello Python
Positions:
0 1 2 3 4 5 6 7 8 9 ...
H e l l o   P y t h o n
^

Initially, the pointer is at position 0.
After read(5):
H e l l o   P y t h o n
          ^

The next operation starts from the new pointer position.

<b>20. Key summary</b>
<b>tell()</b> → returns current file pointer position.
<b>seek()</b> → changes file pointer position.
<b>seek(0)</b> → beginning.
<b>seek(0, 2)</b> → end.
<b>tell() + seek()</b> → useful for tracking and repositioning.
<b>Binary files</b> → best for precise byte-based random access.`,

                    code1: `# ------------------- Ex : 1 ----------------
# Check the initial file pointer position

with open("file.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python")

with open("file.txt", "r", encoding="utf-8") as file:

    position = file.tell()

    print(position)

# Output:
# 0


# ------------------- Ex : 2 ----------------
# tell() after reading data

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.tell())

    data = file.read(5)

    print(data)
    print(file.tell())

# Output:
# 0
# Hello
# 5


# ------------------- Ex : 3 ----------------
# Reading continues from the current pointer

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.read(5))
    print(file.read(7))

# Output:
# Hello
#  Python


# ------------------- Ex : 4 ----------------
# seek(0) moves pointer to the beginning

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.read(5))

    file.seek(0)

    print(file.read(5))

# Output:
# Hello
# Hello


# ------------------- Ex : 5 ----------------
# tell() + seek()

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.read(5))

    print("Current position:", file.tell())

    file.seek(0)

    print("New position:", file.tell())

# Output:
# Hello
# Current position: 5
# New position: 0


# ------------------- Ex : 6 ----------------
# Move to a specific position

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(6)

    print(file.tell())
    print(file.read())

# Output:
# 6
# Python


# ------------------- Ex : 7 ----------------
# Read data from a specific position

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(6)

    data = file.read(6)

    print(data)

# Output:
# Python


# ------------------- Ex : 8 ----------------
# Move to the end of the file

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(0, 2)

    print(file.tell())

# Output:
# 12


# ------------------- Ex : 9 ----------------
# Read from the beginning, move to the end,
# then return to the beginning

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.read())

    file.seek(0, 2)

    print("End position:", file.tell())

    file.seek(0)

    print("Beginning position:", file.tell())

# Output:
# Hello Python
# End position: 12
# Beginning position: 0


# ------------------- Ex : 10 ----------------
# Remember the current position

with open("file.txt", "r", encoding="utf-8") as file:

    print(file.read(5))

    saved_position = file.tell()

    print("Saved position:", saved_position)

    print(file.read())

    file.seek(saved_position)

    print(file.read())

# Output:
# Hello
# Saved position: 5
#  Python
#  Python


# ------------------- Ex : 11 ----------------
# Using seek() with whence = 0
# 0 means beginning of the file

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(6, 0)

    print(file.read())

# Output:
# Python


# ------------------- Ex : 12 ----------------
# Using seek(0, 2)
# 2 means end of the file

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(0, 2)

    print("Position:", file.tell())

# Output:
# Position: 12


# ------------------- Ex : 13 ----------------
# File pointer with readline()

with open("file.txt", "r", encoding="utf-8") as file:

    print("Before:", file.tell())

    line = file.readline()

    print("Data:", line)
    print("After:", file.tell())


# ------------------- Ex : 14 ----------------
# Reading the same file twice using seek()

with open("file.txt", "r", encoding="utf-8") as file:

    first_read = file.read()

    file.seek(0)

    second_read = file.read()

print(first_read)
print(second_read)

# Output:
# Hello Python
# Hello Python


# ------------------- Ex : 15 ----------------
# Binary file and tell()

data = b"Hello Python"

with open("data.bin", "wb") as file:
    file.write(data)

with open("data.bin", "rb") as file:

    print(file.tell())

    file.read(5)

    print(file.tell())

# Output:
# 0
# 5


# ------------------- Ex : 16 ----------------
# Binary file and seek()

with open("data.bin", "rb") as file:

    file.seek(6)

    data = file.read()

print(data)

# Output:
# b'Python'


# ------------------- Ex : 17 ----------------
# Binary file: move to the end

with open("data.bin", "rb") as file:

    file.seek(0, 2)

    size = file.tell()

print("File size:", size)

# Output:
# File size: 12


# ------------------- Ex : 18 ----------------
# Real-time example: find file size

with open("data.bin", "rb") as file:

    file.seek(0, 2)

    file_size = file.tell()

print("File size:", file_size, "bytes")


# ------------------- Ex : 19 ----------------
# Real-time example: process a large file
# and track the current position

with open("large.log", "rb") as file:

    while chunk := file.read(1024):

        current_position = file.tell()

        print(
            "Processed:",
            current_position,
            "bytes"
        )


# ------------------- Ex : 20 ----------------
# Real-time example: remember and restore position

with open("file.txt", "r", encoding="utf-8") as file:

    file.read(5)

    position = file.tell()

    print("Current data:", file.read())

    file.seek(position)

    print("Reading again:", file.read())

# Output:
# Current data:  Python
# Reading again:  Python


# ------------------- Ex : 21 ----------------
# File pointer changes after writing

with open("output.txt", "w", encoding="utf-8") as file:

    print("Before writing:", file.tell())

    file.write("Hello")

    print("After writing:", file.tell())

# Output:
# Before writing: 0
# After writing: 5


# ------------------- Ex : 22 ----------------
# Move pointer before writing

with open("output.txt", "w", encoding="utf-8") as file:

    file.write("Hello Python")

    file.seek(6)

    file.write("World")

# Result may be:
# Hello World


# ------------------- Ex : 23 ----------------
# Binary random access

data = b"ABCDEFGHIJ"

with open("data.bin", "wb") as file:
    file.write(data)

with open("data.bin", "rb") as file:

    file.seek(5)

    print(file.read(2))

# Output:
# b'FG'


# ------------------- Ex : 24 ----------------
# Read one byte at a time using seek()

with open("data.bin", "rb") as file:

    file.seek(3)

    byte = file.read(1)

print(byte)

# Output:
# b'D'


# ------------------- Ex : 25 ----------------
# Real-time example:
# Random access to a large binary file

with open("video.mp4", "rb") as file:

    # Jump to a particular byte position
    file.seek(1000000)

    data = file.read(1024)

print("Read:", len(data), "bytes")


# ------------------- Ex : 26 ----------------
# Check current position while processing

with open("large_file.bin", "rb") as file:

    while chunk := file.read(4096):

        position = file.tell()

        print(
            "Current file position:",
            position
        )


# ------------------- Ex : 27 ----------------
# seek() can reposition the pointer multiple times

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(6)
    print(file.read(6))

    file.seek(0)
    print(file.read(5))

    file.seek(6)
    print(file.read())

# Output:
# Python
# Hello
# Python


# ------------------- Ex : 28 ----------------
# Important concept:
# tell() does not read the file

with open("file.txt", "r", encoding="utf-8") as file:

    print("Before tell:", file.tell())

    position = file.tell()

    print("Position:", position)

    print("After tell:", file.tell())

# tell() only reports the position.
# It does not move the pointer.


# ------------------- Ex : 29 ----------------
# Important concept:
# seek() changes the pointer but does not read data

with open("file.txt", "r", encoding="utf-8") as file:

    file.seek(6)

    print("Position:", file.tell())

    print("Data:", file.read())

# Output:
# Position: 6
# Data: Python


# ------------------- Ex : 30 ----------------
# Master example:
# tell() + seek() + read()

with open("file.txt", "r", encoding="utf-8") as file:

    print("Initial position:", file.tell())

    first = file.read(5)

    print("First:", first)
    print("Position:", file.tell())

    saved_position = file.tell()

    file.seek(0)

    print("After seek(0):", file.tell())

    print("From beginning:", file.read(5))

    file.seek(saved_position)

    print("Restored position:", file.tell())

    print("Remaining:", file.read())

# Output:
# Initial position: 0
# First: Hello
# Position: 5
# After seek(0): 0
# From beginning: Hello
# Restored position: 5
# Remaining:  Python`
                }
            ]
        },
        {
            id: 1,
            title: "CSV / JSON files",
            note: [
                {
                    definition: `<b>CSV</b> stands for <b>Comma-Separated Values</b>. A CSV file stores tabular data in rows and columns, where each row represents a record and values are usually separated by commas.

<b>JSON</b> stands for <b>JavaScript Object Notation</b>. JSON stores structured data using objects, arrays, key-value pairs, strings, numbers, booleans, and null values.

Python provides built-in modules:
<b>csv</b> → Used to read and write CSV files.
<b>json</b> → Used to read and write JSON files.`,

                    text1: `<b>CSV vs JSON</b>

CSV is mainly suitable for <b>tabular data</b>, such as employee records, reports, and Excel-like data.

JSON is mainly suitable for <b>structured or hierarchical data</b>, especially API requests and responses.

CSV example:
name,age,city
Anand,36,Hyderabad
Rahul,30,Bangalore

JSON example:
{
    "name": "Anand",
    "age": 36,
    "city": "Hyderabad"
}`,

                    code1: `# ---------- Ex : 1 - Create and write a CSV file ----------

import csv

employees = [
    ["id", "name", "department", "salary"],
    [101, "Anand", "IT", 80000],
    [102, "Rahul", "HR", 60000],
    [103, "Priya", "Finance", 75000]
]

with open("employees.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(employees)

print("CSV file created successfully")


# ---------- Ex : 2 - Read a CSV file ----------

import csv

with open("employees.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)


# ---------- Ex : 3 - Read CSV row by row ----------

import csv

with open("employees.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print("ID:", row[0])
        print("Name:", row[1])
        print("Department:", row[2])
        print("Salary:", row[3])
        print("----------------")


# ---------- Ex : 4 - CSV using DictWriter ----------

import csv

employees = [
    {
        "id": 101,
        "name": "Anand",
        "department": "IT",
        "salary": 80000
    },
    {
        "id": 102,
        "name": "Rahul",
        "department": "HR",
        "salary": 60000
    }
]

with open("employees.csv", "w", newline="") as file:
    fieldnames = ["id", "name", "department", "salary"]

    writer = csv.DictWriter(
        file,
        fieldnames=fieldnames
    )

    writer.writeheader()
    writer.writerows(employees)


# ---------- Ex : 5 - Read CSV using DictReader ----------

import csv

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)

    for employee in reader:
        print(employee["name"])
        print(employee["department"])
        print(employee["salary"])


# ---------- Ex : 6 - Append data to CSV ----------

import csv

new_employee = {
    "id": 104,
    "name": "Kiran",
    "department": "IT",
    "salary": 70000
}

with open("employees.csv", "a", newline="") as file:
    writer = csv.DictWriter(
        file,
        fieldnames=["id", "name", "department", "salary"]
    )

    writer.writerow(new_employee)

print("Employee added")


# ---------- Ex : 7 - Create and write a JSON file ----------

import json

employee = {
    "id": 101,
    "name": "Anand",
    "department": "IT",
    "salary": 80000
}

with open("employee.json", "w") as file:
    json.dump(employee, file, indent=4)

print("JSON file created")


# ---------- Ex : 8 - Read a JSON file ----------

import json

with open("employee.json", "r") as file:
    employee = json.load(file)

print(employee)

print("Name:", employee["name"])
print("Department:", employee["department"])
print("Salary:", employee["salary"])


# ---------- Ex : 9 - JSON with a list of objects ----------

import json

employees = [
    {
        "id": 101,
        "name": "Anand",
        "department": "IT"
    },
    {
        "id": 102,
        "name": "Rahul",
        "department": "HR"
    },
    {
        "id": 103,
        "name": "Priya",
        "department": "Finance"
    }
]

with open("employees.json", "w") as file:
    json.dump(employees, file, indent=4)


# ---------- Ex : 10 - Read JSON list ----------

import json

with open("employees.json", "r") as file:
    employees = json.load(file)

for employee in employees:
    print(
        employee["id"],
        employee["name"],
        employee["department"]
    )


# ---------- Ex : 11 - Convert Python object to JSON string ----------

import json

employee = {
    "id": 101,
    "name": "Anand",
    "skills": ["Python", "React", "Java"]
}

json_string = json.dumps(employee, indent=4)

print(json_string)


# ---------- Ex : 12 - Convert JSON string to Python object ----------

import json

json_string = '''
{
    "id": 101,
    "name": "Anand",
    "skills": ["Python", "React", "Java"]
}
'''

employee = json.loads(json_string)

print(employee)
print(employee["name"])
print(employee["skills"])


# ---------- Ex : 13 - json.dump() vs json.dumps() ----------

import json

employee = {
    "id": 101,
    "name": "Anand"
}

# dump() → Python object → JSON file
with open("employee.json", "w") as file:
    json.dump(employee, file, indent=4)

# dumps() → Python object → JSON string
json_string = json.dumps(employee)

print(json_string)


# ---------- Ex : 14 - json.load() vs json.loads() ----------

import json

# load() → JSON file → Python object
with open("employee.json", "r") as file:
    employee = json.load(file)

print(employee)

# loads() → JSON string → Python object
json_string = '{"id": 101, "name": "Anand"}'

employee = json.loads(json_string)

print(employee)


# ---------- Ex : 15 - Real-time API response example ----------

import json

api_response = '''
{
    "status": "success",
    "user": {
        "id": 101,
        "name": "Anand",
        "role": "Software Engineer"
    },
    "skills": [
        "React",
        "Java",
        "Python"
    ]
}
'''

data = json.loads(api_response)

print("Status:", data["status"])
print("User:", data["user"]["name"])
print("Role:", data["user"]["role"])
print("Skills:", data["skills"])


# ---------- Ex : 16 - Update JSON data ----------

import json

with open("employee.json", "r") as file:
    employee = json.load(file)

employee["salary"] = 90000
employee["department"] = "Engineering"

with open("employee.json", "w") as file:
    json.dump(employee, file, indent=4)

print("Employee updated")


# ---------- Ex : 17 - Filter CSV records ----------

import csv

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)

    for employee in reader:
        if employee["department"] == "IT":
            print(employee["name"])


# ---------- Ex : 18 - Calculate salary from CSV ----------

import csv

total_salary = 0

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)

    for employee in reader:
        total_salary += int(employee["salary"])

print("Total salary:", total_salary)


# ---------- Ex : 19 - CSV to JSON conversion ----------

import csv
import json

employees = []

with open("employees.csv", "r") as csv_file:
    reader = csv.DictReader(csv_file)

    for row in reader:
        employees.append(row)

with open("employees.json", "w") as json_file:
    json.dump(employees, json_file, indent=4)

print("CSV converted to JSON")


# ---------- Ex : 20 - JSON to CSV conversion ----------

import json
import csv

with open("employees.json", "r") as json_file:
    employees = json.load(json_file)

with open("employees.csv", "w", newline="") as csv_file:

    fieldnames = employees[0].keys()

    writer = csv.DictWriter(
        csv_file,
        fieldnames=fieldnames
    )

    writer.writeheader()
    writer.writerows(employees)

print("JSON converted to CSV")


# ---------- Ex : 21 - Real-time employee data processing ----------

import csv

employees = []

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)

    for employee in reader:
        employee["id"] = int(employee["id"])
        employee["salary"] = int(employee["salary"])

        employees.append(employee)

high_salary_employees = [
    employee
    for employee in employees
    if employee["salary"] > 70000
]

for employee in high_salary_employees:
    print(employee)


# ---------- Ex : 22 - Real-time configuration JSON ----------

import json

config = {
    "application": {
        "name": "Banking Application",
        "version": "1.0.0"
    },
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "bankdb"
    },
    "features": {
        "login": True,
        "payments": True,
        "notifications": False
    }
}

with open("config.json", "w") as file:
    json.dump(config, file, indent=4)

print("Configuration saved")


# ---------- Ex : 23 - Read nested JSON configuration ----------

import json

with open("config.json", "r") as file:
    config = json.load(file)

print("Application:", config["application"]["name"])
print("Database:", config["database"]["name"])
print("Database Port:", config["database"]["port"])
print("Payments:", config["features"]["payments"])


# ---------- Ex : 24 - Handle JSON errors ----------

import json

try:
    with open("employee.json", "r") as file:
        employee = json.load(file)

    print(employee)

except FileNotFoundError:
    print("JSON file does not exist")

except json.JSONDecodeError:
    print("Invalid JSON format")


# ---------- Ex : 25 - Handle CSV file errors ----------

import csv

try:
    with open("employees.csv", "r") as file:
        reader = csv.DictReader(file)

        for employee in reader:
            print(employee)

except FileNotFoundError:
    print("CSV file does not exist")`
                },

                {
                    definition: `<b>Important CSV functions/classes</b>

<b>csv.reader()</b> → Reads CSV rows as lists.

<b>csv.writer()</b> → Writes rows to a CSV file.

<b>csv.DictReader()</b> → Reads CSV rows as dictionaries using the header names.

<b>csv.DictWriter()</b> → Writes dictionaries to a CSV file.

<b>writerow()</b> → Writes one row.

<b>writerows()</b> → Writes multiple rows.

<b>Important JSON functions</b>

<b>json.dump()</b> → Python object → JSON file.

<b>json.dumps()</b> → Python object → JSON string.

<b>json.load()</b> → JSON file → Python object.

<b>json.loads()</b> → JSON string → Python object.`,

                    text1: `<b>Python ↔ JSON conversion</b>

Python dict → JSON object
Python list → JSON array
Python str → JSON string
Python int/float → JSON number
Python True → JSON true
Python False → JSON false
Python None → JSON null

<b>Important:</b> <b>load()</b> and <b>dump()</b> work with files, while <b>loads()</b> and <b>dumps()</b> work with strings.`
                },

                {
                    definition: `<b>When should you use CSV?</b>

Use CSV when the data is primarily <b>tabular</b> and has a simple row/column structure.

Examples:
• Employee reports
• Sales reports
• Product lists
• Excel exports
• Transaction reports
• Data analysis datasets

<b>When should you use JSON?</b>

Use JSON when the data contains <b>nested, hierarchical, or structured information</b>.

Examples:
• REST API request/response
• Application configuration
• User profiles
• Frontend-backend communication
• Microservices communication
• Nested business objects`,

                    text1: `<b>Real-time IT example</b>

A React frontend may send a JSON request to a Spring Boot API:

{
    "customerId": 101,
    "accountType": "CREDIT_CARD",
    "country": "US"
}

The backend can process this request and return JSON:

{
    "status": "SUCCESS",
    "customer": {
        "id": 101,
        "name": "Anand"
    },
    "accounts": [
        {
            "type": "CREDIT_CARD",
            "status": "ACTIVE"
        }
    ]
}

A CSV file would be more appropriate for exporting many customer records into a report.`
                },

                {
                    definition: `<b>Key differences between CSV and JSON</b>`,

                    text1: `<b>CSV</b>
• Simple tabular structure
• Smaller and easy to export
• Commonly used with Excel/data analysis
• Does not naturally represent nested objects
• Usually uses rows and columns

<b>JSON</b>
• Supports nested structures
• Supports objects and arrays
• Very common in REST APIs
• More expressive than CSV
• Easy for JavaScript/React applications to consume

<b>Interview point:</b>
CSV is generally better for <b>flat tabular data</b>, while JSON is generally better for <b>structured and hierarchical data</b>.`
                }
            ]
        },
        {
            id: 1,
            title: "File and directory operations",
            note: [
                {
                    definition: `<b>File and directory operations</b> in Python are used to create, read, write, modify, rename, delete, and manage files and directories (folders) on the filesystem.`,

                    text1: `<b>Python provides several built-in modules and functions</b> for working with files and directories. The most commonly used ones are <b>open()</b>, <b>os</b>, <b>os.path</b>, <b>pathlib</b>, and <b>shutil</b>.`,

                    code1: `// ---------- Ex : 1 - Create a file ----------
file = open("example.txt", "w")
file.write("Hello Python")
file.close()

// ---------- Ex : 2 - Read a file ----------
file = open("example.txt", "r")
content = file.read()
print(content)
file.close()

// ---------- Ex : 3 - Append data to a file ----------
file = open("example.txt", "a")
file.write("\\nWelcome to Python")
file.close()

// ---------- Ex : 4 - Check whether a file exists ----------
import os

if os.path.exists("example.txt"):
    print("File exists")
else:
    print("File does not exist")

// ---------- Ex : 5 - Get file information ----------
import os

print(os.path.getsize("example.txt"))       // File size in bytes
print(os.path.abspath("example.txt"))      // Absolute path

// ---------- Ex : 6 - Rename a file ----------
import os

os.rename("example.txt", "new_example.txt")

// ---------- Ex : 7 - Delete a file ----------
import os

if os.path.exists("new_example.txt"):
    os.remove("new_example.txt")

// ---------- Ex : 8 - Create a directory ----------
import os

os.mkdir("reports")

// ---------- Ex : 9 - Create nested directories ----------
import os

os.makedirs("project/src/components")

// ---------- Ex : 10 - Check whether a directory exists ----------
import os

if os.path.isdir("reports"):
    print("Directory exists")

// ---------- Ex : 11 - List files and directories ----------
import os

items = os.listdir(".")
print(items)

// ---------- Ex : 12 - Rename a directory ----------
import os

os.rename("reports", "documents")

// ---------- Ex : 13 - Delete an empty directory ----------
import os

os.rmdir("documents")

// ---------- Ex : 14 - Delete a directory and its contents ----------
import shutil

shutil.rmtree("project")

// ---------- Ex : 15 - Copy a file ----------
import shutil

shutil.copy("source.txt", "backup.txt")

// ---------- Ex : 16 - Move a file ----------
import shutil

shutil.move("source.txt", "backup/source.txt")

// ---------- Ex : 17 - Copy an entire directory ----------
import shutil

shutil.copytree("project", "project_backup")

// ---------- Ex : 18 - Using pathlib ----------
from pathlib import Path

file = Path("example.txt")

file.write_text("Hello Python")

print(file.read_text())

// ---------- Ex : 19 - Create a directory using pathlib ----------
from pathlib import Path

directory = Path("reports")
directory.mkdir(exist_ok=True)

// ---------- Ex : 20 - Check file/directory ----------
from pathlib import Path

path = Path("example.txt")

print(path.exists())
print(path.is_file())
print(path.is_dir())

// ---------- Ex : 21 - List files using pathlib ----------
from pathlib import Path

directory = Path(".")

for item in directory.iterdir():
    print(item)

// ---------- Ex : 22 - Find all Python files ----------
from pathlib import Path

for file in Path(".").glob("*.py"):
    print(file)

// ---------- Ex : 23 - Find Python files recursively ----------
from pathlib import Path

for file in Path(".").rglob("*.py"):
    print(file)

// ---------- Ex : 24 - Real-time example: Create log directory and file ----------
from pathlib import Path

log_dir = Path("logs")
log_dir.mkdir(exist_ok=True)

log_file = log_dir / "application.log"

with log_file.open("a") as file:
    file.write("Application started\\n")

print("Log file created successfully")`
                },
                {
                    text1: `<b>Important file modes:</b>`,
                    code1: `// "r"  -> Read
// "w"  -> Write (creates a new file or overwrites existing content)
// "a"  -> Append (adds data at the end)
// "x"  -> Create a new file; raises an error if the file already exists
// "b"  -> Binary mode
// "t"  -> Text mode (default)
// "+"  -> Read and write

// Examples:
open("file.txt", "r")
open("file.txt", "w")
open("file.txt", "a")
open("file.txt", "rb")
open("file.txt", "w+")`
                },
                {
                    text1: `<b>Important os functions:</b>`,
                    code1: `import os

os.getcwd()                    // Get current working directory
os.chdir("path")               // Change current working directory
os.listdir()                   // List directory contents
os.mkdir("folder")             // Create directory
os.makedirs("a/b/c")           // Create nested directories
os.rmdir("folder")             // Remove empty directory
os.remove("file.txt")          // Delete file
os.rename("old.txt", "new.txt") // Rename file/directory
os.path.exists("path")         // Check whether path exists
os.path.isfile("path")         // Check whether path is a file
os.path.isdir("path")          // Check whether path is a directory
os.path.getsize("file.txt")    // Get file size
os.path.abspath("file.txt")    // Get absolute path`
                },
                {
                    text1: `<b>Important pathlib operations:</b>`,
                    code1: `from pathlib import Path

path = Path("example.txt")

path.exists()                  // Check existence
path.is_file()                 // Check file
path.is_dir()                  // Check directory
path.mkdir()                   // Create directory
path.rmdir()                   // Remove empty directory
path.unlink()                  // Delete file
path.rename("new.txt")         // Rename
path.read_text()               // Read text
path.write_text("Hello")       // Write text
path.iterdir()                 // Iterate directory contents
path.glob("*.txt")             // Find matching files
path.rglob("*.txt")            // Find recursively

<b>Note:</b> <b>pathlib</b> is generally preferred for modern Python code because it provides an object-oriented and readable way to work with filesystem paths.`
                },
                {
                    text1: `<b>Real-time example: Organizing files into folders</b>`,
                    code1: `from pathlib import Path
import shutil

source = Path("downloads")
images = source / "images"
documents = source / "documents"

images.mkdir(parents=True, exist_ok=True)
documents.mkdir(parents=True, exist_ok=True)

for file in source.iterdir():
    if file.is_file():
        if file.suffix.lower() in [".jpg", ".jpeg", ".png"]:
            shutil.move(str(file), str(images / file.name))

        elif file.suffix.lower() in [".pdf", ".docx", ".txt"]:
            shutil.move(str(file), str(documents / file.name))

print("Files organized successfully")`
                },
                {
                    text1: `<b>Key points to remember:</b>`,
                    code1: `// 1. Use open() for basic file reading and writing.
// 2. Use "with open(...)" so Python automatically closes the file.
// 3. Use os for traditional filesystem operations.
// 4. Use pathlib for modern and readable path operations.
// 5. Use shutil for copying, moving, and deleting directory trees.
// 6. os.remove() / Path.unlink() -> delete a file.
// 7. os.rmdir() / Path.rmdir() -> remove an empty directory.
// 8. shutil.rmtree() -> remove a directory and all its contents.
// 9. Always be careful when using delete operations.
// 10. <b>Use pathlib + shutil</b> for most modern file-management applications.`
                }
            ]
        },
        {
            id: 1,
            title: "Exception handling with files",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Oops`,
            title: "class",
            note: [
                {
                    text1: `classes (blueprints) and objects (real items based on those blueprints).
                    A class is a collection of objects. Classes are blueprints for creating objects. A class defines a set of attributes and methods that the created objects (instances) can have.`,
                    code1: `// ------------ Ex : 1 ---------
                    class Person:
    def __init__(self, myname):
        self.myname = myname

    def show_my_name(self):
        print(f"my name is {self.myname}")

ob1 = Person("anand")
ob1.show_my_name()


// ------------ Ex : 2 ---------
class Dog:
    species = "Canine"  # Class attribute

    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age  # Instance attribute

# Creating an object of the Dog class
dog1 = Dog("Buddy", 3)

print(dog1.name) 
print(dog1.species)`
                }
            ]
        },
        {
            id: 1,
            title: "__init__() - Constructor",
            note: [
                {
                    text1: `<b>__init__</b> method is the constructor in Python, automatically called when a new object is created. It initializes the attributes of the class.
                    
                    The __init__() method can take any number of parameters, but the first one is always a variable known as <b>self</b>, which corresponds to the instance being created. This means self points to the address of the current object of a class, which enables you to access the data of the object's variables. So, if there are a thousand instances of a class, we can get data of individual objects using <b>self</b> as it points to the address of a particular object and returns the respective value. 

                    <b>__init__</b>: Special method used for initialization.
<b>self.name and self.age</b>: Instance attributes initialized in the constructor.
<b>Class and Instance Variables</b>
In Python, variables defined in a class can be either class variables or instance variables, and understanding the distinction between them is crucial for object-oriented programming.

<b>Class Variables</b>
These are the variables that are shared across all instances of a class. It is defined at the class level, outside any methods. All objects of the class share the same value for a class variable unless explicitly overridden in an object.

<b>Instance Variables</b>
Variables that are unique to each instance (object) of a class. These are defined within the __init__ method or other instance methods. Each object maintains its own copy of instance variables, independent of other objects.`,
                    code1: `// ------------ Ex : 1 ---------
                    class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
print(dog1.name)`
                }
            ]
        },
        {
            id: 1,
            title: "self",
            note: [
                {
                    text1: `<b>self</b> parameter is a reference to the current instance of the class. It allows us to access the attributes and methods of the object.
                    
                    In Python, self is a conventional first parameter of instance methods in a class. It refers to the current instance of the class through which the method is being called.
                    
                    It represents the instance of the class being used. Whenever we create an object from a class, self refers to the current object instance. It is essential for accessing attributes and methods within the class.

->                      It allows <b>access to instance variables and methods</b> from within the class.
->  It is <b>automatically passed</b> by Python when an instance method is called using an object.
->  It must be <b>explicitly declared</b> in the method definition.
                    <b>Why is self needed?</b>
Python does not implicitly use this like JavaScript or Java. Instead, you must explicitly define self as the first parameter in every instance method.`,
                    code1: `// ------------- Ex : 1 ---------
                    class Mynumber:
    def __init__(self, value):
        self.value = value
    
    def print_value(self):
        print(self.value)

obj1 = Mynumber(17)
obj1.print_value() // 17


//--------------- Ex : 2 -----------
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

    def get_count(self):
        return self.count

# using the Counter class
counter = Counter()
counter.increment()
counter.increment()
counter.decrement()
print(counter.get_count())`
                }
            ]
        },
        {
            id: 1,
            title: "methods",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Inheritance",
            note: [
                {
                    text1: `(OOP) that allows a class (called a child or derived class) to inherit attributes and methods from another class (called a parent or base class). This promotes code reuse, modularity, and a hierarchical class structure. 
                    
                    <b>super()</b> function, which is a built-in function that returns a temporary object of the superclass, so you can access its methods without explicitly naming the parent class. 

                    <b>Ex : 6</b> : super() is a built-in function used to call methods from a <b>parent (superclass)</b> in a <b>child (subclass)</b>.
super().__init__(args) specifically calls the <b>constructor of the parent class</b>.
                    
                    <b>Types of Inheritance</b>
                    <b>Single</b> :	One parent, one child	Ex : class B(A)
<b>Multilevel</b> :	Chain of inheritance Ex :	A → B → C
<b>Hierarchical</b> :	One parent, multiple children Ex :	A → B, A → C
<b>Multiple</b> :	Multiple parents, one child Ex :	class C(A, B)
                    `,
                    code1: `// ------------- Ex : 1 ------------
class Parent:
    def speak(self):
        print("Parent speaking")

class Child(Parent):  # Inheriting from Parent
    def play(self):
        print("Child playing")

c = Child()
c.speak()  # ✅ Inherited method
c.play()   # ✅ Own method

// ------------- Ex : 2 ------------
class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, roll):
        super().__init__(name)  # Calls Persons __init__
        self.roll = roll

s = Student("Anand", 101)
print(s.name)   # Anand
print(s.roll)   # 101


// ------------- Ex : 3 ------------
                    # Parent class
class Animal:
    def __init__(self, name):
        self.name = name  # Initialize the name attribute

    def speak(self):
        pass  # Placeholder method to be overridden by child classes
// Note: Use the pass keyword when you do not want to add any other properties or methods to the class.
# Child class inheriting from Animal
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks!"  # Override the speak method

# Creating an instance of Dog
dog = Dog("Buddy")
print(dog.speak())
// Output
// Buddy barks!
//------
// Animal is the parent class with an __init__ method and a speak method.
// Dog is the child class that inherits from Animal.
// The speak method is overridden in the Dog class to provide specific behavior.



// ------------- Ex : 4 ------------
// Multilevel Example:

class A:
    def show_a(self): print("A")

class B(A):
    def show_b(self): print("B")

class C(B):
    def show_c(self): print("C")

c = C()
c.show_a()  # From A
c.show_b()  # From B
c.show_c()  # Own


// ------------- Ex : 5 ------------
// Multiple Inheritance Example:

class A:
    def show(self): print("From A")

class B:
    def show(self): print("From B")

class C(A, B):  # MRO: A -> B
    pass

c = C()
c.show()  # From A (left-to-right)

// ------------- Ex : 6 ------------
// ---------- parent (superclass) in a child (subclass). -----------
class Parent:
    def __init__(self, w, b):
        self.w = w
        self.b = b

    def area(self):
        return self.w * self.b
    

class Child(Parent):
    def __init__(self, w, b, h):  # ✅ Fixed __init__ typo
        super().__init__(w, b)    # ✅ Call parent constructor first
        self.h = h

    def area_cube(self):
        return self.w * self.b * self.h


chob = Child(2, 3, 5)
print(chob.area_cube())  # Output: 30

// ------------- Ex : 7 ------------
// ------------- Ex : 8 ------------
`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "Encapsulation",
            note: [
                {
                    text1: `<b>Encapsulation</b> is the concept of <b>hiding internal data</b> and only exposing what is necessary.
It <b>binds data (variables)</b> and <b>methods (functions)</b> that work on that data into a single unit (class), and it <b>restricts direct access</b> to some of the object's components.

It involves combining data and its related methods into a single unit called “class”, which restricts direct access to variables and methods and helps prevent unintended changes to the data.

This promotes better code organization and reusability. Overall, encapsulation is essential for building robust software systems.

In object-oriented programming, encapsulation is a mechanism that enables the bundling of data and methods and restricts access to the data from outside the class. Private and public variables are two ways of controlling access to class variables.

-> A real-life example of this concept could be a car. The car's driver can interact with various features, such as the steering wheel, pedals, and dashboard. These features are accessible to the driver and are similar to public variables. 
 -> However, the driver cannot see or interact with many parts of the car, such as the engine and transmission. These parts are similar to private variables, accessible only within the class or object.
 -> By using private and public variables in encapsulation, we can control access to an object's data and ensure that it is only modified in a controlled way. 
 -> It makes managing the object's behavior easier and protects its internal data from being accidentally modified.

 Encapsulation in Python is achieved through the use of access modifiers which restrict access to the methods and variables of a class. This helps in bundling the data (variables) and the methods that act on the data into a single unit or class. Python primarily uses two types of access modifiers: public and private.

1. Public Members: In Python, members of a class that are accessible from outside the class are public. By default, all attributes and methods in a Python class are public. They can be accessed using the dot operator on an object.

2. Private Members: To make an attribute or method private (i.e., accessible only within the class), you precede its name with two underscores (\`__\`). This triggers a name mangling process, where the interpreter modifies the name of the variable in a way that makes it harder to create subclasses that accidentally override the private attributes and methods.

<b>Public</b>	self.name	Accessible from outside
<b>Protected</b>	self._name	Convention: Treat as internal
<b>Private</b>	self.__name	Name mangling (harder to access directly)

<b>public</b>	No underscore	Can be accessed from anywhere.
<b>_protected</b>	Single underscore <b>( _var )</b>	Shouldn't be accessed outside the class (not enforced).
<b>__private</b>	Double underscore <b>( __var )</b>	Name mangled to prevent outside access (enforced).
`,
                    code1: `// ---------- Ex : 1 --------
                    class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder  # Public
        self.__balance = balance              # Private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient balance")

    def get_balance(self):
        return self.__balance  # Safe access method

# Creating an object
account = BankAccount("Anand", 1000)

# Accessing public attribute
print(account.account_holder)

# Accessing private attribute directly (Not recommended)
# print(account.__balance)  ❌ This will raise an error

# Accessing private attribute using getter
print(account.get_balance()) # ✅

# Deposit money
account.deposit(500)
print(account.get_balance())  # Output: 1500



//----------- Ex : 2 ----------
class Employee:
    def __init__(self, name, salary):
        self.name = name              # Public
        self.__salary = salary        # Private (name-mangled)

    def show_info(self):
        print(f"Name: {self.name}")
        print(f"Salary: {self.__salary}")

    def update_salary(self, new_salary):
        if new_salary > 0:
            self.__salary = new_salary
        else:
            print("Invalid salary")

# Create object
emp = Employee("Anand", 50000)

# Access public variable
print(emp.name)  # ✅ Works

# Access private variable directly
# print(emp.__salary)  ❌ Error: AttributeError

# Access through public method
emp.show_info()  # ✅ Works

# Access private using name mangling (not recommended)
print(emp._Employee__salary)  # 😬 Works but not good practice

# Update private variable using method
emp.update_salary(60000)
emp.show_info()

# emp.__salary = 999999  # ❌ Creates a new public variable, doesn't change the original __salary


`
                },
            ]
        },
        {
            id: 1,
            title: "Abstraction",
            note: [
                {
                    text1: `Abstraction in Python is a process of handling complexity by hiding unnecessary details and showing only the essential information to the user. It is one of the core principles of Object-Oriented Programming (OOP), which allows developers to implement more complex functionality without worrying about the underlying complexity.

                    <b>Abstraction</b> means <b>hiding the complex implementation details</b> and showing only the <b>essential features</b> of an object. It's a fundamental concept in Object-Oriented Programming (OOP), and Python supports it using:

                    In Python, abstraction can be achieved using Abstract Classes and Abstract Methods. Let's explore how we can implement this using Python's built-in abc module.
                    Abstract Base Classes (ABC)
<b>@abstractmethod</b> decorator
<b>Abstract Method</b>: An abstract method is a method that is declared but contains no implementation. It is just a placeholder that tells the programmer that this method must be overridden by subclasses.
 In Python, abstract method feature is not a default feature. To create abstract method and abstract classes we have to import the "ABC" and "abstractmethod" classes from abc (Abstract Base Class) library. Abstract method of base class force its child class to write the implementation of the all abstract methods defined in base class. If we do not implement the abstract methods of base class in the child class then our code will give error. In the below code method_1 is a abstract method created using @abstractmethod decorator.
<b>Abstract Class</b>: A class containing one or more abstract methods is called an abstract class. You cannot create an instance of an abstract class directly.

<b>ABC</b>	Base class for defining abstract classes
<b>@abstractmethod</b>	Marks a method that must be implemented in child classes
<b>Cannot instantiate</b>	You cannot create an object of an abstract class
<b>Enforces implementation</b>	All abstract methods must be implemented in child classes


  <table data-start="382" data-end="742" class="w-fit min-w-(--thread-content-width)">
    <thead data-start="382" data-end="409">
      <tr data-start="382" data-end="409">
        <th data-start="382" data-end="392" data-col-size="sm">Feature</th>
        <th data-start="392" data-end="399" data-col-size="sm">Java</th>
        <th data-start="399" data-end="409" data-col-size="sm">Python</th>
      </tr>
    </thead>
    <tbody data-start="437" data-end="742">
      <tr data-start="437" data-end="497">
        <td data-start="437" data-end="457" data-col-size="sm"><strong data-start="439" data-end="456">Language
            type</strong></td>
        <td data-col-size="sm" data-start="457" data-end="476">Statically typed</td>
        <td data-col-size="sm" data-start="476" data-end="497">Dynamically typed</td>
      </tr>
      <tr data-start="498" data-end="586">
        <td data-start="498" data-end="527" data-col-size="sm"><strong data-start="500" data-end="526">Abstract class
            support</strong></td>
        <td data-col-size="sm" data-start="527" data-end="560">Built into the language syntax</td>
        <td data-col-size="sm" data-start="560" data-end="586">Added via <code data-start="572"
            data-end="577">abc</code> module</td>
      </tr>
      <tr data-start="587" data-end="648">
        <td data-start="587" data-end="612" data-col-size="sm"><strong data-start="589" data-end="611">Method
            enforcement</strong></td>
        <td data-col-size="sm" data-start="612" data-end="630">Compiler checks</td>
        <td data-col-size="sm" data-start="630" data-end="648">Runtime checks</td>
      </tr>
      <tr data-start="649" data-end="742">
        <td data-start="649" data-end="678" data-col-size="sm"><strong data-start="651" data-end="677">Interfaces /
            Contracts</strong></td>
        <td data-col-size="sm" data-start="678" data-end="707">Interface + Abstract Class</td>
        <td data-col-size="sm" data-start="707" data-end="742">Abstract Base Class (<code data-start="730"
            data-end="739">abc.ABC</code>)</td>
      </tr>
    </tbody>
  </table>
                    `,
                    code1: `//------------- Ex : 1 -----------
                    from abc import ABC, abstractmethod

// # Abstract class
class Animal(ABC):
    
    @abstractmethod
    def sound(self):
        pass  # Abstract method, must be implemented by child classes

// # Concrete class
class Dog(Animal):
    def sound(self):
        return "Barks"

class Cat(Animal):
    def sound(self):
        return "Meows"

// # Usage
dog = Dog()
cat = Cat()

print(dog.sound())  # Output: Barks
print(cat.sound())  # Output: Meows

                    
                    //------------- Ex : 2 -----------
                    // # Import required modules
from abc import ABC, abstractmethod

// # Create Abstract base class
class Car(ABC):
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    // # Create abstract method      
    @abstractmethod
    def printDetails(self):
        pass
  
    // # Create concrete method
    def accelerate(self):
        print("Speed up ...")
  
    def break_applied(self):
        print("Car stopped")

// # Create a child class
class Hatchback(Car):
    def printDetails(self):
        print("Brand:", self.brand)
        print("Model:", self.model)
        print("Year:", self.year)
  
    def sunroof(self):
        print("Not having this feature")

// # Create a child class
class Suv(Car):
    def printDetails(self):
        print("Brand:", self.brand)
        print("Model:", self.model)
        print("Year:", self.year)
  
    def sunroof(self):
        print("Available")

// # Create an instance of the Hatchback class
car1 = Hatchback("Maruti", "Alto", "2022")

// # Call methods
car1.printDetails()
car1.accelerate()
car1.sunroof()`
                }
            ]
        },
        {
            id: 1,
            title: "Polymorphism",
            note: [
                {
                    text1: `Polymorphism means <b>"many forms"</b>. In Python, it refers to the ability of different classes to provide different implementations for methods that share the same name.
                    
                    <b>Real-life Example</b>:
    -> A person behaves differently as a teacher, a father, or a friend — depending on the situation.
    -> Similarly, in Python, a method name can behave differently based on the object calling it.

    <b>Method Overriding</b>
    Method overriding is a fundamental concept in <u>object-oriented programming (OOP)</u> that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

This concept is crucial as it enables polymorphism, where different classes can implement methods in different ways while sharing the same method name. By overriding methods, developers can customise or extend the behavior of inherited methods without altering the original class.

<b>Implementation in Python</b>
In Python, method overriding occurs when a subclass defines a method with the same name and signature as a method in its superclass. When an instance of the subclass calls this method, the overridden version in the subclass executes, replacing the superclass's method.

This behavior demonstrates Python's support for dynamic method dispatch, a key feature of polymorphism.

To override a method in Python, you simply define a method in the subclass with the same name as the one in the superclass. Python does not require any special syntax for overriding methods, making it straightforward to implement. Here's an example:(Ex: 1)

    <b>Method Overloading</b>
    Method overloading is a feature in programming that allows multiple methods to have the same name but different parameters. It enhances code readability and reusability by enabling methods to perform different tasks based on the arguments passed.

This concept is particularly useful in data science for creating flexible and adaptable functions, such as those used in data manipulation or statistical calculations.

<b>NOTE</b> : last definition overrides the previous one.
def greet():
    print("Hello!")

def greet(name):
    print(f"Hello, {name}!")

greet("Anand")
 What happened?

    -> The first greet() was <b>overwritten (shadowed)</b> by the second one.
    -> Python only keeps the last defined function with a given name.
    -> So calling greet() without a parameter now gives an error:
TypeError: greet() missing 1 required positional argument: \`name\`


<b>Implementation in Python</b>
Unlike some other programming languages, Python does not support method overloading natively. In Python, defining multiple methods with the same name within a class will overwrite the previous definitions. However, Python's dynamic nature and support for default arguments, variable-length arguments, and keyword arguments allow for similar functionality.

To achieve method overloading, developers can use default arguments or variable-length arguments (*args and **kwargs). These techniques enable a single method to handle different numbers and types of arguments, simulating the effect of method overloading.(Ex : 4)

<b>*args</b>	Variable number of positional arguments	<u>Tuple</u>
<b>**kwargs</b>	Variable number of keyword arguments	<u>Dictionary</u>

    <b>Note</b>: Python does not support method overloading. We may overload the methods but can only use the latest defined method.

 <b>   Practical Applications in Data Science</b>
Understanding method overloading and overriding in Python has practical benefits in data science. These concepts play a critical role in simplifying and enhancing various data science tasks, from preprocessing data to evaluating models and customising algorithms.


<table class="table table-bordered" style="text-align: center;">
<tbody>
<tr>
<th><p style="text-align: center; ">Method Overloading </p></th>
<th><p style="text-align: center; ">Method Overriding</p></th>
</tr>
<tr>
<td><p style="text-align: left; ">Refers to defining multiple methods with the same name but different parameters</p></td>
<td><p style="text-align: left;">Refers to defining a method in a subclass that has the same name as the one in its superclass</p></td>
</tr>
<tr>
<td><p style="text-align: left;">Can be achieved in Python using default arguments</p></td>
<td><p style="text-align: left;">Can be achieved by defining a method in a subclass with the same name as the one in its superclass</p></td>
</tr>
<tr>
<td><p style="text-align: left;">Allows a class to have multiple methods with the same name but different behaviors based on the input parameters </p></td>
<td><p style="text-align: left;">Allows a subclass to provide its own implementation of a method defined in its superclass </p></td>
</tr>
<tr>
<td><p style="text-align: left;">The choice of which method to call is determined at compile-time based on the number and types of arguments passed to the method </p></td>
<td><p style="text-align: left;">The choice of which method to call is determined at runtime based on the actual object being referred to </p></td>
</tr>
<tr>
<td><p style="text-align: left;">Not supported natively in Python</p></td>
<td><p style="text-align: left;">Supported natively in Python</p></td>
</tr>
</tbody>
</table>
    `,
                    code1: `//------------- Ex : 1 ----------
class Animal:
    def speak(self):
        return "Animal Make a Sound"

class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Bark"

# Polymorphism in action
def animal_sound(animal):
    print(animal.speak())

animal = Animal()
cat = Cat()
dog = Dog()

animal_sound(cat)  # Output: Meow
animal_sound(dog)  # Output: Bark
animal_sound(animal)


//------------- Ex : 2 ----------
// Built-in Polymorphism Example:
print(len("Python"))   # 6 (length of string)
print(len([1, 2, 3]))   # 3 (length of list)
print(len({1: "a", 2: "b"}))  # 2 (length of dict)
    // len() behaves differently for string, list, and dictionary — but the function name is the same.


//------------- Ex : 3 ----------
    //  Polymorphism with Inheritance:

class Animal:
    def speak(self):
        return "Some sound"

class Cow(Animal):
    def speak(self):
        return "Moo"

animal = Animal()
cow = Cow()

print(animal.speak())  # Some sound
print(cow.speak())     # Moo

// Here, Cow overrides the speak() method from Animal. That's runtime polymorphism (method overriding).

//------------- Ex : 4 ----------

class Calculator:
    def add(self, a, b=2):
        return a+b

calc = Calculator()
print(calc.add(5))           # Output: 5
print(calc.add(5, 10))       # Output: 15


//-------------  Ex:5 -----------
//Using Variable-Length Arguments
class Calculator:
    def add(self, *args):
        return sum(args)

calc = Calculator()
print(calc.add(5))           # Output: 5
print(calc.add(5, 10))       # Output: 15
print(calc.add(1, 2, 3, 4))  # Output: 10

//------------- Ex : 6 ----------
class Person:
    def show_info(self, **kwargs):
        for key, value in kwargs.items():
            print(f"{key}: {value}")

p = Person()
p.show_info(name="Anand", age=30)
p.show_info(name="Ravi", location="Hyderabad", hobby="Reading")


//------------ Ex : 7 ---------
class Circle:
    def draw(self):
        print("Drawing circle")

class Rectangle:
    def draw(self):
        print("Drawing rectangle")

for shape in [Circle(), Rectangle()]:
    shape.draw()


// ------------ Ex : 8 ----------
class Car:
    def __init__(self, car_break, modal, speed):
        self.car_break = car_break
        self.modal = modal
        self.speed = speed

    def start(self):
        print(f"{self.modal} car started with {self.speed}")

    def stop(self):
        print(f"cat stopped with breaks{self.car_break}")


class Motorcycle:
    def __init__(self, car_break, modal, speed):
        self.car_break = car_break
        self.modal = modal
        self.speed = speed

    def start(self):
        print(f"{self.modal} car started with {self.speed}")

    def stop(self):
        print(f"cat stopped with breaks{self.car_break}")


vehicles = [Car("break On", "patha modal", "100/km"), Motorcycle("break On", "chala kotha modal", "40/km")]

for v in vehicles:
    
    if isinstance(v, Car):
        print("Car---------")
        v.start()
        v.stop()
    
    if isinstance(v, Motorcycle):
        print("Motarcycle--------")
        v.start()
        v.stop()

`
                }
            ]
        },
        {
            id: 1,
            title: "protected vs private attributes",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "operator overloading",
            note: [
                {
                    text1: `<b>Operator Overloading</b> means giving extended meaning to Python operators (+, -, *, ==, etc.) so they work with <b>user-defined objects.</b>
                    Python treats operators as <b>syntactic sugar</b> for method calls (a + b → a.__add__(b)).
                    
                ( <b>Ex : 1</b> )Operator Overloading means giving extended meaning beyond their predefined operational meaning. For example operator + is used to add two integers as well as join two strings and merge two lists. It is achievable because '+' operator is overloaded by int class and str class. You might have noticed that the same built-in operator or function shows different behavior for objects of different classes, this is called Operator Overloading. 

                    Operator overloading in Python allows the customization of behavior for built-in operators (like <b>+, -, *, /, ==, <,</b> etc.) when applied to instances of user-defined classes. This means that you can define how your custom objects interact with these operators, enhancing code readability and making your objects behave more intuitively.
                    
                    ( <b>Ex : 3</b> )implementing operator overloading with the <b>+</b> operator for your <b>Student</b> class using the <b>__add__</b> method.`,
                    code1: `    def __add__(self, value: int, /) -> int: ...
    def __sub__(self, value: int, /) -> int: ...
    def __mul__(self, value: int, /) -> int: ...
    def __floordiv__(self, value: int, /) -> int: ...
    def __truediv__(self, value: int, /) -> float: ...
    def __mod__(self, value: int, /) -> int: ...
    def __divmod__(self, value: int, /) -> tuple[int, int]: ...
    def __radd__(self, value: int, /) -> int: ...
    def __rsub__(self, value: int, /) -> int: ...
    def __rmul__(self, value: int, /) -> int: ...
    def __rfloordiv__(self, value: int, /) -> int: ...
    def __rtruediv__(self, value: int, /) -> float: ...
    def __rmod__(self, value: int, /) -> int: ...
    def __rdivmod__(self, value: int, /) -> tuple[int, int]: ...
    // -----------  Ex : 1 -----------
//     # Python program to show use of
// # + operator for different purposes.

print(1 + 2)

// # concatenate two strings
print("Geeks"+"For") 

// # Product two numbers
print(3 * 4)

// # Repeat the String
print("Geeks"*4)

    // ------------ Ex : 2 ----------------                         
    a = 5
    b = 9
    print(int.__add__(a, b))

    // ------------ Ex : 3 ----------------   
    class Student:
    def __init__(self, m1, m2):
        self.m1 = m1
        self.m2 = m2

    def __add__(self, o):
        m1 = self.m1 + o.m1
        m2 = self.m2 + o.m2
        s3 = Student(m1,m2)
        return s3

    s1 = Student(50,51)
    s2 = Student(40,41)

    s3 = s1+s2

    print(s3.m1) # 50, 40
    print(s3.m2) # 51, 41

    //------------ Ex : 4 ----------
    # Python Program to perform addition 
    # of two complex numbers using binary 
    # + operator overloading.

    class complex:
        def __init__(self, a, b):
            self.a = a
            self.b = b

        # adding two objects 
        def __add__(self, other):
            return self.a + other.a, self.b + other.b

        Ob1 = complex(1, 2)
        Ob2 = complex(2, 3)
        Ob3 = Ob1 + Ob2
        print(Ob3)
    `
                }
            ]
        },
        {
            id: 1,
            title: "getters and setters",
            note: [
                {
                    text1: `<b>Getter</b>: A method used to <b>read</b> (access) the value of a private attribute.
<b>Setter</b>: A method used to <b>modify</b> (update) the value of a private attribute.
In Python, you can define them <b>manually</b> or use the <b>@property decorator</b>.`,
                    code1: `
// --------- Ex : 1 -----------
//Using Methods
class Person:
    def __init__(self, name):
        self.__name = name  # private variable

    def get_name(self):      # getter
        return self.__name

    def set_name(self, new_name):  # setter
        if len(new_name) >= 2:
            self.__name = new_name
        else:
            print("Name is too short.")

            // Output:
            p = Person("Anand")
print(p.get_name())     # Anand

p.set_name("A")         # Name is too short.
print(p.get_name())     # Anand

p.set_name("Arun")
print(p.get_name())     # Arun


// --------- Ex : 2 -----------
// Using @property (Pythonic way)
class Person:
    def __init__(self, name):
        self.__name = name

    @property
    def name(self):        # getter
        return self.__name

    @name.setter
    def name(self, value):  # setter
        if len(value) >= 2:
            self.__name = value
        else:
            print("Invalid name!")

            //Output:
            p = Person("Anand")
print(p.name)           // # Anand

p.name = "A"            // # Invalid name!
print(p.name)           // # Anand

p.name = "Kumar"
print(p.name)           // # Kumar


// --------- Ex : 3 -----------
class Customer:
    def __init__(self, name, phoneno):
        self.name = name
        self.phoneno = phoneno

    def get_name(self):
        return self.name 
    
    def get_phoneno(self):
        return self.phoneno
    
    def set_phoneno(self, ph):
        self.phoneno = ph



cus = Customer("ram", 51654565)
print(cus.get_name())
print(cus.get_phoneno())
print("---------------------")
cus.set_phoneno(4454984)
print(cus.get_name())
print(cus.get_phoneno())


// --------- Ex : 4 -----------
class CurrencyConvertor:
    def __init__(self, currency, rate):
        self.currency = currency
        self.rate = rate

    def get_currency(self):
        return self.currency
    
    def set_currency(self, cu):
        self.currency = cu 

    def get_rate(self):
        return self.rate
    
    def set_rate(self, r):
        self.rate = r 

    def convert(self, amount):
        return f"{self.currency} - {self.rate * amount}"

cc = CurrencyConvertor("USD", 70)

print(cc.convert(82))
cc.set_currency("UNA")
cc.set_rate(90)
print(cc.convert(100))

`
                }
            ]
        },
        {
            id: 1,
            title: "Static methods",
            note: [
                {
                    text1: `A <b>static method</b> is a method that <b>belongs to a class</b> rather than an instance. It <b>does not access or modify class or instance variables.</b>
                    
                    a <b>static method</b> is a type of method that does not require any instance to be called. It is very similar to the class method but the difference is that the static method doesn't have a mandatory argument like reference to the object - <b>self</b> or reference to the class - <b>cls</b>.

                    There can be some functionality that relates to the class, but does not require any instance(s) to do some work, static methods can be used in such cases. A static method is a method which is bound to the class and not the object of the class. It can't access or modify class state. It is present in a class because it makes sense for the method to be present in class. A static method does not receive an implicit first argument. 

                    <b>How to Create Static Method in Python?</b>
There are two ways to create Python static methods -
Using staticmethod() Function
Using @staticmethod Decorator

<b>Using staticmethod() Function</b>
Python's standard library function named staticmethod() is used to create a static method. It accepts a method as an argument and converts it into a static method.

Syntax
staticmethod(method)

When function decorated with @staticmethod is called, we don't pass an instance of the class to it as it is normally done with methods. It means that the function is put inside the class but it cannot access the instance of that class. <b>Example #1</b>:

<b>Static vs Class vs Instance Methods</b>
<table data-start="1391" data-end="1973" class="w-fit min-w-(--thread-content-width)"><thead data-start="1391" data-end="1507"><tr data-start="1391" data-end="1507"><th data-start="1391" data-end="1410" data-col-size="sm">Type</th><th data-start="1410" data-end="1429" data-col-size="sm">Decorator</th><th data-start="1429" data-end="1446" data-col-size="sm">Access <code data-start="1438" data-end="1444">self</code>?</th><th data-start="1446" data-end="1462" data-col-size="sm">Access <code data-start="1455" data-end="1460">cls</code>?</th><th data-start="1462" data-end="1507" data-col-size="md">Use Case</th></tr></thead><tbody data-start="1626" data-end="1973"><tr data-start="1626" data-end="1741"><td data-start="1626" data-end="1645" data-col-size="sm">Instance Method</td><td data-col-size="sm" data-start="1645" data-end="1664"><em data-start="1647" data-end="1663">(no decorator)</em></td><td data-col-size="sm" data-start="1664" data-end="1680">✅ Yes</td><td data-col-size="sm" data-start="1680" data-end="1695">❌ No</td><td data-col-size="md" data-start="1695" data-end="1741">Regular methods, need object state</td></tr><tr data-start="1742" data-end="1857"><td data-start="1742" data-end="1761" data-col-size="sm">Class Method</td><td data-col-size="sm" data-start="1761" data-end="1780"><code data-start="1763" data-end="1777">@classmethod</code></td><td data-col-size="sm" data-start="1780" data-end="1796">❌ No</td><td data-col-size="sm" data-start="1796" data-end="1811">✅ Yes</td><td data-col-size="md" data-start="1811" data-end="1857">Access/modify class state (<code data-start="1840" data-end="1845">cls</code>)</td></tr><tr data-start="1858" data-end="1973"><td data-start="1858" data-end="1877" data-col-size="sm">Static Method</td><td data-col-size="sm" data-start="1877" data-end="1896"><code data-start="1879" data-end="1894">@staticmethod</code></td><td data-col-size="sm" data-start="1896" data-end="1912">❌ No</td><td data-col-size="sm" data-start="1912" data-end="1927">❌ No</td><td data-col-size="md" data-start="1927" data-end="1973">Utility methods not tied to object or class</td></tr></tbody></table>

                    `,
                    code1: `//✅ Syntax:

                            class MyClass:
                                @staticmethod
                                def my_static_method():
                                    print("I'm a static method")

                            You can call it using:

                            MyClass.my_static_method()  # ✅ Recommended
                            obj = MyClass()
                            obj.my_static_method()      # ✅ Also works


//---------------- Ex: 1 -----------
//                     # Python program to 
// # demonstrate static methods
class Maths():
    
    @staticmethod
    def addNum(num1, num2):
        return num1 + num2
        
// # Drive s code
if __name__ == "__main__":
    
    // # Calling method of class
    // # without creating instance
    res = Maths.addNum(1, 2)
    print("The result is", res)


//---------------- Ex: 2 -----------
class Calculator:
    @staticmethod
    def add(a, b):
        return a + b
    def sub(a, b):
        return a - b
    def mul(a, b):
        return a * b
    def div(a, b):
        return a/b
    

print(Calculator.add(5, 2))
print(Calculator.sub(5, 2))
print(Calculator.mul(5, 2))
print(Calculator.div(5, 2))
    `
                }
            ]
        },
        {
            id: 1,
            title: "@classmethod",
            note: [
                {
                    text1: ``,
                    code1: `class Emp:
                            emp_count = 101
                            def __init__(self, name, salary, designation):
                                self.name = name
                                self.emp_id = "e" + str(Emp.emp_count)
                                Emp.emp_count += 1
                                self.salary = salary
                                self.designation = designation

                            
                            def show_details(self):
                                return f"{self.emp_id}, {self.salary}, {self.designation}"
                            
                            @classmethod
                            def total_emp(cls):
                                return cls.emp_count - 1
                            
                        em1 = Emp("Ram",15000,"engineer")
                        em2 = Emp("Ram",18000,"CA")
                        em3 = Emp("Ram",18000,"HR")
                        print(em1.show_details())
                        print(em2.show_details())
                        print(em3.show_details())
                        print(Emp.total_emp())`,
                }
            ]
        },
        {
            id: 1,
            title: "self vs cls",
            note: [
                {
                    text1: ` we have <b>self</b> and <b>cls</b> “keywords” 
                    <b>self</b>
    Refers to the <b>current instance</b> of the class.
    Used in <b>instance methods.</b>
    Lets you access or modify <b>instance variables</b> (data unique to each object).
    
    
    <b>cls</b>
    Refers to the <b>class itself</b>, not an instance.
    Used in <b>class methods.</b>
    Lets you access or modify <b>class-level attributes</b> (shared across all instances).
To use cls, you must use the <b>@classmethod</b> decorator.
`,
                    code1: `//  ---------- Ex : 1  ----------
                    class Dog:
    def __init__(self, name, age):
        // # Instance variables initialized using self
        self.name = name
        self.age = age

    def speak(self):
        // # Accessing instance variable using self
        return f"{self.name} says woof!"

    def birthday(self):
        // # Modifying instance variable using self
        self.age += 1
        return f"Happy Birthday, {self.name}! You are now {self.age} years old."

    def get_info(self):
        return f"{self.name} is {self.age} years old."



        // # Creating dog objects
dog1 = Dog("Tommy", 5)
dog2 = Dog("Rocky", 3)

// # Calling instance methods
print(dog1.speak())        # Tommy says woof!
print(dog2.get_info())     # Rocky is 3 years old.

// # Celebrate Rocky's birthday
print(dog2.birthday())     # Happy Birthday, Rocky! You are now 4 years old.
print(dog2.get_info())     # Rocky is 4 years old.

// Output:---
// Tommy says woof!
// Rocky is 3 years old.
// Happy Birthday, Rocky! You are now 4 years old.
// Rocky is 4 years old.

                    
                    //  ---------- Ex : 2  ----------
                    // To use cls, you must use the @classmethod decorator.
                    class Dog:
    species = "Canis familiaris"

    @classmethod
    def get_species(cls):
        return cls.species

        // ----------- Ex : 3 -----------
        class Dog:
    # Class variable shared by all Dog instances
    species = "Canis familiaris"

    # Constructor: initializes instance variables
    def __init__(self, name, age):
        self.name = name      # instance variable
        self.age = age        # instance variable

    # Instance method using 'self'
    def speak(self):
        return f"{self.name} barks!"

    # Another instance method
    def get_details(self):
        return f"{self.name} is {self.age} years old."

    # Class method using 'cls' to access class variable
    @classmethod
    def get_species(cls):
        return f"All dogs belong to the species: {cls.species}"

    # Class method to change species for all dogs
    @classmethod
    def change_species(cls, new_species):
        cls.species = new_species


        # Creating two dog objects
dog1 = Dog("Tommy", 5)
dog2 = Dog("Rocky", 3)

# Instance method calls
print(dog1.speak())           # Tommy barks!
print(dog2.get_details())     # Rocky is 3 years old.

# Class method call
print(Dog.get_species())      # All dogs belong to the species: Canis familiaris

# Changing species using class method
Dog.change_species("Canis lupus")

# Check updated species
print(dog1.get_species())     # All dogs belong to the species: Canis lupus
print(dog2.get_species())     # All dogs belong to the species: Canis lupus


// Tommy barks!
// Rocky is 3 years old.
// All dogs belong to the species: Canis familiaris
// All dogs belong to the species: Canis lupus
// All dogs belong to the species: Canis lupus

`
                }
            ]
        },
        {
            id: 1,
            title: "MRO (Method Resolution Order)",
            note: [
                {
                    text1: `<b>MRO (Method Resolution Order)</b> is the order in which Python <b>looks up methods and attributes</b> when you call them on an object — especially when <b>multiple inheritance</b> is involved.
                
                <b>Why is MRO important?</b>
When a class inherits from multiple parent classes, the same method or attribute might be defined in more than one parent.
MRO helps Python decide:
<b>🧭 "Which class's method should be used first?"</b>
<b>Python uses the C3 Linearization Algorithm to compute MRO.</b>

<b>1. Using .mro() method</b>:
print(D.mro())

<b>✅ 2. Using built-in function super()</b>:
    -> <b>super()</b> uses MRO under the hood.
    -> So calling <b>super().method()</b> always follows the MRO chain.

    <b>What is &lt;class &#39;object&#39;&gt; in Python?</b>
    In Python, object is the base class for all classes.

When you see &lt;class &#39;object&#39;&gt; in MRO like this:
print(D.mro())
[&lt;class &#39;__main__.D&#39;&gt;, &lt;class &#39;__main__.B&#39;&gt;, &lt;class &#39;__main__.C&#39;&gt;, &lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;object&#39;&gt;]
D → B → C → A → object <b>( Ex : 1 )</b>
It means the class <b>D (and its parents)</b> ultimately inherit from Python's <b>built-in object</b> class.

Why is <b>object</b> important?
    It's the <b>top-most parent</b> in Python's class hierarchy.
    All classes (even your custom classes) <b>automatically inherit from object</b>, either directly or indirectly.

    class A:
    pass
    print(A.mro())
✅ Output:
[&lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;object&#39;&gt;]
                `,
                    code1: `// ----------- Ex : 1 -----------
        class A:
            def show(self):
                print("A")

        class B(A):
            def show(self):
                print("B")

        class C(A):
            def show(self):
                print("C")

        class D(B, C):
            pass

        d = D()
        d.show()
        // Output: B
        print(D.mro())
[&lt;class &#39;__main__.D&#39;&gt;, &lt;class &#39;__main__.B&#39;&gt;, &lt;class &#39;__main__.C&#39;&gt;, &lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;object&#39;&gt;]
// D → B → C → A → object
`,
                }
            ]
        },
        {
            id: 1,
            title: "Dependency Injection",
            note: [
                {
                    text1: ` Dependency Injection means giving an object the dependencies it needs from outside, instead of creating those dependencies inside the object.

                    Dependency Injection is a design pattern where an object's dependencies are provided from outside rather than being created by the object itself. It helps achieve loose coupling and improves testability and maintainability.
                    
                    This leads to loose coupling → easier testing → easier maintenance → easier replacement of implementations.
                    
                    <b>7. Types of Dependency Injection</b>
                    There are three commonly discussed types:
                    <b>1. Constructor Injection ⭐</b>
                    Most common and recommended.
                    class UserService:
                        def __init__(self, database):
                            self.database = database
                    Dependency is passed through the constructor.

                    <b>2. Setter/Property Injection</b>
                    Dependency is assigned after object creation.
                    class UserService:
                        def set_database(self, database):
                            self.database = database

                    Usage:
                    service = UserService()
                    service.set_database(database)

                    <b>3. Method Injection</b>
                    Dependency is passed directly to a method.
                    class UserService:
                        def create_user(self, user, database):
                            database.save(user)

                    Usage:
                    service = UserService()
                    service.create_user("Anand", database)

                    <a href="https://github.com/anand-developer01/python-programs/blob/main/DependencyInjection.py" target="_blank">Dependency Injection</a>
                `,
                    code1: `// --------------   -----------
                    class MySQLDatabase:
                    def save(self, user):
                        print("Saving user to MySQL")


                    class UserService:
                        def __init__(self, database):
                            self.database = database

                        def create_user(self, user):
                            self.database.save(user)
                            
                            database = MySQLDatabase()

                    service = UserService(database)

                    service.create_user("Anand")


                    // -------- Real Example ---------
                    class EmailService:
                    def send(self, message):
                        print("Sending email")


                    class NotificationService:
                        def __init__(self, email_service):
                            self.email_service = email_service

                        def notify(self, message):
                            self.email_service.send(message)

                    //We inject EmailService:

            email_service = EmailService()
            notification_service = NotificationService(email_service)
            notification_service.notify("Welcome Anand")
`
                }
            ]
        },
        {
            id: 1,
            section: `Errors & Exceptions`,
            title: "What is Exception Handling?",
            note: [
                {
                    text1: `Exception handling allows you to catch and manage runtime errors in your code, so the application doesn't crash and can respond gracefully.
                    
                    Python Exception Handling handles errors that occur during the execution of a program. Exception handling allows to respond to the error, instead of crashing the running program. It enables you to catch and manage errors, making your code more robust and user-friendly. 
                    
                    <b>Difference Between Exception and Error</b>
<b>Error</b>: Errors are serious issues that a program should not try to handle. They are usually problems in the code's logic or configuration and need to be fixed by the programmer. Examples include syntax errors and memory errors.
<b>Exception</b>: Exceptions are less severe than errors and can be handled by the program. They occur due to situations like invalid input, missing files or network issues.

<b>Syntax and Usage</b>
try:
      # Code that might raise an exception
except SomeException:
      # Code to handle the exception
else:
     # Code to run if no exception occurs
finally:
    # Code to run regardless of whether an exception occurs
    
    <b>try, except, else and finally Blocks</b>
<b>try Block</b>: try block lets us test a block of code for errors. Python will "try" to execute the code in this block. If an exception occurs, execution will immediately jump to the except block.
<b>except Block</b>: except block enables us to handle the error or exception. If the code inside the try block throws an error, Python jumps to the except block and executes it. We can handle specific exceptions or use a general except to catch all exceptions.
<b>else Block</b>: else block is optional and if included, must follow all except blocks. The else block runs only if no exceptions are raised in the try block. This is useful for code that should execute if the try block succeeds.
The <b>else</b> block <b>executes only if there is no error</b> in the <b>try</b> block.
<b>finally Block</b>: finally block always runs, regardless of whether an exception occurred or not. It is typically used for cleanup operations (closing files, releasing resources).

<b>1. Catching Multiple Exceptions</b>
We can catch multiple exceptions in a single block if we need to handle them in the same way or we can separate them if different types of exceptions require different handling.

<b>2. Custom Exception Classes Ex : 4, Ex : 5, Ex : 6</b>
For domain-specific errors, define your own exceptions:

<b>3. Logging Exceptions</b>
In production apps (Flask/Django), you shouldn't just print() errors — you should log them.

import logging
logging.basicConfig(level=logging.ERROR)
try:
    1 / 0
except ZeroDivisionError as e:
    logging.error("Error occurred: %s", e)

    <b>4. Re-raising Exceptions : Ex : 3</b>
Sometimes you want to log or partially handle, but still raise the error up:

<b>5. Exception Handling in async / await</b>
Async code can raise exceptions too:

async def fetch_data():
    try:
        response = await some_async_call()
    except TimeoutError:
        print("Request timed out")

    <b>6. Global Exception Handling in Flask</b>
Useful for consistent API error responses:
from flask import jsonify

@app.errorhandler(Exception)
def handle_global_error(e):
    return jsonify(error=str(e)), 500

    <b>7. Returning Structured JSON Error Responses</b>
Build a standard JSON format for your API:

{
  "success": False,
  "error": {
    "type": "ValueError",
    "message": "Invalid input value"
  }
}

<b>Exception hierarchy (built-in exceptions) </b>
BaseException
 └── Exception
     ├── ArithmeticError
     │   ├── ZeroDivisionError
     │   └── OverflowError
     ├── LookupError
     │   ├── IndexError
     │   └── KeyError
     ├── TypeError
     ├── ValueError
     ├── FileNotFoundError
     └── ...

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Exception</th>
      <th>When it Occurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ZeroDivisionError</code></td>
      <td>Division or modulo by zero (<code>10 / 0</code>)</td>
    </tr>
    <tr>
      <td><code>ValueError</code></td>
      <td>Invalid value passed (e.g. <code>int("abc")</code>)</td>
    </tr>
    <tr>
      <td><code>TypeError</code></td>
      <td>Operation between wrong types (e.g. <code>"1" + 2</code>)</td>
    </tr>
    <tr>
      <td><code>IndexError</code></td>
      <td>Accessing out-of-range list index (<code>mylist[5]</code>)</td>
    </tr>
    <tr>
      <td><code>KeyError</code></td>
      <td>Accessing a non-existent dictionary key</td>
    </tr>
    <tr>
      <td><code>FileNotFoundError</code></td>
      <td>Opening a file that doesn't exist</td>
    </tr>
    <tr>
      <td><code>NameError</code></td>
      <td>Using a variable that hasn't been defined</td>
    </tr>
    <tr>
      <td><code>AttributeError</code></td>
      <td>Calling a non-existent method on an object</td>
    </tr>
    <tr>
      <td><code>ImportError</code></td>
      <td>Module not found during <code>import</code></td>
    </tr>
    <tr>
      <td><code>IndentationError</code></td>
      <td>Wrong indentation in code</td>
    </tr>
    <tr>
      <td><code>SyntaxError</code></td>
      <td>Invalid Python syntax</td>
    </tr>
    <tr>
      <td><code>RuntimeError</code></td>
      <td>A generic error that doesn't fit other categories</td>
    </tr>
    <tr>
      <td><code>StopIteration</code></td>
      <td>Raised by <code>next()</code> when no items are left</td>
    </tr>
    <tr>
      <td><code>MemoryError</code></td>
      <td>Not enough memory to continue execution</td>
    </tr>
    <tr>
      <td><code>PermissionError</code></td>
      <td>Access denied (e.g. opening a restricted file)</td>
    </tr>
    <tr>
      <td><code>OSError</code></td>
      <td>General OS-level error (disk I/O, network fail, etc.)</td>
    </tr>
    <tr>
      <td><code>TimeoutError</code></td>
      <td>Operation exceeded allowed time</td>
    </tr>
    <tr>
      <td><code>RecursionError</code></td>
      <td>Maximum recursion depth exceeded</td>
    </tr>
  </tbody>
</table>

    `,
                    code1: `//----------- Ex : 1 ----------
                    // # ZeroDivisionError (Exception)
n = 10
res = n / 0



//----------- Ex : 2 ----------
try:
    # Risky code here
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero.")


   //----------- Ex : 2 ----------
   try:
    n = 0
    res = 100 / n
    
except ZeroDivisionError:
    print("You can't divide by zero!")
    
except ValueError:
    print("Enter a valid number!")
    
else:
    print("Result is", res)
    
finally:
    print("Execution complete.") 

//----------- Ex : 2 ----------
// Catching Multiple Exceptions
    a = ["10", "twenty", 30]  # Mixed list of integers and strings
try:
    total = int(a[0]) + int(a[1])  # 'twenty' cannot be converted to int
    
except (ValueError, TypeError) as e:
    print("Error", e)
    
except IndexError:
    print("Index out of range.")


    // ---------- Ex : 3 --------
    // def risky_function():
    raise ValueError("Something went wrong")

try:
    risky_function()
except Exception as e:
    print("Logging the error")
    raise  # re-raise the same exception


    // ---------- Ex : 4 --------
class UnderAgeError(Exception):
    def __init__(self, age, message="Age must be 18 or above"):
        self.age = age
        self.message = message
        super().__init__(f"{message}. Provided: {age}")

def register_user(age):
    if age < 18:
        raise UnderAgeError(age)
    return "User registered successfully!"

try:
    print(register_user(15))
except UnderAgeError as e:
    print("Custom Error Caught:", e)


    // ---------- Ex : 5 --------
from flask import Flask, jsonify

# ✅ Define app first
app = Flask(__name__)

# ✅ Define custom exception
class InvalidID(Exception):
    def __init__(self, message="Invalid user ID"):
        self.message = message
        super().__init__(self.message)

# ✅ Route using custom exception
@app.route('/user/<int:user_id>')
def get_user(user_id):
    if user_id <= 0:
        raise InvalidID("User ID must be a positive number")
    return jsonify({"user_id": user_id})

# ✅ Custom error handler
@app.errorhandler(InvalidID)
def handle_invalid_id(e):
    return jsonify({"error": str(e)}), 400

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)


    // ---------- Ex : 6 --------
    from flask import Flask, jsonify, request

app = Flask(__name__)

# ✅ Custom Exception Class
class UnderAgeError(Exception):
    def __init__(self, age, message="User must be 18 years or older"):
        self.age = age
        self.message = message
        super().__init__(f"{message}. Given age: {age}")

# ✅ Route that uses custom exception
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    age = data.get("age")

    try:
        if age is None:
            raise ValueError("Age is required")
        if age < 18:
            raise UnderAgeError(age)

        return jsonify({"message": "Registration successful!"})
    
    except UnderAgeError as e:
        return jsonify({"error": str(e)}), 400
    
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 422

# ✅ Optional: Handle all unknown exceptions globally
@app.errorhandler(Exception)
def handle_unexpected_error(e):
    return jsonify({"error": f"Internal server error: {str(e)}"}), 500

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)

`
                }
            ]
        },
        {
            id: 1,
            title: "**try / except",
            note: [
                {
                    text1: `Exception handling is used when your program encounters an error while running.
                    
                    The try...except block in Python is a control flow structure used to intercept runtime errors, preventing your program from crashing abruptly. When an error occurs inside the guarded section, Python stops normal execution and jumps to the handling block.

    <b>Syntax Components</b>
    <b>try</b>: Houses the risky code that has the potential to raise an exception.
    <b>except</b>: Captures specific error types and executes fallback logic when an exception is triggered.
    <b>else</b>: Runs only if the try block executes successfully without raising any exceptions.
    <b>finally</b>: Executes unconditionally at the end, making it ideal for cleanup tasks like closing files or database connections.
    
    <b>For example:</b>
num = int(input("Enter a number: "))
print(10 / num)

If the user enters:
0
Python raises:
ZeroDivisionError: division by zero
<b>Exception handling</b> lets a Python program respond to runtime errors without stopping unexpectedly.

<b>1. Basic try / except</b>
The basic syntax is:
<span style="color:#ac4561">try:
    # code that might cause an error
except:
    # code to execute if an error occurs</span>

Example:
<span style="color:#ac4561">try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(result)

except:
    print("Something went wrong")</span>

If the user enters <span style="color:#ac4561">2</span>, the output is <span style="color:#ac4561">5.0</span>.
If the user enters <span style="color:#ac4561">0</span> or <span style="color:#ac4561">abc</span>, the output is <span style="color:#ac4561">Something went wrong</span>.

Two different exceptions can occur:
<span style="color:#ac4561">ValueError
ZeroDivisionError</span>

<b>2. Catching a specific exception</b>
It is better to specify which exception you want to handle:
<span style="color:#ac4561">try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(result)

except ValueError:
    print("Please enter a valid number")

except ZeroDivisionError:
    print("Cannot divide by zero")</span>

Input <span style="color:#ac4561">abc</span> produces <span style="color:#ac4561">Please enter a valid number</span>.
Input <span style="color:#ac4561">0</span> produces <span style="color:#ac4561">Cannot divide by zero</span>.
Input <span style="color:#ac4561">5</span> produces <span style="color:#ac4561">2.0</span>.

<b>3. Why specify the exception?</b>
Using a bare <span style="color:#ac4561">except:</span> can hide programming bugs:
<span style="color:#ac4561">try:
    num = int(input("Enter number: "))
    result = 10 / num
    print(resultt)   # typo

except:
    print("Error")</span>

The actual problem is <span style="color:#ac4561">NameError</span>, but the bare handler hides it. Prefer a specific handler such as <span style="color:#ac4561">except ValueError:</span> whenever possible.

<b>4. Accessing the exception object</b>
Use <span style="color:#ac4561">as</span> to store the exception in a variable:
<span style="color:#ac4561">try:
    num = int("abc")

except ValueError as error:
    print(error)

# Output: invalid literal for int() with base 10: 'abc'</span>

<b>5. Handling multiple exceptions together</b>
Use a tuple when the same logic applies to multiple exception types:
<span style="color:#ac4561">try:
    num = int(input("Enter number: "))
    print(10 / num)

except (ValueError, ZeroDivisionError):
    print("Invalid operation")</span>

<b>6. try / except / else</b>
The <span style="color:#ac4561">else</span> block executes only when no exception occurs:
<span style="color:#ac4561">try:
    num = int(input("Enter number: "))
    result = 10 / num

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Result:", result)</span>

The flow is:
<span style="color:#ac4561">try
 │
 ├── error → except
 │
 └── no error → else</span>

<b>7. try / except / finally</b>
The <span style="color:#ac4561">finally</span> block always executes, whether an exception occurs or not:
<span style="color:#ac4561">try:
    num = int(input("Enter a number: "))
    print(10 / num)

except ZeroDivisionError:
    print("Cannot divide by zero")

finally:
    print("Program finished")</span>

<b>8. Complete structure</b>
<span style="color:#ac4561">try:
    # risky code

except SomeException:
    # handle error

else:
    # executes when no error

finally:
    # always executes</span>

<b>9. Real-world examples</b>
File operations, API calls, database operations, network requests, and LLM calls can all fail:
<span style="color:#ac4561">try:
    file = open("data.txt")
    data = file.read()

except FileNotFoundError:
    print("File does not exist")

finally:
    print("Finished")

try:
    response = model.generate(prompt)
except TimeoutError:
    print("Model request timed out")</span>

<b>Important:</b> an exception is not the same as a syntax error.
<span style="color:#ac4561">print("Hello"</span> causes a <span style="color:#ac4561">SyntaxError</span> because Python cannot parse the code.
<span style="color:#ac4561">print(10 / 0)</span> is valid syntax but raises the runtime exception <span style="color:#ac4561">ZeroDivisionError</span>.
`,
                    code1: `// The basic syntax is:
            try:
                # code that might cause an error
            except:
                # code to execute if an error occurs
                
                // ------------ Ex : 1 ----------
            try:
                num = int(input("Enter a number: "))
                result = 10 / num
                print(result)

            except:
                print("Something went wrong")`
                }
            ]
        },
        {
            id: 1,
            title: "`raise` in Python",
            note: [
                {
                    text1: `The <b>raise</b> keyword in Python is used to explicitly trigger an exception (an error) during the execution of a program. When a <b>raise</b> statement is encountered, normal program flow stops, and Python looks for a matching <b>try...except</b> block to handle the error.

<b>Key Use Cases</b>
-> <b>Enforcing conditions:</b> Stop code execution if an input or state is invalid, such as when a positive number is required but a negative number is provided.
-> <b>Reraising exceptions:</b> Catch an error, log it or perform cleanup, and pass the same error up the call stack using a bare <b>raise</b>.
-> <b>Custom errors:</b> Raise user-defined exception classes that inherit from Python's built-in <b>Exception</b> class.

<b>1. Enforcing conditions</b>
Use <span style="color:#ac4561">raise</span> when you want to stop execution because a value or state is invalid.
<span style="color:#ac4561">age = -5

if age &lt; 0:
    raise ValueError("Age cannot be negative")</span>

Here, we are saying: <b>"This value is invalid, so don't continue."</b> This is commonly used for <b>input validation</b>.

<b>2. Reraising exceptions</b>
Sometimes you catch an exception, do something with it, such as logging, and then send the same exception upward.
<span style="color:#ac4561">try:
    result = 10 / 0

except ZeroDivisionError:
    print("Logging the error...")
    raise</span>

The important part is:
<span style="color:#ac4561">raise</span>

A bare <span style="color:#ac4561">raise</span> inside <span style="color:#ac4561">except</span> means: <b>"Raise the exact same exception again."</b> It preserves the original exception and traceback.

<b>3. Custom errors</b>
You can create your own exception class by inheriting from <span style="color:#ac4561">Exception</span>.
<span style="color:#ac4561">class InvalidAgeError(Exception):
    pass</span>

Then raise it:
<span style="color:#ac4561">age = 15

if age &lt; 18:
    raise InvalidAgeError("Age must be 18 or above")</span>

Python raises your custom exception:
<span style="color:#ac4561">InvalidAgeError: Age must be 18 or above</span>

This is useful when you want errors that are specific to your application's business logic.

<b>In short</b>
<span style="color:#ac4561">raise
 │
 ├── Validate → reject invalid values
 │
 ├── Reraise → pass an existing exception upward
 │
 └── Custom → raise your application's own errors</span>

<b>raise</b> is used when <b>you want to manually create or trigger an exception</b>.
raise is a keyword in Python that allows you to explicitly trigger an exception. It is commonly used for input validation, enforcing constraints, or signaling that an error condition has occurred. When raise is called, it interrupts the normal flow of the program and transfers control to the nearest enclosing exception handler.

raise is a Python keyword used to manually trigger an exception when a specific condition occurs.

<b>1. Basic example</b>
<span style="color:#ac4561">age = 15

if age &lt; 18:
    raise ValueError("Age must be 18 or above")</span>

Output:
<span style="color:#ac4561">ValueError: Age must be 18 or above</span>

Here, Python did not discover an unexpected error. <b>We intentionally raised the exception.</b>

<b>2. raise with try / except</b>
<span style="color:#ac4561">try:
    age = 15

    if age &lt; 18:
        raise ValueError("You are not eligible")

except ValueError as error:
    print(error)</span>

Output:
<span style="color:#ac4561">You are not eligible</span>

The flow is:
<span style="color:#ac4561">condition
   ↓
raise ValueError
   ↓
except ValueError
   ↓
handle the error</span>

<b>3. Why do we need raise?</b>
Use <span style="color:#ac4561">raise</span> to validate input and stop an operation that cannot continue:
<span style="color:#ac4561">def withdraw(balance, amount):

    if amount &gt; balance:
        raise ValueError("Insufficient balance")

    return balance - amount

print(withdraw(1000, 1500))</span>

Instead of returning an incorrect value, the function tells the caller:
<span style="color:#ac4561">ValueError: Insufficient balance</span>

This is extremely useful for <b>validation</b>.

<b>4. Re-raising an exception</b>
The bare <span style="color:#ac4561">raise</span> inside an <span style="color:#ac4561">except</span> block raises the same exception again:
<span style="color:#ac4561">try:
    num = int("abc")

except ValueError:
    print("Logging the error")
    raise</span>

Output:
<span style="color:#ac4561">Logging the error
ValueError: invalid literal for int() with base 10: 'abc'</span>

This pattern is useful when you want to log or perform an action and then let the error propagate to another layer.

<b>5. raise vs except</b>
Think of them as opposites:
<span style="color:#ac4561">raise
  ↓
"I am creating or triggering an error"

except
  ↓
"I am catching or handling an error"</span>

Example:
<span style="color:#ac4561">def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("b cannot be zero")

    return a / b

try:
    print(divide(10, 0))

except ZeroDivisionError as error:
    print(error)</span>

Output:
<span style="color:#ac4561">b cannot be zero</span>

<a href="https://github.com/anand-developer01/python-programs/blob/main/raise.py" target="_blank">raise Examples</a>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Custom Exceptions in Python",
            note: [
                {
                    text1: `A <b>custom exception</b> is a user-defined exception that you create for a specific situation in your application.

Python already provides built-in exceptions such as <span style="color:#ac4561">ValueError</span>, <span style="color:#ac4561">TypeError</span>, and <span style="color:#ac4561">IndexError</span>. But sometimes these do not clearly describe the problem in your application. That is when you create a custom exception.

<b>1. Creating a Custom Exception</b>
A custom exception is usually created by inheriting from Python's built-in <span style="color:#ac4561">Exception</span> class.
<span style="color:#ac4561">class InsufficientBalanceError(Exception):
    pass</span>

Here:
<span style="color:#ac4561">InsufficientBalanceError</span> is our custom exception.
<span style="color:#ac4561">Exception</span> is the parent or base class.
<span style="color:#ac4561">pass</span> means no additional behavior is needed.

<b>2. Raising a Custom Exception</b>
Use <span style="color:#ac4561">raise</span> to throw your custom exception.
<span style="color:#ac4561">class InsufficientBalanceError(Exception):
    pass

balance = 500
withdraw = 1000

if withdraw &gt; balance:
    raise InsufficientBalanceError("Insufficient balance")

print("Withdrawal successful")</span>

Output:
<span style="color:#ac4561">InsufficientBalanceError: Insufficient balance</span>

When Python reaches <span style="color:#ac4561">raise</span>, normal execution stops and the exception is thrown.

<b>3. Handling a Custom Exception</b>
Catch it using <span style="color:#ac4561">try-except</span>:
<span style="color:#ac4561">class InsufficientBalanceError(Exception):
    pass

try:
    balance = 500
    withdraw = 1000

    if withdraw &gt; balance:
        raise InsufficientBalanceError("Insufficient balance")

except InsufficientBalanceError as error:
    print(error)</span>

Output:
<span style="color:#ac4561">Insufficient balance</span>

<b>4. Custom Exception with Additional Data</b>
A custom exception can also contain additional information.
<span style="color:#ac4561">class InsufficientBalanceError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount

        super().__init__(
            f"Balance is {balance}, but withdrawal amount is {amount}"
        )

try:
    balance = 500
    withdraw = 1000

    if withdraw &gt; balance:
        raise InsufficientBalanceError(balance, withdraw)

except InsufficientBalanceError as error:
    print(error)</span>

Output:
<span style="color:#ac4561">Balance is 500, but withdrawal amount is 1000</span>

The exception object stores:
<span style="color:#ac4561">error.balance
error.amount</span>

<b>5. Real-World Example</b>
Suppose you are building a login system. Instead of using a generic error:
<span style="color:#ac4561">raise ValueError("Invalid login")</span>

Create a meaningful exception:
<span style="color:#ac4561">class InvalidCredentialsError(Exception):
    pass</span>

Then use it:
<span style="color:#ac4561">def login(username, password):
    if username != "admin" or password != "1234":
        raise InvalidCredentialsError("Invalid username or password")

    return "Login successful"

try:
    print(login("admin", "wrong"))

except InvalidCredentialsError as error:
    print(error)</span>

Output:
<span style="color:#ac4561">Invalid username or password</span>

<b>Why use Custom Exceptions?</b>
Custom exceptions make your code:
-> <b>More readable:</b> The exception name explains the problem.
-> <b>More specific:</b> You can catch one particular type of error.
-> <b>Easier to maintain:</b> Business-specific errors are clearly separated.
-> <b>Better for large applications:</b> Different parts of the application can define and handle their own errors.

<b>Key Pattern</b>
<span style="color:#ac4561">class MyCustomError(Exception):
    pass

try:
    if some_condition:
        raise MyCustomError("Something went wrong")

except MyCustomError as error:
    print(error)</span>

<b>In short:</b> A custom exception is a user-defined exception created by inheriting from <span style="color:#ac4561">Exception</span>, allowing you to represent and handle application-specific errors clearly.

<a href="https://github.com/anand-developer01/python-programs/blob/main/custom_exceptions.py" target="_blank">Custom Exceptions Examples</a>`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Multithreading`,
            title: "What is Multithreading?",
            note: [
                {
                    text1: `Running multiple tasks <b>at the same time</b> in a single process using threads.
                    A thread is a lightweight unit of a process
Threads share memory space with the main thread

In Python, multithreading allows you to run multiple threads concurrently within a single process, which is also known as thread-based parallelism. This means a program can perform multiple tasks at the same time, enhancing its efficiency and responsiveness.

A thread is an entity within a process that can be scheduled for execution. Also, it is the smallest unit of processing that can be performed in an OS (Operating System). In simple words, a thread is a sequence of such instructions within a program that can be executed independently of other code. For simplicity, you can assume that a thread is simply a subset of a process! A thread contains all this information in a Thread Control Block (TCB) :

Multithreading in Python involves creating and managing multiple threads within a program. Threads execute concurrently, enabling parallel execution of tasks. This can improve performance, facilitate concurrent operations, and enhance responsiveness, especially for I/O-bound tasks or operations involving waiting.

To achieve multithreading in Python, we can use the following two modules:
The Thread Module
The Threading Module

Each thread runs <b>independently</b>, so:
    Your main program continues
    Background tasks (like a timer, loader, or scheduled function) run in parallel
    
    <b>Delayed Execution</b>	time.sleep() ->	setTimeout()
<b>Repeated Execution</b>	threading.Timer() ->  setInterval()
<b>True Multithreading</b>	threading.Thread ->	Web Workers (kinda)
<b>Async Execution</b>	asyncio ->	JS Promises/async

We use threading.main_thread() function to get the main thread object. In normal conditions, the main thread is the thread from which the Python interpreter was started. name attribute of the thread object is used to get the name of the thread. Then we use the threading.current_thread() function to get the current thread object.

The main thread will exit whenever it has finished executing all the code in your script that is not started in a separate thread. For instance, when you start a new thread using start() method, the main thread will continue to execute the remaining code in the script until it reaches the end and then exit.

<b>Which thread starts first: Main thread or Child thread?</b>
    <b>The main thread always starts first.</b>
It is the entry point of every Python program. When you run a script, it begins executing in the main thread. Only after that can you create and start child threads.
In Python, when a program starts, the default thread that executes the program's code is the Main Thread. Any other threads created within the program, referred to as Child Threads, are initiated by the Main Thread.

Therefore, the Main Thread starts first, as it is the initial entry point for the program's execution. Child threads are subsequently created and started by the Main Thread using methods like <b>Thread.start()</b>. While child threads run concurrently with the Main Thread after being started, the Main Thread is always the first to begin execution.

You can check which thread your code is running on with <b>threading.current_thread() == threading.main_thread().</b>

<b>Key Point for Interviews</b>:
    Even though you call <b>t.start()</b> from the main thread, the actual execution of the child thread is <b>scheduled by the OS</b>, so their <b>execution order may vary</b>, but the <b>main thread always starts first</b>.
`,
                    code1: `
// ------------ Ex : 1 ----------
import threading

def greet():
    print("Hi! I'm running in a thread")
    threading.Timer(2, greet).start()

greet()

                    
                    
// ------------ Ex : 2 ----------
import time

for val in range(10):
    print(val)
    time.sleep(1)

                    
// ------------ Ex : 3 ----------
import threading
import time

def print_hello():
    while True:
        print("Hello from thread")
        time.sleep(2)

# Start background thread
threading.Thread(target=print_hello, daemon=True).start()

# Main thread
for i in range(5):
    print(f"Main loop: {i}")
    time.sleep(1)
          
                    
// ------------ Ex : 4 ----------
// Main Thread Behavior in Python
import threading
import time

def func(x):
   print('Current Thread Details:',threading.current_thread())
   for n in range(x):
      print('Internal Thread Running', n)
   print('Internal Thread Finished...')

t = threading.Thread(target=func, args=(6,))
t.start()

for i in range(3):
   print('Main Thread Running',i)
print("Main Thread Finished...")           
                    
// ------------ Ex : 5 ----------
import threading

def child_task():
    print("Child thread started")

print("Main thread started")

t = threading.Thread(target=child_task)
t.start()

print("Main thread finished")

// Output:
// Main thread started
// Main thread finished
// Child thread started

// Or sometimes:
// Main thread started
// Child thread started
// Main thread finished
                    
                    // ------------ Ex : 6 ----------`
                },
                {
                    text1: `<b>Creating Threads</b> 
                    Using <b>threading.Thread()</b>

                    To create a new thread, we create an object of the Thread class. It takes the 'target' and 'args' as the parameters. The target is the function to be executed by the thread whereas the args is the arguments to be passed to the target function.
                    t1 = threading.Thread(target, args)
t2 = threading.Thread(target, args)

<b>Start a Thread</b>
To start a thread, we use the start() method of the Thread class.
t1.start()
t2.start()
                    `,
                    code1: `// Syntax : 
                    // threading.Thread(target=callable, args=())
                    // ----------- Ex : 1 ---------
                    // Creating Threads - ( threading.Thread() )
                    import threading

def task():
    print("Task running")

t = threading.Thread(target=task)
t.start()



// ----------- Ex : 2 ---------
import threading


def print_cube(num):
    print("Cube: {}" .format(num * num * num))


def print_square(num):
    print("Square: {}" .format(num * num))


if __name__ =="__main__":
    t1 = threading.Thread(target=print_square, args=(10,))
    t2 = threading.Thread(target=print_cube, args=(10,))

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    print("Done!")


// ---------- Ex : 3 --------
import threading
import time

def crawl(link, delay=3):
    print(f"crawl started for {link}")
    time.sleep(delay)  # Blocking I/O (simulating a network request)
    print(f"crawl ended for {link}")

links = [
    "https://python.org",
    "https://docs.python.org",
    "https://peps.python.org",
]

// # Start threads for each link
threads = []
for link in links:
    // # Using \`args\` to pass positional arguments and \`kwargs\` for keyword arguments
    t = threading.Thread(target=crawl, args=(link,), kwargs={"delay": 2})
    threads.append(t)

// # Start each thread
for t in threads:
    t.start()

// # Wait for all threads to finish
for t in threads:
    t.join()
`
                }
            ]
        },
        {
            id: 1,
            title: "Joining Threads",
            note: [
                {
                    definition: `<b>Joining threads</b> means waiting for a thread to complete its execution before the calling thread continues. The <b>join()</b> method is used for this purpose.`,
                    text1: `Wait for a thread to finish using <b>.join()</b>
                    The join() method in Python's threading module is used to block the calling thread (typically the main thread) until the thread on which join() is called has completed its execution. 

                    In Python, thread_object.join() is used to block the calling thread until the thread on which join() is called has finished executing. It ensures that a thread completes its task before the main program or another thread continues. This is essential for managing dependencies between threads and avoiding race conditions.
                    
                    The .join() method delays a program's flow of execution until the target thread has been completely read.
                    
                    The following example features two threads, <b>thread_A</b> and <b>thread_B</b>. Each thread makes a call to <b>.start()</b>, immediately followed by a call to <b>.join()</b>.
                    
                    The second thread, <b>thread_B</b>, cannot start before <b>thread_A</b> is finished due to <b>.join()</b>.`,
                    code1: `
// Syntax
// thread_object.join(timeout)
// ------------- Ex : 1 -----------
import threading
import time

def worker():
    print("Child thread: started")
    time.sleep(2)
    print("Child thread: finished")

# This runs in the main thread
print("Main thread: starting")

t = threading.Thread(target=worker)
t.start()

t.join()  # Main thread waits here

print("Main thread: all done")

// Output:
// Main thread: starting
// Child thread: started
// Child thread: finished
// Main thread: all done

// ------------- Ex : 2 -----------
                    import threading

def is_divisible(dividend, divisor):
  print("Starting...")
  if(dividend % divisor == 0):
    print(True)
  else:
    print(False)
  print("Finished")

thread_A = threading.Thread(target=is_divisible, args=(28, 14))
thread_B = threading.Thread(target=is_divisible, args=(34, 7))

thread_A.start()
thread_A.join()

thread_B.start()
thread_B.join()

//Output: 
// Starting...
// True
// Finished
// Starting...
// False
// Finished
`
                }
            ]
        },
        {
            id: 1,
            title: "Daemon Threads",
            note: [
                {
                    definition: `<b>Daemon threads</b> are background threads that automatically stop when all <b>non-daemon (main) threads</b> have finished. They are useful for background tasks that do not need to keep the application alive.`,

                    text1: `A thread is <b>non-daemon</b> by default. You can make a thread a daemon by setting <b>thread.daemon = True</b> before calling <b>start()</b>. A daemon thread runs in the background, but Python does not wait for it to finish when the main program exits.`,

                    code1: `
// ---------- Ex : 1 — Basic daemon thread ----------

import threading
import time

def background_task():
    while True:
        print("Daemon thread is running...")
        time.sleep(1)

thread = threading.Thread(target=background_task)

thread.daemon = True
thread.start()

print("Main thread is completed")

// The daemon thread runs in the background.
// When the main thread finishes, Python can terminate the daemon thread.


// ---------- Ex : 2 — Non-daemon thread (default) ----------

import threading
import time

def task():
    print("Task started")
    time.sleep(5)
    print("Task completed")

thread = threading.Thread(target=task)

thread.start()

print("Main thread completed")

// The thread is non-daemon by default.
// Python waits for the non-daemon thread to finish before
// the Python process exits.


// ---------- Ex : 3 — Setting daemon=True during creation ----------

import threading
import time

def background_task():
    while True:
        print("Background task running...")
        time.sleep(1)

thread = threading.Thread(
    target=background_task,
    daemon=True
)

thread.start()

print("Main thread completed")

// daemon=True makes the thread a daemon thread.


// ---------- Ex : 4 — daemon property ----------

import threading

def task():
    print("Task running")

thread = threading.Thread(target=task)

print(thread.daemon)

thread.daemon = True

print(thread.daemon)

// Output:
// False
// True


// ---------- Ex : 5 — Daemon must be set before start() ----------

import threading
import time

def task():
    print("Background task")

thread = threading.Thread(target=task)

thread.daemon = True
thread.start()

// Correct.

// The daemon property should be set before calling start().


// ---------- Ex : 6 — Attempting to change daemon after start ----------

import threading
import time

def task():
    time.sleep(2)

thread = threading.Thread(target=task)

thread.start()

thread.daemon = True

// RuntimeError:
// cannot set daemon status of active thread

// Therefore:
// thread.daemon = True
// thread.start()

// Correct order.


// ---------- Ex : 7 — Daemon vs non-daemon ----------

import threading
import time

def task(name):
    for i in range(5):
        print(f"{name}: {i}")
        time.sleep(1)

daemon_thread = threading.Thread(
    target=task,
    args=("Daemon",),
    daemon=True
)

normal_thread = threading.Thread(
    target=task,
    args=("Normal",)
)

daemon_thread.start()
normal_thread.start()

print("Main thread completed")

// The normal thread keeps the Python program alive
// until it completes.
// The daemon thread does not prevent program termination.


// ---------- Ex : 8 — Using join() with a daemon thread ----------

import threading
import time

def task():
    print("Daemon task started")
    time.sleep(3)
    print("Daemon task completed")

thread = threading.Thread(
    target=task,
    daemon=True
)

thread.start()

thread.join()

print("Main thread completed")

// Important:
// Even though this is a daemon thread,
// join() makes the calling thread wait for it.

// Therefore, daemon=True does NOT mean that join() cannot be used.


// ---------- Ex : 9 — Real-time example: Background monitoring ----------

import threading
import time

def monitor_system():
    while True:
        print("Monitoring system...")
        time.sleep(2)

monitor_thread = threading.Thread(
    target=monitor_system,
    daemon=True
)

monitor_thread.start()

print("Application is running...")

time.sleep(5)

print("Application shutting down...")

// The monitoring thread continuously runs in the background.
// When the main application finishes, the daemon thread
// does not keep the application alive.


// ---------- Ex : 10 — Real-time example: Logging ----------

import threading
import time

def background_logger():
    while True:
        print("Writing logs...")
        time.sleep(2)

logger_thread = threading.Thread(
    target=background_logger,
    daemon=True
)

logger_thread.start()

print("Application started")

time.sleep(5)

print("Application stopped")

// A background logger can be implemented as a daemon thread
// when unfinished background logging does not need to prevent
// application shutdown.


// ---------- Ex : 11 — Real-time example: Cache cleanup ----------

import threading
import time

def cleanup_cache():
    while True:
        print("Cleaning expired cache...")
        time.sleep(10)

cache_thread = threading.Thread(
    target=cleanup_cache,
    daemon=True
)

cache_thread.start()

print("Application is running")

time.sleep(5)

print("Application shutting down")

// Cache cleanup is a background operation.
// It does not necessarily need to keep the application alive.


// ---------- Ex : 12 — Checking whether a thread is daemon ----------

import threading

def task():
    print("Running task")

thread = threading.Thread(
    target=task,
    daemon=True
)

print(thread.daemon)

thread.start()

// Output:
// True


// ---------- Ex : 13 — Main thread is non-daemon ----------

import threading

print(threading.current_thread().name)
print(threading.current_thread().daemon)

// Output:
// MainThread
// False

// The main thread is normally a non-daemon thread.


// ---------- Ex : 14 — Daemon thread with join() ----------

import threading
import time

def task():
    print("Background task started")
    time.sleep(3)
    print("Background task completed")

thread = threading.Thread(
    target=task,
    daemon=True
)

thread.start()

print("Waiting for daemon thread...")
thread.join()

print("Daemon thread finished")
print("Application completed")

// join() explicitly waits for the daemon thread.
// Therefore, the daemon thread is allowed to finish normally.


// ---------- Ex : 15 — Practical comparison ----------

import threading
import time

def worker():
    print("Worker started")
    time.sleep(5)
    print("Worker completed")

daemon_thread = threading.Thread(
    target=worker,
    daemon=True
)

normal_thread = threading.Thread(
    target=worker
)

daemon_thread.start()
normal_thread.start()

print("Main thread completed")

// Daemon thread:
// - Runs in the background.
// - Does not keep the process alive.

// Non-daemon thread:
// - Runs normally.
// - Keeps the process alive until it finishes.

// The Python process exits only after all non-daemon threads
// have completed.`
                }
            ]
        },
        {
            id: 1,
            title: "Race Conditions",
            note: [
                {
                    definition: `
<b>Race Condition</b> is a situation where <b>multiple threads</b> access
and modify the same <b>shared resource</b> at the same time, and the
final result depends on the <b>timing</b> or <b>order</b> in which
the threads execute.

A race condition can cause:
- <b>Incorrect results</b>
- <b>Lost updates</b>
- <b>Inconsistent data</b>
- <b>Unexpected application behavior</b>

Race conditions usually occur when:
1. Multiple <b>threads</b> are running concurrently.
2. Threads share the same <b>mutable data</b>.
3. At least one thread <b>modifies</b> that shared data.
4. The operation is not properly <b>synchronized</b>.

In Python, <b>threading.Lock()</b> can be used to protect shared
resources from race conditions.
            `,

                    text1: `
<b>Important Terms</b>
<b>1. Shared Resource</b>
A <b>shared resource</b> is data or an object that can be accessed
by multiple threads.

Examples:
- <b>Variable</b>
- <b>List</b>
- <b>Dictionary</b>
- <b>File</b>
- <b>Database record</b>
- <b>Cache</b>

<b>2. Critical Section</b>
A <b>critical section</b> is the part of the code where a shared
resource is accessed or modified.

<b>3. Race Condition</b>
A <b>race condition</b> occurs when multiple threads access shared
data concurrently without proper synchronization.

<b>4. Lock</b>
A <b>Lock</b> is a synchronization mechanism that allows only
one thread at a time to execute a protected section of code.

<b>5. Synchronization</b>
<b>Synchronization</b> means coordinating multiple threads so that
shared resources are accessed safely.

<b>Basic Flow</b>
Thread 1 ─────┐
              ├──> Shared Resource
Thread 2 ─────┘

Without synchronization:
Thread 1 and Thread 2
        ↓
Access shared resource
        ↓
At the same time
        ↓
Race Condition
With Lock:
Thread 1 → 🔒 Lock → Access Resource → 🔓 Unlock
Thread 2 → Wait → 🔒 Lock → Access Resource → 🔓 Unlock
            `,

                    code1: `
// ================================================================
// <b>----------------- Ex : 1 -----------------</b>
// <b>Simple Race Condition Concept</b>
// ================================================================

import threading
counter = 0

def increment():
    global counter

    for _ in range(100000):
        counter += 1


thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Final counter:", counter)


<b>Expected:</b>
Final counter: 200000

<b>Important:</b>
The statement:

counter += 1

should not be treated as a synchronization mechanism.
When correctness depends on a shared-state update, use
appropriate synchronization.


// ================================================================
// <b>----------------- Ex : 2 -----------------</b>
// <b>How Race Condition Happens</b>
// ================================================================

Suppose:
counter = 10
Two threads execute:
counter += 1


<b>Conceptually:</b>
Thread 1:
    Read counter → 10

Thread 2:
    Read counter → 10

Thread 1:
    Calculate → 11

Thread 2:
    Calculate → 11

Thread 1:
    Write → 11

Thread 2:
    Write → 11


<b>Final Result:</b>
11
<b>Expected Result:</b>
12
The update made by one thread can be lost because both threads
read the same old value.

This is called a <b>Lost Update</b>.


// ================================================================
// <b>----------------- Ex : 3 -----------------</b>
// <b>Critical Section</b>
// ================================================================

import threading

counter = 0
lock = threading.Lock()

def increment():

    global counter

    for _ in range(100000):

        with lock:

            # Critical Section
            counter += 1


thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Final counter:", counter)


<b>Output:</b>

Final counter: 200000


<b>Critical Section:</b>

with lock:
    counter += 1


Only <b>one thread at a time</b> can execute the protected section.


// ================================================================
// <b>----------------- Ex : 4 -----------------</b>
// <b>Creating a Lock</b>
// ================================================================

import threading

lock = threading.Lock()

print(lock)


<b>Output:</b>

<unlocked _thread.lock object ...>


<b>threading.Lock()</b> creates a Lock object.

The Lock is used to provide <b>mutual exclusion</b>.

<b>Mutual Exclusion</b> means only one thread can enter the
protected section at a time.


// ================================================================
// <b>----------------- Ex : 5 -----------------</b>
// <b>Using acquire() and release()</b>
// ================================================================

import threading

counter = 0
lock = threading.Lock()


def increment():

    global counter

    for _ in range(100000):

        lock.acquire()

        try:

            counter += 1

        finally:

            lock.release()


thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Final counter:", counter)


<b>Output:</b>

Final counter: 200000


<b>Flow:</b>

lock.acquire()
      ↓
Enter Critical Section
      ↓
Modify Shared Resource
      ↓
lock.release()


<b>acquire()</b>

Acquires the lock.

If another thread already owns the lock, the current thread waits.

<b>release()</b>

Releases the lock so another waiting thread can acquire it.


<b>Important:</b>

Use <b>try/finally</b> to ensure that the lock is released even
when an exception occurs.


// ================================================================
// <b>----------------- Ex : 6 -----------------</b>
// <b>Using with lock</b>
// ================================================================

import threading

counter = 0
lock = threading.Lock()


def increment():

    global counter

    for _ in range(100000):

        with lock:

            counter += 1


thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Final counter:", counter)


<b>Output:</b>

Final counter: 200000


<b>with lock:</b>

The <b>with</b> statement automatically:

1. Acquires the lock.
2. Executes the protected code.
3. Releases the lock.

Therefore:

with lock:
    counter += 1

is generally preferred over manually using:

lock.acquire()
lock.release()


<b>Recommended:</b>

with lock:
    # Critical Section


// ================================================================
// <b>----------------- Ex : 7 -----------------</b>
// <b>Bank Account Example</b>
// ================================================================

import threading

balance = 1000
lock = threading.Lock()


def withdraw(amount):

    global balance

    with lock:

        if balance >= amount:

            balance -= amount

            print("Withdrawn:", amount)
            print("Remaining balance:", balance)

        else:

            print("Insufficient balance")


thread1 = threading.Thread(
    target=withdraw,
    args=(800,)
)

thread2 = threading.Thread(
    target=withdraw,
    args=(500,)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Possible Output:</b>

Withdrawn: 800
Remaining balance: 200

Insufficient balance


The lock protects both:

1. <b>Balance check</b>
2. <b>Balance update</b>

These two operations should be treated as one
<b>atomic logical operation</b>.


// ================================================================
// <b>----------------- Ex : 8 -----------------</b>
// <b>Shared List and Compound Operation</b>
// ================================================================

import threading

items = []
lock = threading.Lock()


def add_item(item):

    with lock:

        if item not in items:

            items.append(item)


thread1 = threading.Thread(
    target=add_item,
    args=("Apple",)
)

thread2 = threading.Thread(
    target=add_item,
    args=("Apple",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print(items)


<b>Output:</b>

['Apple']


The lock protects the complete operation:

if item not in items:
    items.append(item)


This is a <b>compound operation</b> because it contains:

1. Check
2. Decision
3. Modification


These operations need to be synchronized when correctness depends
on them being performed together.


// ================================================================
// <b>----------------- Ex : 9 -----------------</b>
// <b>Multiple Threads Updating a Dictionary</b>
// ================================================================

import threading

data = {
    "count": 0
}

lock = threading.Lock()


def update_data():

    for _ in range(10000):

        with lock:

            data["count"] += 1


threads = []

for _ in range(5):
    thread = threading.Thread(
        target=update_data
    )
    threads.append(thread)
    thread.start()
for thread in threads:
    thread.join()
print(data["count"])

<b>Output:</b>
50000

<b>Calculation:</b>
5 threads × 10000 updates = 50000
The lock protects the shared dictionary update.


// ================================================================
// <b>----------------- Ex : 10 -----------------</b>
// <b>Lock with Shared File</b>
// ================================================================

import threading

lock = threading.Lock()

def write_file(thread_name):

    with lock:

        with open("output.txt", "a") as file:

            file.write(
                f"{thread_name} is writing\\n"
            )


thread1 = threading.Thread(
    target=write_file,
    args=("Thread 1",)
)

thread2 = threading.Thread(
    target=write_file,
    args=("Thread 2",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("File writing completed")


<b>Output:</b>

File writing completed


The lock protects the <b>file-writing critical section</b>.


// ================================================================
// <b>----------------- Ex : 11 -----------------</b>
// <b>Shared Counter Class</b>
// ================================================================

import threading


class Counter:

    def __init__(self):

        self.value = 0
        self.lock = threading.Lock()


    def increment(self):

        with self.lock:

            self.value += 1


counter = Counter()


def worker():

    for _ in range(10000):

        counter.increment()


thread1 = threading.Thread(target=worker)
thread2 = threading.Thread(target=worker)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Counter:", counter.value)


<b>Output:</b>

Counter: 20000


The Lock belongs to the object and protects its
<b>shared state</b>.


// ================================================================
// <b>----------------- Ex : 12 -----------------</b>
// <b>Lock with timeout</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def worker():

    acquired = lock.acquire(timeout=2)

    if acquired:

        try:

            print("Lock acquired")

            time.sleep(1)

        finally:

            lock.release()

    else:

        print("Could not acquire lock")


thread = threading.Thread(target=worker)

thread.start()
thread.join()


<b>Possible Output:</b>

Lock acquired


<b>timeout=2</b> means the thread waits for a maximum of
2 seconds to acquire the lock.


// ================================================================
// <b>----------------- Ex : 13 -----------------</b>
// <b>Non-blocking Lock</b>
// ================================================================

import threading

lock = threading.Lock()


def worker():

    if lock.acquire(blocking=False):

        try:

            print("Lock acquired")

        finally:

            lock.release()

    else:

        print("Lock is already being used")


thread = threading.Thread(target=worker)

thread.start()
thread.join()


<b>Possible Output:</b>

Lock acquired


<b>blocking=False</b> means:

Do not wait for the lock.

If the lock is available:
    Acquire it.

If the lock is unavailable:
    Continue immediately.


// ================================================================
// <b>----------------- Ex : 14 -----------------</b>
// <b>Two Threads and One Lock</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def task(name):

    print(name, "waiting for lock")

    with lock:

        print(name, "entered critical section")

        time.sleep(2)

        print(name, "leaving critical section")


thread1 = threading.Thread(
    target=task,
    args=("Thread 1",)
)

thread2 = threading.Thread(
    target=task,
    args=("Thread 2",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Possible Output:</b>

Thread 1 waiting for lock
Thread 1 entered critical section
Thread 2 waiting for lock
Thread 1 leaving critical section
Thread 2 entered critical section
Thread 2 leaving critical section


Thread 2 waits while Thread 1 owns the lock.


// ================================================================
// <b>----------------- Ex : 15 -----------------</b>
// <b>Race Condition vs Thread-Safe Code</b>
// ================================================================


<b>Unsafe:</b>

counter += 1


<b>Safe:</b>

with lock:

    counter += 1


<b>Unsafe Flow:</b>

Thread 1 → Read → Modify → Write
Thread 2 → Read → Modify → Write


<b>Safe Flow:</b>

Thread 1 → Lock → Read → Modify → Write → Unlock

Thread 2 → Wait → Lock → Read → Modify → Write → Unlock


The protected operation becomes effectively
<b>one-at-a-time</b> with respect to that lock.


// ================================================================
// <b>----------------- Ex : 16 -----------------</b>
// <b>Real-Time Example: Inventory</b>
// ================================================================

import threading

stock = 1
lock = threading.Lock()


def purchase(customer):

    global stock

    with lock:

        if stock > 0:

            stock -= 1

            print(customer, "purchased the product")

        else:

            print(customer, "product unavailable")


thread1 = threading.Thread(
    target=purchase,
    args=("Customer 1",)
)

thread2 = threading.Thread(
    target=purchase,
    args=("Customer 2",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Possible Output:</b>

Customer 1 purchased the product
Customer 2 product unavailable


The lock prevents both customers from purchasing the same
<b>last available product</b>.


// ================================================================
// <b>----------------- Ex : 17 -----------------</b>
// <b>Real-Time Example: Login Attempts</b>
// ================================================================

import threading

login_attempts = 0
lock = threading.Lock()


def record_login():

    global login_attempts

    with lock:

        login_attempts += 1


threads = []


for _ in range(10):

    thread = threading.Thread(
        target=record_login
    )

    threads.append(thread)

    thread.start()


for thread in threads:

    thread.join()


print("Login attempts:", login_attempts)


<b>Output:</b>

Login attempts: 10


The Lock protects the shared <b>login_attempts</b> counter.


// ================================================================
// <b>----------------- Ex : 18 -----------------</b>
// <b>Local Variables vs Shared Variables</b>
// ================================================================

import threading


def worker():

    counter = 0

    for _ in range(10000):

        counter += 1

    print(counter)


thread1 = threading.Thread(target=worker)
thread2 = threading.Thread(target=worker)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Output:</b>

10000
10000


<b>Why?</b>

counter is a <b>local variable</b>.

Each thread gets its own function execution and its own local
variable.

Therefore, the threads are not modifying the same counter.


// ================================================================
// <b>----------------- Ex : 19 -----------------</b>
// <b>Shared Data vs Local Data</b>
// ================================================================


<b>Shared Data:</b>

counter = 0


def worker():

    global counter

    counter += 1


Multiple threads can access the same variable.

Therefore, synchronization may be required.


<b>Local Data:</b>

def worker():

    counter = 0

    counter += 1


Each function execution has its own local variable.

Therefore, the threads do not share that variable.


// ================================================================
// <b>----------------- Ex : 20 -----------------</b>
// <b>Keep the Critical Section Small</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def worker():

    # Do work outside the lock

    time.sleep(1)

    with lock:

        # Only shared-state operation
        print("Updating shared data")


<b>Good Practice:</b>

Do not put unnecessary work inside the lock.

<b>Prefer:</b>

Do work
    ↓
Acquire Lock
    ↓
Update Shared Data
    ↓
Release Lock


instead of:

Acquire Lock
    ↓
Do lots of work
    ↓
Update Shared Data
    ↓
Release Lock

A smaller critical section usually allows better concurrency.

// ================================================================
// <b>----------------- Ex : 21 -----------------</b>
// <b>Common Causes of Race Conditions</b>
// ================================================================


<b>Cause 1: Shared Mutable Variable</b>
counter = 0


<b>Cause 2: Multiple Threads</b>
thread1
thread2
thread3


<b>Cause 3: Concurrent Modification</b>
counter += 1

<b>Cause 4: Check-Then-Act Operation</b>
if item not in items:
    items.append(item)

<b>Cause 5: Missing Synchronization</b>
Multiple threads access shared state
without a Lock or another suitable synchronization mechanism.

// ================================================================
// <b>----------------- Ex : 22 -----------------</b>
// <b>How to Prevent Race Conditions</b>
// ================================================================

<b>Method 1: Use Lock</b>
lock = threading.Lock()
with lock:
    shared_data += 1


<b>Method 2: Avoid Shared Mutable State</b>
Prefer local variables where possible.


<b>Method 3: Use Thread-Safe Design</b>
Minimize shared state and clearly define ownership of data.


<b>Method 4: Use Appropriate Synchronization Tools</b>
Depending on the problem, Python provides:

- Lock
- RLock
- Semaphore
- Event
- Condition
- Queue

// ================================================================
// <b>----------------- Ex : 23 -----------------</b>
// <b>Race Condition in AI / LangChain Applications</b>
// ================================================================

Race conditions can occur in AI applications when multiple
threads or workers update the same shared resource.

<b>Examples:</b>
1. Shared conversation state
2. Shared memory
3. Shared cache
4. Token / request counters
5. Shared files
6. Application configuration
7. Shared database state

<b>Example:</b>
conversation_history = []

Multiple threads:
Thread 1 → Add user message
Thread 2 → Add AI response
Thread 3 → Read conversation history

If multiple operations must happen in a particular order,
appropriate synchronization may be required.

<b>Important:</b>
Do not put a Lock around every AI operation.

Identify the actual <b>shared mutable state</b> and protect only
the critical section that requires synchronization.


// ================================================================
// <b>----------------- Ex : 24 -----------------</b>
// <b>Deadlock Warning</b>
// ================================================================


Locks prevent race conditions, but incorrect use of multiple
locks can cause a <b>deadlock</b>.

<b>Deadlock:</b>
Thread 1 holds Lock A
        ↓
Waits for Lock B

Thread 2 holds Lock B
        ↓
Waits for Lock A

Both threads wait forever.

<b>Concept:</b>
Thread 1:
    Lock A → Wait for Lock B

Thread 2:
    Lock B → Wait for Lock A

<b>Best Practice:</b>
- Keep locking simple.
- Keep critical sections small.
- Acquire multiple locks in a consistent order.
- Avoid unnecessary nested locks.

// ================================================================
// <b>----------------- Ex : 25 -----------------</b>
// <b>Race Condition Summary</b>
// ================================================================


<b>Race Condition:</b>
Multiple Threads
        ↓
Shared Mutable Resource
        ↓
Concurrent Access
        ↓
No Proper Synchronization
        ↓
Unexpected / Incorrect Result


<b>Solution:</b>

Multiple Threads
        ↓
Shared Resource
        ↓
Lock
        ↓
One Thread at a Time
        ↓
Consistent Result

<b>Most Important Pattern:</b>
import threading
lock = threading.Lock()


with lock:
    # Critical Section
    shared_data += 1


<b>Key Points:</b>

1. <b>Race conditions</b> happen when multiple threads interact
   with shared mutable state without appropriate synchronization.
2. A <b>critical section</b> is the code that accesses or modifies
   shared state.
3. <b>threading.Lock()</b> provides mutual exclusion.
4. Only one thread can hold a particular Lock at a time.
5. Prefer:

       with lock:
           ...
   over manually managing:

       lock.acquire()
       lock.release()

6. Keep the <b>critical section small</b>.
7. Protect the <b>complete logical operation</b>, not just an
   arbitrary single line.
8. Avoid unnecessary shared mutable state.
9. A Lock can prevent race conditions, but excessive locking
   can reduce concurrency.
10. Incorrect use of multiple locks can cause <b>deadlocks</b>.
11. Race conditions can occur with:

    - Variables
    - Lists
    - Dictionaries
    - Files
    - Caches
    - Counters
    - Database state
    - Application state
    - AI conversation state
    - Shared memory

12. In AI/LangChain applications, pay particular attention to
    <b>shared conversation state</b>, <b>memory</b>, <b>caches</b>,
    <b>counters</b>, and other shared mutable objects.
            `
                }
            ]
        },
        {
            id: 1,
            title: "Locks / Synchronization",
            note: [
                {
                    definition: `
<b>Lock</b> is a synchronization mechanism used to control access
to a <b>shared resource</b> when multiple threads are running
concurrently.

A Lock ensures that only <b>one thread at a time</b> can execute
a protected section of code.

<b>Synchronization</b> is the process of coordinating multiple
threads so that they safely access and modify shared resources.

Locks are mainly used to prevent <b>race conditions</b>.

<b>Basic Concept:</b>

Multiple Threads
        ↓
Shared Resource
        ↓
Synchronization
        ↓
Lock
        ↓
One Thread at a Time
        ↓
Safe Shared-State Access


<b>Python Lock:</b>

threading.Lock()


<b>Main Purpose:</b>

- Prevent <b>race conditions</b>
- Protect <b>shared resources</b>
- Protect <b>critical sections</b>
- Maintain <b>data consistency</b>
- Coordinate concurrent threads
            `,

                    text1: `
<b>Important Terms</b>
<b>1. Lock</b>
A <b>Lock</b> allows only one thread to enter a protected
section at a time.

Example:
lock = threading.Lock()


<b>2. Synchronization</b>
<b>Synchronization</b> means coordinating multiple threads so
that shared data is accessed safely.


<b>3. Shared Resource</b>
A <b>shared resource</b> is data that can be accessed by
multiple threads.

Examples:
- <b>Variable</b>
- <b>List</b>
- <b>Dictionary</b>
- <b>File</b>
- <b>Database record</b>
- <b>Cache</b>
- <b>Application state</b>


<b>4. Critical Section</b>
A <b>critical section</b> is the portion of code where a
shared resource is accessed or modified.

Example:

with lock:
    counter += 1

Here:
counter += 1

is the <b>critical section</b>.

<b>5. Mutual Exclusion</b>
<b>Mutual exclusion</b> means only one thread can execute a
particular protected section at a time.

<b>6. Thread Safety</b>
Code is <b>thread-safe</b> when it behaves correctly even when
multiple threads execute concurrently.

<b>7. Race Condition</b>
A <b>race condition</b> occurs when multiple threads access
shared mutable data concurrently and the result depends on
the timing/order of execution.

<b>8. Lock Owner</b>
The thread that successfully acquires a Lock becomes the
thread currently holding that Lock.

<b>9. Blocking</b>
If a thread tries to acquire a Lock that is already held by
another thread, it normally <b>waits</b> until the Lock becomes
available.

<b>Basic Lock Flow:</b>
Thread 1
   ↓
lock.acquire()
   ↓
Critical Section
   ↓
lock.release()


Thread 2
   ↓
lock.acquire()
   ↓
Wait if Lock is unavailable
   ↓
Critical Section
   ↓
lock.release()
            `,

                    code1: `
// ================================================================
// <b>----------------- Ex : 1 -----------------</b>
// <b>Creating a Lock</b>
// ================================================================

import threading

lock = threading.Lock()

print(lock)


<b>Possible Output:</b>

<unlocked _thread.lock object ...>


<b>threading.Lock()</b> creates a Lock object.

Initially, the Lock is <b>unlocked</b>.


// ================================================================
// <b>----------------- Ex : 2 -----------------</b>
// <b>Basic Lock Example</b>
// ================================================================

import threading

lock = threading.Lock()


def task():

    lock.acquire()

    try:

        print("Inside critical section")

    finally:

        lock.release()


thread = threading.Thread(target=task)

thread.start()
thread.join()


<b>Output:</b>

Inside critical section


<b>Flow:</b>

acquire()
   ↓
Critical Section
   ↓
release()


// ================================================================
// <b>----------------- Ex : 3 -----------------</b>
// <b>Using with Lock</b>
// ================================================================

import threading

lock = threading.Lock()


def task():

    with lock:

        print("Inside critical section")


thread = threading.Thread(target=task)

thread.start()
thread.join()


<b>Output:</b>

Inside critical section


<b>Recommended Approach:</b>

with lock:
    # Critical Section


The <b>with</b> statement automatically:

1. Acquires the Lock.
2. Executes the protected code.
3. Releases the Lock.


// ================================================================
// <b>----------------- Ex : 4 -----------------</b>
// <b>Multiple Threads Using One Lock</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def task(name):

    with lock:

        print(name, "entered")

        time.sleep(2)

        print(name, "leaving")


thread1 = threading.Thread(
    target=task,
    args=("Thread 1",)
)

thread2 = threading.Thread(
    target=task,
    args=("Thread 2",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Possible Output:</b>

Thread 1 entered
Thread 1 leaving
Thread 2 entered
Thread 2 leaving


<b>Important:</b>

Thread 2 cannot enter the protected section while Thread 1
is holding the Lock.


// ================================================================
// <b>----------------- Ex : 5 -----------------</b>
// <b>Protecting a Shared Counter</b>
// ================================================================

import threading

counter = 0
lock = threading.Lock()


def increment():

    global counter

    for _ in range(100000):

        with lock:

            counter += 1


thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Final counter:", counter)


<b>Output:</b>

Final counter: 200000


The Lock protects the shared variable:

counter


The update:

counter += 1

is inside the <b>critical section</b>.


// ================================================================
// <b>----------------- Ex : 6 -----------------</b>
// <b>acquire() and release()</b>
// ================================================================

import threading

lock = threading.Lock()


def task():

    lock.acquire()

    try:

        print("Lock acquired")
        print("Doing work")

    finally:

        lock.release()

        print("Lock released")


thread = threading.Thread(target=task)

thread.start()
thread.join()


<b>Output:</b>

Lock acquired
Doing work
Lock released


<b>acquire()</b>

Acquires the Lock.

If another thread already holds the Lock, the current thread
waits by default.


<b>release()</b>

Releases the Lock.

Another waiting thread can then acquire it.


// ================================================================
// <b>----------------- Ex : 7 -----------------</b>
// <b>Why try/finally is Important</b>
// ================================================================

import threading

lock = threading.Lock()


def task():

    lock.acquire()

    try:

        print("Doing work")

        # Some operation

    finally:

        lock.release()


<b>Important:</b>

The finally block ensures that the Lock is released even if
an exception occurs inside the critical section.


<b>Without proper release:</b>

Thread 1
   ↓
Acquires Lock
   ↓
Exception occurs
   ↓
Lock remains held
   ↓
Other threads may wait indefinitely


This can lead to a <b>deadlock</b> or blocked execution.


// ================================================================
// <b>----------------- Ex : 8 -----------------</b>
// <b>with Lock vs acquire/release</b>
// ================================================================


<b>Manual Approach:</b>

lock.acquire()

try:

    # Critical Section

finally:

    lock.release()


<b>Recommended Approach:</b>

with lock:

    # Critical Section


The <b>with</b> approach is simpler and safer for normal Lock usage.


// ================================================================
// <b>----------------- Ex : 9 -----------------</b>
// <b>Non-Blocking Lock</b>
// ================================================================

import threading

lock = threading.Lock()


def task():

    if lock.acquire(blocking=False):

        try:

            print("Lock acquired")

        finally:

            lock.release()

    else:

        print("Lock is currently unavailable")


thread = threading.Thread(target=task)

thread.start()
thread.join()


<b>Possible Output:</b>

Lock acquired


<b>blocking=False</b> means the thread does not wait for the Lock.

If the Lock is available:

    Acquire it.

If the Lock is unavailable:

    Continue immediately.


// ================================================================
// <b>----------------- Ex : 10 -----------------</b>
// <b>Lock with timeout</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def task():

    acquired = lock.acquire(timeout=2)

    if acquired:

        try:

            print("Lock acquired")

            time.sleep(1)

        finally:

            lock.release()

    else:

        print("Could not acquire Lock")


thread = threading.Thread(target=task)

thread.start()
thread.join()


<b>Possible Output:</b>

Lock acquired


<b>timeout=2</b> means the thread waits for a maximum of
2 seconds to acquire the Lock.


// ================================================================
// <b>----------------- Ex : 11 -----------------</b>
// <b>Bank Account Synchronization</b>
// ================================================================

import threading

balance = 1000
lock = threading.Lock()


def withdraw(amount):

    global balance

    with lock:

        if balance >= amount:

            balance -= amount

            print(
                "Withdrawn:",
                amount
            )

            print(
                "Balance:",
                balance
            )

        else:

            print("Insufficient balance")


thread1 = threading.Thread(
    target=withdraw,
    args=(800,)
)

thread2 = threading.Thread(
    target=withdraw,
    args=(500,)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Possible Output:</b>

Withdrawn: 800
Balance: 200

Insufficient balance


The Lock protects the complete logical operation:

<b>Check balance</b>
+
<b>Update balance</b>


This prevents two threads from making decisions based on the
same outdated balance.


// ================================================================
// <b>----------------- Ex : 12 -----------------</b>
// <b>Shared List Synchronization</b>
// ================================================================

import threading

items = []
lock = threading.Lock()


def add_item(item):

    with lock:

        if item not in items:

            items.append(item)


thread1 = threading.Thread(
    target=add_item,
    args=("Apple",)
)

thread2 = threading.Thread(
    target=add_item,
    args=("Apple",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print(items)


<b>Output:</b>

['Apple']


The Lock protects the complete <b>check-then-act</b> operation.


// ================================================================
// <b>----------------- Ex : 13 -----------------</b>
// <b>Shared Dictionary Synchronization</b>
// ================================================================

import threading

data = {
    "count": 0
}

lock = threading.Lock()


def update():

    for _ in range(10000):

        with lock:

            data["count"] += 1


threads = []


for _ in range(5):

    thread = threading.Thread(
        target=update
    )

    threads.append(thread)

    thread.start()


for thread in threads:

    thread.join()


print(data["count"])


<b>Output:</b>

50000


<b>Calculation:</b>

5 threads × 10000 = 50000


The Lock protects the shared dictionary update.


// ================================================================
// <b>----------------- Ex : 14 -----------------</b>
// <b>Protecting File Access</b>
// ================================================================

import threading

lock = threading.Lock()


def write_file(name):

    with lock:

        with open("output.txt", "a") as file:

            file.write(
                f"{name} is writing\\n"
            )


thread1 = threading.Thread(
    target=write_file,
    args=("Thread 1",)
)

thread2 = threading.Thread(
    target=write_file,
    args=("Thread 2",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Output:</b>

The file is updated by both threads.


The Lock ensures that the protected file-writing operation
is coordinated between threads.


// ================================================================
// <b>----------------- Ex : 15 -----------------</b>
// <b>Locking Only the Critical Section</b>
// ================================================================

import threading
import time

lock = threading.Lock()


def task():

    # Work outside Lock
    time.sleep(1)

    with lock:

        # Critical Section
        print("Updating shared data")


<b>Good Practice:</b>

Do not hold a Lock while performing unnecessary work.

<b>Preferred:</b>

Do independent work
        ↓
Acquire Lock
        ↓
Update shared resource
        ↓
Release Lock


A smaller <b>critical section</b> generally allows better
concurrency.


// ================================================================
// <b>----------------- Ex : 16 -----------------</b>
// <b>Two Different Locks</b>
// ================================================================

import threading

lock1 = threading.Lock()
lock2 = threading.Lock()


def task1():

    with lock1:

        print("Task 1 using resource 1")


def task2():

    with lock2:

        print("Task 2 using resource 2")


thread1 = threading.Thread(target=task1)
thread2 = threading.Thread(target=task2)

thread1.start()
thread2.start()

thread1.join()
thread2.join()


<b>Concept:</b>

Different shared resources can sometimes use different Locks.

Resource 1 → Lock 1

Resource 2 → Lock 2


This can allow more concurrency than using one global Lock
for every resource.


// ================================================================
// <b>----------------- Ex : 17 -----------------</b>
// <b>Deadlock Concept</b>
// ================================================================

import threading
import time

lock1 = threading.Lock()
lock2 = threading.Lock()


def task1():

    with lock1:

        time.sleep(0.1)

        with lock2:

            print("Task 1")


def task2():

    with lock2:

        time.sleep(0.1)

        with lock1:

            print("Task 2")


<b>Possible Situation:</b>

Thread 1:
    Holds Lock 1
    ↓
    Waits for Lock 2


Thread 2:
    Holds Lock 2
    ↓
    Waits for Lock 1


Both threads wait for each other.


This situation is called a <b>Deadlock</b>.


<b>How to Avoid:</b>

Acquire multiple Locks in a <b>consistent order</b>.

For example:

Thread 1:
    Lock 1 → Lock 2

Thread 2:
    Lock 1 → Lock 2


Both follow the same order.


// ================================================================
// <b>----------------- Ex : 18 -----------------</b>
// <b>RLock - Reentrant Lock</b>
// ================================================================

import threading

lock = threading.RLock()


def outer():

    with lock:

        print("Outer")

        inner()


def inner():

    with lock:

        print("Inner")


outer()


<b>Output:</b>

Outer
Inner


<b>RLock</b> means <b>Reentrant Lock</b>.

The same thread can acquire the same RLock multiple times.

This is useful when methods/functions call other methods/functions
that need to acquire the same Lock.


// ================================================================
// <b>----------------- Ex : 19 -----------------</b>
// <b>Lock vs RLock</b>
// ================================================================


<b>Lock:</b>

lock = threading.Lock()


The same thread should not attempt to acquire the same Lock again
before releasing it.


<b>RLock:</b>

lock = threading.RLock()


The same thread can acquire the RLock multiple times.

It must release the RLock the corresponding number of times.


<b>Simple Rule:</b>

Use <b>Lock</b> by default.

Use <b>RLock</b> when the same thread needs to re-enter
the protected code.


// ================================================================
// <b>----------------- Ex : 20 -----------------</b>
// <b>Semaphore for Synchronization</b>
// ================================================================

import threading
import time

semaphore = threading.Semaphore(2)


def task(name):

    with semaphore:

        print(name, "entered")

        time.sleep(2)

        print(name, "leaving")


threads = []


for i in range(5):

    thread = threading.Thread(
        target=task,
        args=(f"Thread {i}",)
    )

    threads.append(thread)

    thread.start()


for thread in threads:

    thread.join()


<b>Concept:</b>
Semaphore(2) allows up to <b>2 threads</b> to enter the
protected section at the same time.

Lock:
    Maximum 1 thread


Semaphore(2):
    Maximum 2 threads


// ================================================================
// <b>----------------- Ex : 21 -----------------</b>
// <b>Queue for Thread Synchronization</b>
// ================================================================

import threading
import queue

q = queue.Queue()

def producer():

    for i in range(5):

        q.put(i)


def consumer():
    while True:
        item = q.get()
        if item is None:
            break
        print("Consumed:", item)

        q.task_done()


producer_thread = threading.Thread(
    target=producer
)

consumer_thread = threading.Thread(
    target=consumer
)

consumer_thread.start()
producer_thread.start()

producer_thread.join()

q.put(None)
consumer_thread.join()


<b>Output:</b>
Consumed: 0
Consumed: 1
Consumed: 2
Consumed: 3
Consumed: 4


<b>queue.Queue</b> provides built-in thread-safe operations
for common producer/consumer patterns.

It can reduce the need to manually protect a shared collection
with a Lock.


// ================================================================
// <b>----------------- Ex : 22 -----------------</b>
// <b>Synchronization Tools in Python</b>
// ================================================================

Python's threading module provides several synchronization
mechanisms.


<b>1. Lock</b>
threading.Lock()
Allows one thread at a time.


<b>2. RLock</b>
threading.RLock()
Allows the same thread to acquire the Lock multiple times.


<b>3. Semaphore</b>
threading.Semaphore(n)
Allows a limited number of threads to enter a section.


<b>4. Event</b>
threading.Event()
Allows threads to communicate using a set/clear event state.


<b>5. Condition</b>
threading.Condition()
Allows threads to wait for and be notified about a condition.


<b>6. Barrier</b>
threading.Barrier(n)
Allows a group of threads to wait until all required threads
reach the same point.


<b>7. Queue</b>
queue.Queue()
Provides thread-safe producer/consumer communication.


// ================================================================
// <b>----------------- Ex : 23 -----------------</b>
// <b>Synchronization vs Concurrency</b>
// ================================================================


<b>Concurrency:</b>

Multiple tasks make progress during overlapping periods.


<b>Synchronization:</b>

Coordinates those tasks when they interact with shared state.


<b>Example:</b>

Thread 1 → Processing
Thread 2 → Processing
Thread 3 → Processing

All can run concurrently.

But:

Thread 1
   ↓
Update shared resource

Thread 2
   ↓
Update same resource

Synchronization may be required.


<b>Important:</b>

Synchronization does not mean that all threads stop working.

It means shared resources are accessed in a controlled way.


// ================================================================
// <b>----------------- Ex : 24 -----------------</b>
// <b>Locks and Python GIL</b>
// ================================================================


<b>GIL</b> means <b>Global Interpreter Lock</b> in CPython.

The GIL and a <b>threading.Lock</b> are different concepts.


<b>GIL:</b>

A CPython implementation mechanism that affects execution of
Python bytecode across threads.


<b>threading.Lock:</b>

An application-level synchronization primitive used by your
program to protect shared state.


<b>Important:</b>

Do not assume that the GIL makes your application's shared
state automatically thread-safe.

Use appropriate synchronization when multiple threads
access shared mutable state.


// ================================================================
// <b>----------------- Ex : 25 -----------------</b>
// <b>Locks in AI / LangChain Applications</b>
// ================================================================


Locks can be useful in AI applications when multiple threads
or workers access the same mutable resource.


<b>Examples:</b>

- <b>Conversation state</b>
- <b>Shared memory</b>
- <b>Cache</b>
- <b>Request counters</b>
- <b>Token counters</b>
- <b>Shared files</b>
- <b>Application state</b>
- <b>Database-related shared state</b>


<b>Example:</b>

conversation_history = []

lock = threading.Lock()


def add_message(message):

    with lock:

        conversation_history.append(message)


Multiple threads can safely coordinate access to the shared
conversation history.


<b>Important:</b>

Do not use a Lock around every AI/LLM operation.

Identify the actual <b>shared mutable state</b> and protect
the smallest critical section that needs synchronization.


// ================================================================
// <b>----------------- Ex : 26 -----------------</b>
// <b>Lock Best Practices</b>
// ================================================================


<b>1. Keep Critical Sections Small</b>

with lock:

    # Only required shared-state operations


<b>2. Use with lock</b>

Prefer:

with lock:
    ...


instead of manually managing:

lock.acquire()
lock.release()


<b>3. Avoid Unnecessary Locks</b>

Do not lock code that does not access shared state.


<b>4. Avoid Long Operations Inside Locks</b>

Avoid:

with lock:

    network_call()

    time.sleep(10)

    expensive_operation()


Prefer doing independent work outside the Lock whenever possible.


<b>5. Protect the Complete Logical Operation</b>

For example:

with lock:

    if balance >= amount:
        balance -= amount


Protect both the <b>check</b> and the <b>update</b>.


<b>6. Be Careful with Multiple Locks</b>

Always acquire multiple Locks in a consistent order to reduce
the risk of <b>deadlocks</b>.


<b>7. Minimize Shared Mutable State</b>

Less shared state generally means fewer synchronization problems.


// ================================================================
// <b>----------------- Ex : 27 -----------------</b>
// <b>Lock / Synchronization Summary</b>
// ================================================================

<b>Without Synchronization:</b>

Thread 1 ─────┐
              ├──> Shared Resource
Thread 2 ─────┘

Possible:
    Race Condition
    Lost Update
    Inconsistent State

<b>With Lock:</b>

Thread 1
    ↓
Acquire Lock
    ↓
Critical Section
    ↓
Release Lock
    ↓
Thread 2


<b>Core Pattern:</b>
import threading
lock = threading.Lock()

with lock:
    # Critical Section
    shared_data += 1


<b>Key Points:</b>
1. <b>Lock</b> protects shared resources.
2. <b>Synchronization</b> coordinates concurrent threads.
3. <b>Critical Section</b> is the code that accesses shared state.
4. <b>Mutual Exclusion</b> allows only one thread at a time into
   a Lock-protected section.
5. <b>threading.Lock()</b> is the basic Lock in Python.
6. <b>acquire()</b> obtains the Lock.
7. <b>release()</b> releases the Lock.
8. <b>with lock:</b> is the recommended simple pattern.
9. <b>RLock</b> allows the same thread to acquire the same Lock
   multiple times.
10. <b>Semaphore</b> can allow a limited number of threads
    simultaneously.
11. <b>Queue</b> provides thread-safe communication for common
    producer/consumer scenarios.
12. Locks help prevent <b>race conditions</b>.
13. Incorrect use of multiple Locks can cause <b>deadlocks</b>.
14. Keep the <b>critical section small</b>.
15. Avoid unnecessary shared mutable state.
16. The <b>GIL</b> is not a replacement for application-level
    synchronization.
17. In AI/LangChain applications, Locks can be useful for
    protecting shared <b>memory</b>, <b>conversation state</b>,
    <b>caches</b>, <b>counters</b>, and other mutable resources.
            `
                }
            ]
        },
{
    id: 1,
    title: "Thread-safe Code",
    note: [
        {
            definition: `
                <b>Thread-safe code</b> is code that can be safely executed by <b>multiple threads</b>
                at the same time without causing <b>race conditions</b>, incorrect results, or corrupted data.
                Thread safety is usually achieved using <b>Locks</b>, <b>Synchronization</b>, or
                thread-safe data structures.
            `,

            text1: `
                <b>Key idea:</b> When multiple threads access <b>shared data</b>, only one thread
                should modify the critical section at a time.
                <b>Thread-safe:</b> Multiple threads can safely use the code.
                <b>Not thread-safe:</b> Multiple threads can interfere with each other.
                <b>Shared resource:</b> Data accessed by multiple threads.
                <b>Critical section:</b> Code that accesses or modifies shared data.
            `,

            code1: `// -------------------------- Ex : 1 ----------------
// Not Thread-safe

import threading

counter = 0

def increment():
    global counter

    for _ in range(100000):
        counter += 1

threads = [
    threading.Thread(target=increment),
    threading.Thread(target=increment)
]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print("Counter:", counter)

// Expected:
// Counter: 200000

// In concurrent code, shared data can potentially be
// accessed/modified by multiple threads at the same time.



// -------------------------- Ex : 2 ----------------
// Thread-safe using Lock

import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter

    for _ in range(100000):
        with lock:
            counter += 1

threads = [
    threading.Thread(target=increment),
    threading.Thread(target=increment)
]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print("Counter:", counter)

// Output:
// Counter: 200000

// The Lock ensures that only one thread at a time
// can execute the critical section.



// -------------------------- Ex : 3 ----------------
// Thread-safe code with a shared list

import threading

items = []
lock = threading.Lock()

def add_items():
    for i in range(5):
        with lock:
            items.append(i)

threads = [
    threading.Thread(target=add_items),
    threading.Thread(target=add_items)
]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print("Items:", items)

// Output:
// Items: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

// The Lock protects access to the shared resource: items.



// -------------------------- Ex : 4 ----------------
// Thread-safe function

import threading

lock = threading.Lock()
balance = 1000

def withdraw(amount):
    global balance

    with lock:
        if balance >= amount:
            balance -= amount
            print("Withdrawn:", amount)
        else:
            print("Insufficient balance")

threads = [
    threading.Thread(target=withdraw, args=(700,)),
    threading.Thread(target=withdraw, args=(500,))
]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print("Final balance:", balance)

// Possible Output:
// Withdrawn: 700
// Insufficient balance
// Final balance: 300

// Because the balance check and update are protected
// by the same Lock, the operation is thread-safe.`
        }
    ]
},
        {
            id: 1,
            title: "Timers",
            note: [
                {
                    definition: `<b>Timers</b> are used to execute a function after a specified amount of time or repeatedly at fixed time intervals.`,
                    text1: `<b>Python</b> provides the <b>threading.Timer</b> class to schedule a function to run after a delay. The timer runs the function in a <b>separate thread</b>.`,
                    code1: `// -------------------------- Ex : 1 ----------------
import threading
import time

def say_hello():
    print("Hello!")

timer = threading.Timer(3, say_hello)
timer.start()

print("Timer started...")
time.sleep(4)

// Output:
// Timer started...
// Hello!


// -------------------------- Ex : 2 ----------------
// Timer with arguments

import threading

def greet(name):
    print(f"Hello, {name}!")

timer = threading.Timer(2, greet, args=("Anand",))
timer.start()

// Output:
// Hello, Anand!


// -------------------------- Ex : 3 ----------------
// Cancel a timer before it executes

import threading
import time

def task():
    print("Task executed")

timer = threading.Timer(5, task)
timer.start()

time.sleep(2)

timer.cancel()

print("Timer cancelled")

// Output:
// Timer cancelled


// -------------------------- Ex : 4 ----------------
// Repeating timer

import threading

def task():
    print("Task executed")

    timer = threading.Timer(2, task)
    timer.start()

timer = threading.Timer(2, task)
timer.start()

// Output:
// Task executed
// Task executed
// Task executed
// ...
// The task executes approximately every 2 seconds.`
                }
            ]
        },
        {
            id: 1,
            title: "ThreadPoolExecutor",
            note: [
                {
                    definition: `<b>Definition:</b> <b>ThreadPoolExecutor</b> is a high-level API provided by Python's <b>concurrent.futures</b> module. It manages a pool of worker threads and allows multiple tasks to execute concurrently. It is especially useful for <b>I/O-bound operations</b> such as API calls, file operations, database operations, and network requests.`,

                    text1: `<b>Why ThreadPoolExecutor?</b>
            Instead of manually creating, starting, and joining individual threads using <b>threading.Thread</b>, ThreadPoolExecutor manages the worker threads for us.
            We mainly use:
            • <b>submit()</b> → submit individual tasks
            • <b>map()</b> → execute the same function for multiple values
            • <b>Future</b> → represents the result of an asynchronous task
            • <b>as_completed()</b> → process results as tasks finish
            • <b>max_workers</b> → controls the maximum number of worker threads`,

                    code1: `
// -------------------------- Ex : 1 ----------------
// Basic ThreadPoolExecutor

from concurrent.futures import ThreadPoolExecutor

def task(number):
    print(f"Processing task {number}")

with ThreadPoolExecutor(max_workers=3) as executor:
    for number in range(5):
        executor.submit(task, number)

print("All tasks submitted")`
                },

                {
                    definition: `<b>Definition:</b> <b>max_workers</b> specifies the maximum number of worker threads that can execute tasks concurrently.`,

                    text1: `<b>How max_workers works:</b>
            If there are 10 tasks and <b>max_workers=3</b>, only 3 worker threads execute tasks at the same time. When one thread finishes, it takes another pending task.
            You do not need to create 10 threads manually.`,

                    code1: `// -------------------------- Ex : 2 ----------------

from concurrent.futures import ThreadPoolExecutor
import time

def task(number):
    print(f"Task {number} started")
    time.sleep(2)
    print(f"Task {number} completed")

with ThreadPoolExecutor(max_workers=3) as executor:
    for number in range(1, 7):
        executor.submit(task, number)

print("Executor finished")`
                },

                {
                    definition: `<b>Definition:</b> <b>submit()</b> schedules a callable to be executed by a worker thread and immediately returns a <b>Future</b> object.`,

                    text1: `<b>submit(function, *args)</b>
            The function does not execute directly on the main thread. It is submitted to the executor, which assigns it to an available worker thread.`,

                    code1: `// -------------------------- Ex : 3 ----------------

from concurrent.futures import ThreadPoolExecutor

def add(a, b):
    return a + b

with ThreadPoolExecutor(max_workers=2) as executor:

    future = executor.submit(add, 10, 20)

    print("Task submitted")

    result = future.result()

    print("Result:", result)`
                },

                {
                    definition: `<b>Definition:</b> A <b>Future</b> represents the eventual result of a task that has been submitted to an executor.`,

                    text1: `<b>Future</b> allows us to:
            • Get the result using <b>result()</b>
            • Check completion using <b>done()</b>
            • Check whether it was cancelled using <b>cancelled()</b>
            • Handle exceptions raised by the task`,

                    code1: `// -------------------------- Ex : 4 ----------------

from concurrent.futures import ThreadPoolExecutor
import time

def task():
    time.sleep(2)
    return "Task completed"

with ThreadPoolExecutor(max_workers=1) as executor:

    future = executor.submit(task)

    print("Done:", future.done())

    result = future.result()

    print("Result:", result)

    print("Done:", future.done())`
                },

                {
                    definition: `<b>Definition:</b> <b>map()</b> executes a function concurrently for each item in an iterable and returns an iterator containing the results.`,

                    text1: `<b>map()</b> is useful when the same function needs to be executed for many values.
            It is similar to Python's normal <b>map()</b>, but ThreadPoolExecutor's <b>map()</b> executes the function using worker threads.`,

                    code1: `// -------------------------- Ex : 5 ----------------

from concurrent.futures import ThreadPoolExecutor

def square(number):
    return number * number

numbers = [1, 2, 3, 4, 5]

with ThreadPoolExecutor(max_workers=3) as executor:

    results = executor.map(square, numbers)

    for result in results:
        print(result)`
                },

                {
                    definition: `<b>Definition:</b> <b>as_completed()</b> returns futures as soon as their corresponding tasks finish.`,

                    text1: `<b>Important difference:</b>
            <b>map()</b> generally gives results according to the input order.
            <b>as_completed()</b> gives results according to the order in which tasks actually complete.`,

                    code1: `// -------------------------- Ex : 6 ----------------

from concurrent.futures import ThreadPoolExecutor, as_completed
import time
import random

def task(number):
    delay = random.uniform(1, 3)
    time.sleep(delay)

    return f"Task {number} completed in {delay:.2f}s"

with ThreadPoolExecutor(max_workers=3) as executor:

    futures = [
        executor.submit(task, number)
        for number in range(1, 6)
    ]

    for future in as_completed(futures):
        print(future.result())`
                },

                {
                    definition: `<b>Definition:</b> ThreadPoolExecutor can execute multiple <b>I/O-bound operations</b> concurrently, making it useful for tasks that spend significant time waiting for external resources.`,

                    text1: `<b>Common I/O-bound use cases:</b>
            • REST API calls
            • Database queries
            • File operations
            • Network requests
            • Downloading files
            • Calling external services`,

                    code1: `// -------------------------- Ex : 7 ----------------
// Simulating multiple API calls

from concurrent.futures import ThreadPoolExecutor
import time

def fetch_user(user_id):
    print(f"Fetching user {user_id}")

    time.sleep(2)

    return f"User {user_id} data"

user_ids = [101, 102, 103, 104, 105]

with ThreadPoolExecutor(max_workers=3) as executor:

    results = executor.map(fetch_user, user_ids)

    for result in results:
        print(result)`
                },

                {
                    definition: `<b>Definition:</b> ThreadPoolExecutor can be used to process multiple files concurrently when the operation is primarily I/O-bound.`,

                    text1: `<b>Real-time example:</b> Suppose an application needs to process several uploaded files. Instead of processing each file sequentially, multiple files can be processed concurrently using a thread pool.`,

                    code1: `// -------------------------- Ex : 8 ----------------

from concurrent.futures import ThreadPoolExecutor
import time

def process_file(filename):

    print(f"Processing {filename}")

    time.sleep(2)

    return f"{filename} processed successfully"

files = [
    "customer.csv",
    "orders.csv",
    "payments.csv",
    "products.csv"
]

with ThreadPoolExecutor(max_workers=2) as executor:

    results = executor.map(process_file, files)

    for result in results:
        print(result)`
                },

                {
                    definition: `<b>Definition:</b> Exceptions raised inside a worker thread can be retrieved through the corresponding <b>Future</b>. Calling <b>future.result()</b> raises the exception in the calling thread.`,

                    text1: `<b>Exception handling with submit()</b>
            This is one reason <b>submit()</b> is useful when individual task results or errors need to be handled separately.`,

                    code1: `// -------------------------- Ex : 9 ----------------

from concurrent.futures import ThreadPoolExecutor

def divide(a, b):
    return a / b

with ThreadPoolExecutor(max_workers=2) as executor:

    future1 = executor.submit(divide, 10, 2)
    future2 = executor.submit(divide, 10, 0)

    try:
        print("Result 1:", future1.result())
        print("Result 2:", future2.result())

    except ZeroDivisionError:
        print("Cannot divide by zero")`
                },

                {
                    definition: `<b>Definition:</b> <b>executor.shutdown()</b> tells the executor that no more tasks will be submitted and allows the worker threads to finish.`,

                    text1: `When using a <b>with ThreadPoolExecutor(...)</b> block, Python automatically performs the necessary cleanup. Therefore, using <b>with</b> is generally the preferred approach.`,

                    code1: `// -------------------------- Ex : 10 ----------------

from concurrent.futures import ThreadPoolExecutor

def task():
    print("Task executed")

with ThreadPoolExecutor(max_workers=2) as executor:

    executor.submit(task)
    executor.submit(task)

# Executor is automatically cleaned up here`
                },

                {
                    definition: `<b>Definition:</b> ThreadPoolExecutor can receive multiple arguments for a function when using <b>submit()</b>.`,

                    text1: `<b>Passing multiple arguments:</b>
            The first argument to <b>submit()</b> is the function. The remaining arguments are passed to that function.`,

                    code1: `// -------------------------- Ex : 11 ----------------

from concurrent.futures import ThreadPoolExecutor

def calculate(price, quantity):
    return price * quantity

orders = [
    (100, 2),
    (250, 3),
    (500, 1),
    (150, 4)
]

with ThreadPoolExecutor(max_workers=3) as executor:

    futures = [
        executor.submit(calculate, price, quantity)
        for price, quantity in orders
    ]

    for future in futures:
        print("Total:", future.result())`
                },

                {
                    definition: `<b>Definition:</b> ThreadPoolExecutor can be used to execute independent tasks concurrently and collect their results.`,

                    text1: `<b>Real-time example: Customer dashboard</b>
            Imagine a frontend/backend system where a customer dashboard needs data from multiple independent services:
            • Customer service
            • Account service
            • Transaction service
            • Rewards service
            These independent calls can be executed concurrently.`,

                    code1: `// -------------------------- Ex : 12 ----------------

from concurrent.futures import ThreadPoolExecutor
import time

def get_customer():
    time.sleep(2)
    return "Customer information"

def get_accounts():
    time.sleep(2)
    return "Account information"

def get_transactions():
    time.sleep(2)
    return "Transaction information"

def get_rewards():
    time.sleep(2)
    return "Rewards information"

with ThreadPoolExecutor(max_workers=4) as executor:

    futures = {
        "customer": executor.submit(get_customer),
        "accounts": executor.submit(get_accounts),
        "transactions": executor.submit(get_transactions),
        "rewards": executor.submit(get_rewards)
    }

    for name, future in futures.items():
        print(name, ":", future.result())`
                },

                {
                    definition: `<b>Definition:</b> A thread pool reuses a limited number of worker threads to execute many tasks instead of creating a new thread for every task.`,

                    text1: `<b>Thread Pool Concept</b>
            Suppose there are 100 tasks and <b>max_workers=5</b>.
            Python creates a pool with up to 5 worker threads. The 100 tasks are placed into the executor's work queue. As a worker becomes available, it picks up another task.
            This avoids creating 100 separate threads.`,

                    code1: `// -------------------------- Ex : 13 ----------------

from concurrent.futures import ThreadPoolExecutor
import time

def task(number):
    print(f"Processing {number}")
    time.sleep(1)

with ThreadPoolExecutor(max_workers=5) as executor:

    for number in range(1, 101):
        executor.submit(task, number)

print("All 100 tasks completed")`
                },

                {
                    definition: `<b>Definition:</b> ThreadPoolExecutor is generally most useful for <b>I/O-bound tasks</b>, not CPU-bound calculations.`,

                    text1: `<b>I/O-bound:</b> The program spends time waiting for something external, such as a network response or file operation. Threads can be useful here.
            <b>CPU-bound:</b> The program spends most of its time performing CPU calculations. Python's GIL generally prevents multiple Python threads from executing Python bytecode simultaneously, so <b>ProcessPoolExecutor</b> may be more appropriate for CPU-bound work.`,

                    code1: `// -------------------------- Ex : 14 ----------------

// I/O-bound → ThreadPoolExecutor

from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(max_workers=5) as executor:
    results = executor.map(fetch_data, urls)


// CPU-bound → ProcessPoolExecutor

from concurrent.futures import ProcessPoolExecutor

with ProcessPoolExecutor(max_workers=5) as executor:
    results = executor.map(calculate, numbers)`
                },

                {
                    definition: `<b>Definition:</b> <b>ThreadPoolExecutor</b> provides a convenient way to manage concurrent execution using a fixed or limited pool of worker threads.`,

                    text1: `<b>Important methods to remember:</b>
            <b>ThreadPoolExecutor(max_workers=n)</b> → creates the thread pool
            <b>submit()</b> → submits one task
            <b>map()</b> → applies one function to multiple inputs
            <b>Future.result()</b> → gets the task result
            <b>Future.done()</b> → checks whether the task completed
            <b>as_completed()</b> → processes futures as they finish
            <b>shutdown()</b> → shuts down the executor
            <b>Best practice:</b> Prefer the <b>with</b> statement so the executor is cleaned up automatically.`,

                    code1: `// -------------------------- Ex : 15 ----------------
// Complete practical pattern

from concurrent.futures import (
    ThreadPoolExecutor,
    as_completed
)

def process_item(item):

    # I/O-bound operation
    return f"Processed {item}"

items = [1, 2, 3, 4, 5]

with ThreadPoolExecutor(max_workers=3) as executor:

    futures = [
        executor.submit(process_item, item)
        for item in items
    ]

    for future in as_completed(futures):

        try:
            result = future.result()
            print(result)

        except Exception as error:
            print("Task failed:", error)

print("All tasks completed")`
                }
            ]
        },
{
    id: 1,
    title: "Multithreading vs Multiprocessing",
    note: [
        {
            definition: `<b>Multithreading</b> means running multiple <b>threads</b> within the same <b>process</b>.
<b>Multiprocessing</b> means running multiple <b>processes</b>, where each process has its own memory space and Python interpreter.
The main difference is that <b>multithreading</b> is useful mainly for <b>I/O-bound tasks</b>, while <b>multiprocessing</b> is useful mainly for <b>CPU-bound tasks</b>.`,

            text1: `<b>Multithreading</b>
• Multiple threads share the same process memory.
• Threads are lightweight and faster to create.
• Best for <b>I/O-bound tasks</b> such as API calls, file operations, database queries and network requests.
• In CPython, the <b>GIL (Global Interpreter Lock)</b> prevents multiple threads from executing Python bytecode simultaneously.

<b>Multiprocessing</b>
• Multiple processes run independently.
• Each process has its own memory space and Python interpreter.
• Processes are heavier than threads.
• Best for <b>CPU-bound tasks</b> such as calculations, image processing and data processing.
• Each process can execute Python code on a different CPU core.

<b>Simple rule:</b>
<b>I/O-bound → Multithreading</b>
<b>CPU-bound → Multiprocessing</b>`,

            code1: `// ========================== Ex : 1 ==========================
// Multithreading - I/O-bound task

import threading
import time

def download_file(file_name):
    print(f"Downloading {file_name}...")
    time.sleep(2)  # Simulates I/O operation
    print(f"{file_name} downloaded")

thread1 = threading.Thread(
    target=download_file,
    args=("file1.txt",)
)

thread2 = threading.Thread(
    target=download_file,
    args=("file2.txt",)
)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("All downloads completed")

// Output:
// Downloading file1.txt...
// Downloading file2.txt...
// file1.txt downloaded
// file2.txt downloaded
// All downloads completed


// ========================== Ex : 2 ==========================
// Multiprocessing - CPU-bound task

from multiprocessing import Process

def calculate():
    total = 0

    for i in range(10_000_000):
        total += i

    print("Calculation completed")

process1 = Process(target=calculate)
process2 = Process(target=calculate)

process1.start()
process2.start()

process1.join()
process2.join()

print("All calculations completed")

// Output:
// Calculation completed
// Calculation completed
// All calculations completed


// ========================== Ex : 3 ==========================
// Comparing the basic idea

// Multithreading:
// Process
//   ├── Thread 1
//   ├── Thread 2
//   └── Thread 3
//
// Threads share memory.


// Multiprocessing:
// Process 1 → Own memory
// Process 2 → Own memory
// Process 3 → Own memory
//
// Processes have separate memory spaces.


// ========================== Ex : 4 ==========================
// Real-world examples

// Multithreading:
// 1. Calling multiple REST APIs
// 2. Downloading multiple files
// 3. Reading multiple files
// 4. Database/network requests
// 5. Web scraping

// Multiprocessing:
// 1. Image processing
// 2. Video processing
// 3. Large mathematical calculations
// 4. Machine learning data preprocessing
// 5. CPU-intensive data processing


// ========================== Ex : 5 ==========================
// Multithreading with ThreadPoolExecutor

from concurrent.futures import ThreadPoolExecutor
import time

def fetch_data(api_name):
    print(f"Calling {api_name}")
    time.sleep(2)
    return f"{api_name} response"

with ThreadPoolExecutor(max_workers=3) as executor:

    results = executor.map(
        fetch_data,
        ["API-1", "API-2", "API-3"]
    )

    for result in results:
        print(result)

// Output:
// Calling API-1
// Calling API-2
// Calling API-3
// API-1 response
// API-2 response
// API-3 response


// ========================== Ex : 6 ==========================
// Multiprocessing with ProcessPoolExecutor

from concurrent.futures import ProcessPoolExecutor

def calculate_square(number):
    return number * number

if __name__ == "__main__":

    with ProcessPoolExecutor(max_workers=3) as executor:

        results = executor.map(
            calculate_square,
            [2, 4, 6, 8]
        )

        print(list(results))

// Output:
// [4, 16, 36, 64]


// ========================== Ex : 7 ==========================
// Quick comparison

// Multithreading
// -----------------------------
// Unit          : Thread
// Memory        : Shared
// Overhead      : Low
// Best for      : I/O-bound
// GIL           : Important in CPython
// Example       : API calls

// Multiprocessing
// -----------------------------
// Unit          : Process
// Memory        : Separate
// Overhead      : Higher
// Best for      : CPU-bound
// GIL           : Each process has its own interpreter
// Example       : Image processing`
        }
    ]
},
{
    id: 1,
    title: "Queues in Multithreading",
    note: [
        {
            definition: `<b>Queue</b> is a thread-safe data structure used to safely <b>exchange data between multiple threads</b>.
            Python provides the <b>queue</b> module for creating queues that can be safely accessed by multiple threads.
            A queue normally follows <b>FIFO (First In, First Out)</b> order.`,

            text1: `<b>Why use Queue in multithreading?</b>
            When multiple threads share data, directly accessing a common list can cause <b>race conditions</b>.
            A <b>Queue</b> provides built-in <b>thread synchronization</b>, so multiple threads can safely add and remove items.

            <b>Common Queue methods:</b>
            • <b>put()</b> → Add an item to the queue
            • <b>get()</b> → Remove and return an item
            • <b>task_done()</b> → Indicate that a queued task is completed
            • <b>join()</b> → Wait until all queued tasks are completed
            • <b>qsize()</b> → Return approximate queue size
            • <b>empty()</b> → Check whether the queue is empty

            <b>Important:</b> <b>Queue</b> is thread-safe, so you normally do not need to manually use a <b>Lock</b> when putting or getting items.`,

            code1: `import threading
import queue
import time

q = queue.Queue()

def producer():
    for i in range(1, 6):
        print(f"Produced: {i}")
        q.put(i)
        time.sleep(0.5)

def consumer():
    while True:
        item = q.get()

        if item is None:
            break

        print(f"Consumed: {item}")
        q.task_done()

producer_thread = threading.Thread(target=producer)
consumer_thread = threading.Thread(target=consumer)

producer_thread.start()
consumer_thread.start()

producer_thread.join()

# Tell consumer that there are no more items
q.put(None)

consumer_thread.join()

print("All work completed")`,

            output1: `Produced: 1
Consumed: 1
Produced: 2
Consumed: 2
Produced: 3
Consumed: 3
Produced: 4
Consumed: 4
Produced: 5
Consumed: 5
All work completed`
        },

        {
            definition: `<b>Producer-Consumer Pattern</b> is a common multithreading pattern where:
            <b>Producer</b> → Creates or produces data and puts it into the queue.
            <b>Consumer</b> → Gets data from the queue and processes it.
            The <b>Queue</b> acts as a safe communication channel between the threads.`,

            text1: `<b>Flow:</b>
            Producer Thread → <b>put()</b> → Queue → <b>get()</b> → Consumer Thread

            This is useful when the <b>producer and consumer work at different speeds</b>.

            <b>Real-time examples:</b>
            • Web server request processing
            • Background job processing
            • Email/message processing
            • Logging systems
            • File processing
            • Task scheduling
            • Image/video processing`,

            code1: `import queue
import threading
import time

tasks = queue.Queue()

def producer():
    for task in ["Task 1", "Task 2", "Task 3"]:
        print(f"Adding: {task}")
        tasks.put(task)

def consumer():
    while True:
        task = tasks.get()

        if task is None:
            tasks.task_done()
            break

        print(f"Processing: {task}")
        time.sleep(1)
        tasks.task_done()

producer_thread = threading.Thread(target=producer)
consumer_thread = threading.Thread(target=consumer)

producer_thread.start()
consumer_thread.start()

producer_thread.join()

tasks.put(None)

tasks.join()
consumer_thread.join()

print("Finished")`,

            output1: `Adding: Task 1
Adding: Task 2
Adding: Task 3
Processing: Task 1
Processing: Task 2
Processing: Task 3
Finished`
        },

        {
            definition: `<b>Queue Types in Python</b>
            Python's <b>queue</b> module provides different queue implementations.`,

            text1: `<b>1. Queue</b> → FIFO (First In, First Out)
            <b>2. LifoQueue</b> → LIFO (Last In, First Out)
            <b>3. PriorityQueue</b> → Items are processed according to priority

            <b>FIFO example:</b>
            Put: A → B → C
            Get: A → B → C

            <b>LIFO example:</b>
            Put: A → B → C
            Get: C → B → A`,

            code1: `import queue

q = queue.Queue()

q.put("A")
q.put("B")
q.put("C")

print(q.get())
print(q.get())
print(q.get())

stack = queue.LifoQueue()

stack.put("A")
stack.put("B")
stack.put("C")

print(stack.get())
print(stack.get())
print(stack.get())`,

            output1: `A
B
C
C
B
A`
        },

        {
            definition: `<b>PriorityQueue</b> allows threads to process items based on <b>priority</b> instead of insertion order.
            The item with the <b>lowest priority number</b> is returned first.`,

            text1: `<b>PriorityQueue syntax:</b>
            <b>queue.PriorityQueue()</b>

            Items are commonly stored as:
            <b>(priority, data)</b>

            Example:
            <b>(1, "High Priority")</b>
            <b>(2, "Medium Priority")</b>
            <b>(3, "Low Priority")</b>`,

            code1: `import queue

q = queue.PriorityQueue()

q.put((3, "Low Priority"))
q.put((1, "High Priority"))
q.put((2, "Medium Priority"))

print(q.get())
print(q.get())
print(q.get())`,

            output1: `(1, 'High Priority')
(2, 'Medium Priority')
(3, 'Low Priority')`
        },

        {
            definition: `<b>Key Point:</b> A <b>Queue</b> is especially useful when one thread produces work and another thread consumes that work.`,

            text1: `<b>Remember:</b>
            • <b>queue.Queue</b> → FIFO
            • <b>queue.LifoQueue</b> → LIFO
            • <b>queue.PriorityQueue</b> → Priority-based processing
            • <b>put()</b> → Add item
            • <b>get()</b> → Remove item
            • <b>task_done()</b> → Mark task completed
            • <b>join()</b> → Wait for all tasks
            • Queue provides built-in <b>thread safety</b>
            • Common pattern → <b>Producer → Queue → Consumer</b>`,

            code1: `# Basic Queue example

import queue

q = queue.Queue()

q.put("Apple")
q.put("Banana")
q.put("Orange")

while not q.empty():
    print(q.get())`,

            output1: `Apple
Banana
Orange`
        }
    ]
},
{
    id: 1,
    title: "Deadlock & Avoidance",
    note: [
        {
            definition: `<b>Deadlock</b> is a situation in <b>multithreading</b> where two or more threads are waiting for each other to release resources, so <b>none of the threads can continue</b>.
            In Python, deadlocks commonly happen when multiple threads acquire <b>Locks</b> in a different order.`,

            text1: `<b>Simple example:</b>
            Thread 1 has <b>Lock A</b> and waits for <b>Lock B</b>.
            Thread 2 has <b>Lock B</b> and waits for <b>Lock A</b>.

            <b>Thread 1:</b> Lock A → waiting for Lock B
            <b>Thread 2:</b> Lock B → waiting for Lock A

            Both threads keep waiting forever.

            <b>Deadlock = Threads are stuck waiting for each other.</b>`,

            code1: `import threading
import time

lock_a = threading.Lock()
lock_b = threading.Lock()

def thread1():
    with lock_a:
        print("Thread 1 acquired Lock A")

        time.sleep(1)

        print("Thread 1 waiting for Lock B")

        with lock_b:
            print("Thread 1 acquired Lock B")

def thread2():
    with lock_b:
        print("Thread 2 acquired Lock B")

        time.sleep(1)

        print("Thread 2 waiting for Lock A")

        with lock_a:
            print("Thread 2 acquired Lock A")

t1 = threading.Thread(target=thread1)
t2 = threading.Thread(target=thread2)

t1.start()
t2.start()

t1.join()
t2.join()

print("Finished")`,

            output1: `Thread 1 acquired Lock A
Thread 2 acquired Lock B
Thread 1 waiting for Lock B
Thread 2 waiting for Lock A

# Program gets stuck here.
# Neither thread can continue.`
        },

        {
            definition: `<b>Four Conditions for Deadlock</b>
            A deadlock can occur when these <b>four conditions</b> exist at the same time.`,

            text1: `<b>1. Mutual Exclusion</b>
            Only one thread can use a resource at a time.

            <b>2. Hold and Wait</b>
            A thread holds one resource while waiting for another resource.

            <b>3. No Preemption</b>
            A resource cannot be forcibly taken from a thread; the thread must release it.

            <b>4. Circular Wait</b>
            Threads form a circular chain where each thread waits for a resource held by another thread.

            <b>Important:</b> Breaking <b>any one</b> of these conditions can prevent deadlock.`,

            code1: `# Circular wait example

Thread 1:
    Lock A → waits for Lock B

Thread 2:
    Lock B → waits for Lock A

# Circular dependency:
#
# Thread 1 → Lock B
#      ↑        ↓
#    Lock A ← Thread 2`,

            output1: `Thread 1 waits for Thread 2
Thread 2 waits for Thread 1

Result:
Deadlock`
        },

        {
            definition: `<b>Deadlock Avoidance</b> means designing the program so that threads do not get permanently stuck waiting for locks.`,

            text1: `<b>Common ways to avoid deadlocks:</b>

            <b>1. Acquire locks in a consistent order</b>
            Always acquire <b>Lock A before Lock B</b> in every thread.

            <b>2. Use timeout</b>
            Use <b>acquire(timeout=...)</b> so a thread does not wait forever.

            <b>3. Release locks properly</b>
            Use <b>with lock:</b> so the lock is automatically released.

            <b>4. Avoid unnecessary locks</b>
            Lock only the section of code that actually needs synchronization.

            <b>5. Keep lock scope small</b>
            Do not hold a lock while performing slow operations such as network or file operations.`,

            code1: `import threading

lock_a = threading.Lock()
lock_b = threading.Lock()

def thread1():
    with lock_a:
        print("Thread 1 acquired Lock A")

        with lock_b:
            print("Thread 1 acquired Lock B")

def thread2():
    # Same lock order: A → B
    with lock_a:
        print("Thread 2 acquired Lock A")

        with lock_b:
            print("Thread 2 acquired Lock B")

t1 = threading.Thread(target=thread1)
t2 = threading.Thread(target=thread2)

t1.start()
t2.start()

t1.join()
t2.join()

print("Finished")`,

            output1: `Thread 1 acquired Lock A
Thread 1 acquired Lock B
Thread 2 acquired Lock A
Thread 2 acquired Lock B
Finished

# Both threads use the same lock order:
# Lock A → Lock B
#
# Therefore, circular waiting is avoided.`
        },

        {
            definition: `<b>Using Lock Timeout</b> allows a thread to stop waiting if a lock cannot be acquired within a specified amount of time.`,

            text1: `<b>Syntax:</b>
            <b>lock.acquire(timeout=seconds)</b>

            It returns:
            <b>True</b> → Lock was acquired
            <b>False</b> → Lock could not be acquired within the timeout

            This prevents a thread from <b>waiting forever</b>.`,

            code1: `import threading
import time

lock = threading.Lock()

def worker():
    acquired = lock.acquire(timeout=2)

    if acquired:
        try:
            print("Lock acquired")
        finally:
            lock.release()
    else:
        print("Could not acquire lock")

lock.acquire()

t = threading.Thread(target=worker)
t.start()

time.sleep(1)

lock.release()

t.join()

print("Finished")`,

            output1: `Lock acquired
Finished`
        },

        {
            definition: `<b>Using with lock:</b> is the preferred way to manage locks because Python automatically releases the lock when the block finishes, even if an exception occurs.`,

            text1: `<b>Without with:</b>
            You must manually call <b>acquire()</b> and <b>release()</b>.

            <b>With with:</b>
            Python automatically handles acquiring and releasing the lock.

            <b>Recommended:</b>
            Use <b>with lock:</b> whenever possible.`,

            code1: `import threading

lock = threading.Lock()

def worker():
    with lock:
        print("Thread is using the shared resource")

thread = threading.Thread(target=worker)

thread.start()
thread.join()

print("Finished")`,

            output1: `Thread is using the shared resource
Finished`
        },

        {
            definition: `<b>Deadlock vs Race Condition</b>
            Both are multithreading problems, but they are different.`,

            text1: `<b>Race Condition</b>
            Multiple threads access shared data at the same time and the final result depends on the timing/order of execution.

            <b>Deadlock</b>
            Multiple threads wait for each other indefinitely and cannot continue.

            <b>Race Condition:</b> Wrong/unexpected result
            <b>Deadlock:</b> Program gets stuck

            <b>Lock</b> can help prevent race conditions, but <b>incorrect lock usage can itself cause deadlocks</b>.`,

            code1: `# Race Condition

counter = counter + 1

# Two threads may execute this at the same time.

# Deadlock

Thread 1:
    Lock A
    wait for Lock B

Thread 2:
    Lock B
    wait for Lock A`,

            output1: `Race Condition:
Unexpected or incorrect value

Deadlock:
Threads remain blocked`
        },

        {
            definition: `<b>Deadlock Prevention Checklist</b> helps identify and avoid common deadlock situations in multithreaded programs.`,

            text1: `<b>Best practices:</b>
            ✓ Always acquire multiple locks in the <b>same order</b>.
            ✓ Use <b>with lock:</b> whenever possible.
            ✓ Use <b>timeout</b> when appropriate.
            ✓ Keep <b>critical sections small</b>.
            ✓ Avoid holding locks during <b>slow operations</b>.
            ✓ Avoid unnecessary nested locks.
            ✓ Release manually acquired locks using <b>try/finally</b>.

            <b>Key interview point:</b>
            The most common simple strategy is to establish a <b>global lock ordering</b> and make every thread acquire multiple locks in that same order.`,

            code1: `# Safe lock ordering

with lock_a:
    with lock_b:
        # Critical section
        pass

# Always:
# Lock A → Lock B
#
# Never:
# Lock B → Lock A`,

            output1: `Consistent lock ordering
        ↓
No circular waiting
        ↓
Deadlock avoided`
        }
    ]
},
        {
            id: 1,
            section: `Synchronization`,
            title: "Asynchronous Programming with Asyncio",
            note: [
                {
                    text1: `In the programming world, the concept of "non-blocking" is pervasive. JavaScript developers often use the term "asynchronous" because it is one of JavaScript's strengths. However, to truly understand asynchronous programming, it's essential to grasp the concepts of concurrent and parallel programming.

<b>Concurrent Programming</b>
When several independent entities are working simultaneously, the programming is concurrent. It doesn't necessarily mean that these tasks are running at the exact same time. Instead, it means that tasks are making progress over time by sharing resources, such as CPU time. The main advantage of concurrent programming is its robustness: if one process crashes, the rest of your program continues to function.

<b>Parallel Programming</b>
If an algorithm can divide its work into several parts, it is parallel. The more processors you have, the more you benefit from parallelism. Efficient parallel programming optimizes the resources of modern machines for better performance.

<b>Illustrating Concurrency vs. Parallelism with Cooking</b>
<b>Concurrency Example</b>:
Imagine you are preparing a meal where you need to grill some meat and make a sauce. You start by putting the meat on the barbecue. While the meat is grilling, you chop the tomatoes and other vegetables for the sauce. Then, you begin boiling the sauce while occasionally checking on the meat. Here, both tasks (grilling the meat and making the sauce) are in progress, but you are switching your attention between them. This represents concurrency.

<b>Parallelism Example</b>:
Now, let's say you have a friend to help you. While you focus on grilling the meat, your friend takes care of making the sauce. Both tasks are being done simultaneously without the need to switch attention between them. This represents parallelism.

<b>What is Asynchronous Programming?</b>
Asynchronous programming involves handling input/output (I/O) operations that occur outside your program, such as user input, printing to a terminal, reading from a socket, or writing to disk. The key characteristics of asynchronous I/O are:

The time taken by the operation is not CPU-dependent. Instead, it depends on factors like disk speed, network latency, and other external conditions.

The program cannot predict when the operation will end.

For services with significant I/O (like web servers, databases, and deployment scripts), optimizing these operations can greatly improve performance.

Let's see examples of blocking code and non-blocking code.`,
                    code1: `// ------------ Ex : 1 ------------
                    // Example of Blocking and Non-blocking Code
import time

def task():
    time.sleep(2)
    print("Hello")

for _ in range(3):
    task()
    // In this synchronous program, each task waits for the previous one to finish, causing delays.
    
    // ------------ Ex : 2 ------------
    // let's look at an asynchronous version using <b>asyncio</b>:
    import asyncio

async def task():
    await asyncio.sleep(2)
    print("Hello")

async def main():
    tasks = [task() for _ in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())
// In this asynchronous program, tasks run concurrently, reducing the total execution time. Let's explore the components of asynchronous programming.

<b>Components of Asynchronous Programming</b>
Event loops, coroutines, and futures are the essential elements of an asynchronous Python program.

<b>Event Loop</b>: Manages task switching and execution flow, keeping track of tasks to be run asynchronously.

<b>Coroutines</b>: Special functions that can be paused and resumed, allowing other tasks to run during the wait. A coroutine specifies where in the function the task-switching event should take place, returning control to the event loop. Coroutines are typically created by the event loop and stored internally in a task queue.

<b>Futures</b>: Placeholders for results from coroutines, storing the result or exceptions. As soon as the event loop initiates a coroutine, a corresponding future is created that stores the result of the coroutine, or an exception if one was thrown during the coroutine's execution.
    `
                }
            ]
        },
        {
            id: 1,
            title: "async / await",
            note: [
                {
                    text1: `
                    This allows efficient concurrency for I/O-bound tasks by allowing the event loop to switch between tasks while they are waiting, without requiring a separate thread for each task.
                    
                    <b>async</b> and <b>await</b> in Python are used to define and run <b>non-blocking asynchronous code</b> using the <b>asyncio</b> library. This allows for better performance in I/O-bound tasks by enabling concurrent execution without using threads.
                    
                    <b>async</b> declares an asynchronous function
<b>await</b> pauses the function execution until the awaited task completes

<b><span style="color:red">asyncio.run()</span></b>: is used to <b>run an async function</b> from the <b>top-level</b> of your Python program.
It starts the <b>event loop</b>, runs your coroutine, and then <b>closes the loop</b> automatically when it's done.
Start the async engine, run this coroutine, and shut it down when finished.

<b>1. “This function runs the passed coroutine…”</b>
✔️ It means you pass an async def function to asyncio.run(), and it will run that function completely — start to finish.

-> This function runs the passed coroutine, taking care of managing the asyncio event loop and finalizing asynchronous generators.

-> This function cannot be called when another asyncio event loop is running in the same thread.

-> If debug is <b>True</b>, the event loop will be run in debug mode.
    You can pass debug=True to help detect bugs in your async code:
asyncio.run(main(), debug=True)

-> This function always creates a new event loop and closes it at the end. It should be used as a main entry point for asyncio programs, and should ideally only be called once.

<b>Note</b>: asyncio.run() must be called only once per program — it's for top-level scripts only, not inside another running event loop (like in Jupyter notebooks).

<b><span style="color:red">asyncio.sleep()</span></b>
    <b>asyncio.sleep()</b> is a non-blocking version of <b>time.sleep()</b> used in asynchronous (async) functions.

It pauses the current coroutine without blocking the entire program — allowing other async tasks to run during the wait.

If result is provided, it is returned to the caller when the coroutine completes.
sleep() always suspends the current task, allowing other tasks to run.
Syntax :  await asyncio.sleep(seconds)

    <b>Ex : 2</b>
    -> 🔁 <b>get_running_loop()</b> returns the <b>active event loop</b> (which is auto-created by asyncio.run()).
    -> You can use this to access precise <b>event-loop-based time</b>, which is monotonic (never goes backward).
    print(loop)
    end_time = loop.time() + 5.0
    -> 🕒 <b>loop.time()</b> gives current time from event loop (in seconds).
    -> So end_time = now + 5 seconds.
->     Prints the current real-world time every second.
-> Runs until ~4 seconds have passed, because it's checking:
loop.time() + 1.0 >= end_time


<b><span style="color:red">asyncio.gather</span></b>
Runs multiple <b>awaitable</b> tasks concurrently and <b>waits for all of them to complete</b>.
In the <b>Ex : 3</b>, we are trying to continue the execution of other tasks even if another one executing is sleeping (blocking). Notice the <b>async</b> keyword in front of the <b>task</b> and <b>main</b> functions.

Those functions are now <b>coroutines</b>.
Coroutine functions in Python are defined using the keyword <b>async</b> with <b>def (async def)</b>. The <b>main()</b> function here is the task coordinator, as it executes/coordinates all tasks using <b>asyncio.gather()</b>. The event loop is responsible for scheduling and running these asynchronous tasks. The <b>asyncio.gather()</b> function runs awaitable objects concurrently.


<b><span style="color:red">asyncio.shield</span></b>
`,
                    code1: `// ---------- Ex : 1 ----------
                    import asyncio

async def main():
    print("Hello from async")

asyncio.run(main())



//-------------  Ex : 2 -----------
import asyncio
import datetime

async def display_date():
    loop = asyncio.get_running_loop()
    print(loop)
    end_time = loop.time() + 5.0
    while True:
        print(datetime.datetime.now())
        if (loop.time() + 1.0) >= end_time:
            break
        await asyncio.sleep(1)

asyncio.run(display_date())


//Output:
// <_UnixSelectorEventLoop running=True closed=False debug=False>
// 2025-06-27 23:47:00.521097
// 2025-06-27 23:47:01.521327
// 2025-06-27 23:47:02.522314
// 2025-06-27 23:47:03.522953


//-------------  Ex : 2 -----------
import asyncio

async def task():
    await asyncio.sleep(2)
    print("Hello")

async def main():
    tasks = [task() for _ in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())

// Output:
// Hello
// Hello
// Hello

//-------------  Ex : 3 -----------
import aiohttp
import asyncio

async def fetch(session, city):
    url = f"https://www.prevision-meteo.ch/services/json/{city}"
    async with session.get(url) as response:
        data = await response.json()
        print(f"Temperature at {city}: {data['current_condition']['tmp']} C")

async def main():
    async with aiohttp.ClientSession() as session:
        cities = ['paris', 'toulouse', 'marseille']
        tasks = [fetch(session, city) for city in cities]
        await asyncio.gather(*tasks)

asyncio.run(main())
`
                }
            ]
        },
        {
            id: 1,
            section: `Networking`,
            title: "Networking",
            note: [
                {
                    text1: `<b>Network Programming Basics</b>
Network programming involves writing software that allows different systems and applications to communicate over a network. This can range from simple applications, like sending messages between computers, to more complex systems, such as distributed databases and web servers. Network programming is essential in today's connected world, enabling everything from browsing the internet to conducting secure online transactions.

<b>Understanding Networking Concepts</b>
Before diving into Python's capabilities for network programming, it's important to understand some fundamental networking concepts:

<b>Network Protocols</b>: These are rules and conventions for communication between network devices. Common protocols include TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is reliable and makes sure that data is delivered in order, making it suitable for applications like web browsing and email. UDP, on the other hand, is faster but does not guarantee delivery or order, making it suitable for applications like live video streaming and online gaming.
<b>IP Addresses</b>: Every device on a network has a unique IP (Internet Protocol) address, which acts as its identifier. There are two versions of IP addresses: IPv4 and IPv6. IPv4 addresses are 32-bit numbers, typically written as four decimal numbers separated by dots (e.g., 192.168.1.1). IPv6 addresses are 128-bit numbers, written as eight groups of four hexadecimal digits separated by colons.
<b>Ports</b>: Ports are numerical identifiers for specific processes or services on a device. For example, web servers typically use port 80 for HTTP traffic and port 443 for HTTPS traffic. When data is sent to an IP address, the port number indicates which application should receive the data.
<b>Sockets</b>: A socket is an endpoint for communication between two devices. It combines an IP address and a port number to uniquely identify a connection. Sockets provide a way for software to read and write data across the network.

<b>The Role of Python in Network Programming</b>
The Python includes several built-in libraries that simplify network tasks, such as:

<b>socket</b>: This library provides low-level access to network interfaces, allowing you to create and manage network connections using both TCP and UDP protocols.
<b>http.client and http.server</b>: These libraries offer higher-level functions for creating HTTP clients and servers, making it easier to build web-based applications.
<b>urllib and requests</b>: These libraries simplify working with URLs and handling HTTP requests, enabling you to interact with web APIs and download content from the web.
<b>asyncio</b>: This library provides support for asynchronous programming, allowing you to handle multiple network connections concurrently without blocking the main execution thread.

<b>Why Use Python for Network Programming?</b>
There are several reasons why Python is a popular choice for network programming:

<b>Simplicity and Readability</b>: Python's clean syntax and readability make it easier to write and understand network code, reducing the likelihood of bugs and making maintenance simpler.
<b>Extensive Libraries</b>: Python's standard library includes many modules for network programming, and there are numerous third-party libraries available for more specialized tasks.
<b>Cross-Platform Compatibility</b>: Python is cross-platform, meaning that code written on one operating system will typically run on another with little or no modification. This is particularly useful in network programming, where applications often need to run on different types of devices.
<b>Community and Support</b>: Python has a large and active community of developers, providing a wealth of resources, tutorials, and libraries. This makes it easier to find solutions to problems and get help when needed.

<b>Practical Applications of Python in Network Programming</b>
Python can be used for a wide range of network programming tasks, including:

<b>Creating Web Servers</b>: Python can be used to create web servers that handle HTTP requests and serve web pages or APIs. Frameworks like Flask and Django simplify the process of building web applications.
<b>Developing Network Tools</b>: Python is often used to create tools for network diagnostics, monitoring, and management. Examples include network scanners, packet sniffers, and traffic analyzers.
<b>Automating Network Tasks</b>: Python scripts can automate various network-related tasks, such as configuring network devices, managing network services, and performing regular network maintenance.
<b>Building Chat Applications</b>: Python can be used to create real-time chat applications that allow users to communicate over a network. These applications can range from simple command-line tools to complex, feature-rich messaging platforms.

<b>Creating Sockets in Python</b>
Sockets are fundamental to network programming as they provide the interface for sending and receiving data between devices on a network. In Python, the socket module is used to create and manage sockets, supporting both TCP and UDP protocols. Here we will go through the process of creating sockets and establishing basic network communication.

<b>Understanding Sockets</b>
A socket is essentially a combination of an IP address and a port number, creating a unique endpoint for network communication. There are two main types of sockets:

<b>Stream Sockets (TCP)</b>: These sockets use the Transmission Control Protocol (TCP) to provide reliable, connection-oriented communication. They make sure that data is delivered in the correct order and without errors.
<b>Datagram Sockets (UDP)</b>: These sockets use the User Datagram Protocol (UDP) to provide connectionless communication. They are faster but do not guarantee delivery or order, making them suitable for applications where speed is more critical than reliability.

<b>Creating a TCP Socket</b>
Creating a TCP socket in Python is straightforward. Here’s a step-by-step guide:

<b>Import the socket module</b>: The <b>socket</b> module provides the necessary functions and constants for network communication.
<b>Create a socket object</b>: Use the <b>socket.socket()</b> function to create a new socket object.
Bind the socket to an address and port</b>: Use the <b>bind()</b> method to associate the socket with a specific IP address and port number.
<b>Listen for incoming connections</b>: Use the <b>listen()</b> method to enable the socket to accept connections.
<b>Accept a connection</b>: Use the <b>accept()</b> method to wait for an incoming connection. This method returns a new socket object representing the connection and the address of the client.
<b>Receive and send data</b>: Use the <b>recv()</b> and <b>sendall()</b> methods to receive and send data over the connection.
<b>Close the connection</b>: Use the <b>close()</b> method to close the socket when done.

<b>Creating a UDP Socket</b>
Creating a UDP socket is similar to creating a TCP socket, but with some differences. UDP sockets are connectionless, meaning there is no need to establish a connection before sending data. Here’s how to create a UDP socket:

Import the <b>socket</b> module.
Create a socket object using the <b>socket.socket()</b> function with <b>socket.AF_INET</b> and <b>socket.SOCK_DGRAM</b>.
<b>Bind the socket to an address and port</b> using the <b>bind()</b> method.
<b>Send and receive data</b> using the <b>sendto()</b> and <b>recvfrom()</b> methods.

<b>Error Handling in Sockets</b>
Network communication can be unpredictable, so it's important to handle errors gracefully. Python's <b>socket</b> module raises exceptions for various errors, such as <b>socket.error, socket.timeout</b>, and <b>socket.gaierror</b>. You can use try-except blocks to handle these exceptions and make sure your program can recover from errors:

<b>Client-Server Communication</b>
Client-server communication is a fundamental concept in network programming. It involves two main components: the client, which initiates the communication, and the server, which responds to the client’s requests. This section will guide you through the process of implementing client-server communication in Python using both TCP and UDP protocols.

<b>Implementing TCP Client-Server Communication</b>
TCP (Transmission Control Protocol) is a connection-oriented protocol that makes sure reliable and ordered delivery of data. It is commonly used in applications where data integrity is crucial, such as web servers and email clients.

<b>TCP Server</b>
First, let's create a simple TCP server that listens for incoming connections and echoes back any data it receives. This server will run indefinitely, handling one connection at a time.

<b>IP address</b>	A unique address assigned to each device in a network (e.g., 127.0.0.1)
<b>Port</b>	A logical endpoint for communication (e.g., Flask runs on port 5000)
<b>Protocol</b>	Rules for data exchange, like HTTP, TCP, UDP
<b>Client/Server</b>	Client sends request → Server responds
<b>Socket</b>	Endpoint for sending/receiving raw data
<b>DNS</b>	Translates names like google.com to IP addresses
<b>CORS</b>	Security rule that restricts how websites from different origins communicate`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Built-in functions`,
            title: "isinstance()",
            note: [
                {
                    text1: `The built-in isinstance() function in Python checks whether an object belongs to a specified class or a tuple of classes, returning a <b>boolean (True or False)</b>
                    
                    <span style="font-family: 'Courier New', monospace;">isinstance(object, classinfo)</span>
    <b>object</b>: The item you want to check.
    <b>classinfo</b>: A class, a type, or a tuple of classes and types.
    </b>.
    
    <b>Key Characteristics</b>
    <b>Inheritance Awareness</b>: Unlike comparing types directly with type(obj) == Class, isinstance() returns True if the object is an instance of a subclass of the specified class.

    <b>Multiple Type Checking</b>: You can pass a tuple of classes to classinfo (e.g., isinstance(x, (int, float))), and it will return True if the object matches any type in the tuple.`,
                    code1: `
# ---------- Ex : 1 — Validate API input ----------

user_id = 101

if isinstance(user_id, int):
    print("Valid user ID")
else:
    print("User ID must be an integer")


# ---------- Ex : 2 — Validate user name ----------

name = "Anand"

if isinstance(name, str):
    print("Valid name")
else:
    print("Name must be a string")


# ---------- Ex : 3 — Validate price ----------

price = 499.99

if isinstance(price, (int, float)):
    print("Valid price")
else:
    print("Price must be a number")


# ---------- Ex : 4 — Handle API response ----------

response = {
    "status": 200,
    "data": ["Anand", "Rahul", "John"]
}

if isinstance(response.get("data"), list):
    for user in response["data"]:
        print(user)


# ---------- Ex : 5 — Validate JSON-like data ----------

request_data = {
    "name": "Anand",
    "age": 36,
    "skills": ["React", "Python", "Java"]
}

if isinstance(request_data.get("name"), str):
    print("Name is valid")

if isinstance(request_data.get("age"), int):
    print("Age is valid")

if isinstance(request_data.get("skills"), list):
    print("Skills are valid")


# ---------- Ex : 6 — Function accepts multiple types ----------

def process_value(value):

    if isinstance(value, str):
        print("Processing string:", value)

    elif isinstance(value, int):
        print("Processing integer:", value)

    elif isinstance(value, list):
        print("Processing list:", value)

    else:
        print("Unsupported type")

process_value("Anand")
process_value(100)
process_value(["React", "Java"])


# ---------- Ex : 7 — Check multiple types ----------

value = 100

if isinstance(value, (int, float)):
    print("Value is numeric")

# Same as:

if isinstance(value, int) or isinstance(value, float):
    print("Value is numeric")


# ---------- Ex : 8 — Validate function arguments ----------

def calculate_salary(salary):

    if not isinstance(salary, (int, float)):
        raise TypeError("Salary must be a number")

    return salary * 12

print(calculate_salary(50000))


# ---------- Ex : 9 — Process database records ----------

records = [
    {"id": 1, "name": "Anand"},
    {"id": 2, "name": "Rahul"},
    "invalid record",
    {"id": 3, "name": "John"}
]

for record in records:

    if isinstance(record, dict):
        print("Processing:", record)

    else:
        print("Invalid record:", record)


# ---------- Ex : 10 — Check nested data ----------

user = {
    "name": "Anand",
    "address": {
        "city": "Hyderabad",
        "pincode": 500072
    }
}

address = user.get("address")

if isinstance(address, dict):
    city = address.get("city")

    if isinstance(city, str):
        print("City:", city)


# ---------- Ex : 11 — File processing ----------

def process_file(file):

    if isinstance(file, str):
        print("File path received:", file)

    elif isinstance(file, bytes):
        print("Binary file data received")

    else:
        print("Unsupported file type")


process_file("employee.pdf")
process_file(b"PDF binary data")


# ---------- Ex : 12 — Custom class ----------

class Employee:

    def __init__(self, name):
        self.name = name


employee = Employee("Anand")

if isinstance(employee, Employee):
    print("This is an Employee object")


# ---------- Ex : 13 — Inheritance ----------

class Employee:
    pass

class Developer(Employee):
    pass


developer = Developer()

print(isinstance(developer, Developer))  # True
print(isinstance(developer, Employee))   # True
print(isinstance(developer, object))     # True


# ---------- Ex : 14 — Real-world service layer ----------

class UserService:

    def save_user(self, user):

        if not isinstance(user, dict):
            raise TypeError("User must be a dictionary")

        if not isinstance(user.get("name"), str):
            raise TypeError("Name must be a string")

        if not isinstance(user.get("age"), int):
            raise TypeError("Age must be an integer")

        print("User saved successfully")


service = UserService()

service.save_user({
    "name": "Anand",
    "age": 36
})


# ---------- Ex : 15 — Real-world API response validation ----------

def process_api_response(response):

    if not isinstance(response, dict):
        raise TypeError("Response must be a dictionary")

    status = response.get("status")

    if not isinstance(status, int):
        raise TypeError("Status must be an integer")

    data = response.get("data")

    if isinstance(data, list):
        print("Processing list response")

    elif isinstance(data, dict):
        print("Processing object response")

    elif data is None:
        print("No data available")

    else:
        print("Unexpected response data")


process_api_response({
    "status": 200,
    "data": [{"id": 1}, {"id": 2}]
})
                    
                    `
                }
            ]
        },
        {
            id: 1,
            section: `Python libraries`,
            title: "math",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "random",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "datetime",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `dvanced Python`,
            title: "dvanced opics",
            note: [
                {
                    text1: `✅ Itertools & functools	❌ Not yet
✅ Threading & Multiprocessing	❌ Not yet
✅ Type Hinting (Python 3.9+)	❌ Not yet
✅ Async/Await	❌ Not yet
✅ Logging & Debugging`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Python Built-in Methods and Functions",
            note: [
                {
                    text1: `<h2>✅ String Methods</h2>
                    <table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>capitalize()</td>
      <td>str.capitalize()</td>
      <td>Capitalizes first character</td>
      <td>Returns string with first letter capitalized</td>
      <td><code>"hello".capitalize() → "Hello"</code></td>
    </tr>
    <tr>
      <td>lower()</td>
      <td>str.lower()</td>
      <td>Converts to lowercase</td>
      <td>All characters to lowercase</td>
      <td><code>"HeLLo".lower() → "hello"</code></td>
    </tr>
    <tr>
      <td>upper()</td>
      <td>str.upper()</td>
      <td>Converts to uppercase</td>
      <td>All characters to uppercase</td>
      <td><code>"hi".upper() → "HI"</code></td>
    </tr>
    <tr>
      <td>strip()</td>
      <td>str.strip()</td>
      <td>Removes whitespace</td>
      <td>Removes leading/trailing spaces</td>
      <td><code>" hello ".strip() → "hello"</code></td>
    </tr>
    <tr>
      <td>replace()</td>
      <td>str.replace(old, new)</td>
      <td>Replaces substring</td>
      <td>Replaces all occurrences</td>
      <td><code>"abc".replace("a", "z") → "zbc"</code></td>
    </tr>
    <tr>
      <td>split()</td>
      <td>str.split([sep])</td>
      <td>Splits string</td>
      <td>Returns list of substrings</td>
      <td><code>"a,b,c".split(",") → ['a','b','c']</code></td>
    </tr>
    <tr>
      <td>join()</td>
      <td>sep.join(iterable)</td>
      <td>Joins elements with separator</td>
      <td>Concatenates list into string</td>
      <td><code>"-".join(['a','b']) → "a-b"</code></td>
    </tr>
    <tr>
      <td>find()</td>
      <td>str.find(sub)</td>
      <td>Finds index of substring</td>
      <td>Returns first occurrence or -1</td>
      <td><code>"hello".find("e") → 1</code></td>
    </tr>
    <tr>
      <td>startswith()</td>
      <td>str.startswith(prefix)</td>
      <td>Checks start</td>
      <td>Returns True if string starts with prefix</td>
      <td><code>"abc".startswith("a") → True</code></td>
    </tr>
    <tr>
      <td>endswith()</td>
      <td>str.endswith(suffix)</td>
      <td>Checks end</td>
      <td>Returns True if string ends with suffix</td>
      <td><code>"abc".endswith("c") → True</code></td>
    </tr>
  </tbody>
</table>

<h2>📋 2. List Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>append()</td>
      <td>list.append(x)</td>
      <td>Adds item to end</td>
      <td>Modifies the list in place</td>
      <td><code>[1, 2].append(3) → [1, 2, 3]</code></td>
    </tr>
    <tr>
      <td>extend()</td>
      <td>list.extend(iterable)</td>
      <td>Adds multiple items</td>
      <td>Concatenates lists</td>
      <td><code>[1].extend([2,3]) → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>insert()</td>
      <td>list.insert(i, x)</td>
      <td>Inserts at position</td>
      <td>Shifts elements right</td>
      <td><code>[1,3].insert(1,2) → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>remove()</td>
      <td>list.remove(x)</td>
      <td>Removes first match</td>
      <td>Raises error if not found</td>
      <td><code>[1,2,3].remove(2) → [1,3]</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>list.pop([i])</td>
      <td>Removes and returns</td>
      <td>Default is last item</td>
      <td><code>[1,2,3].pop() → 3</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>list.clear()</td>
      <td>Removes all items</td>
      <td>Empties the list</td>
      <td><code>[1,2].clear() → []</code></td>
    </tr>
    <tr>
      <td>index()</td>
      <td>list.index(x)</td>
      <td>Returns index</td>
      <td>Of first occurrence</td>
      <td><code>[1,2,3].index(2) → 1</code></td>
    </tr>
    <tr>
      <td>count()</td>
      <td>list.count(x)</td>
      <td>Counts occurrences</td>
      <td>Returns number of matches</td>
      <td><code>[1,1,2].count(1) → 2</code></td>
    </tr>
    <tr>
      <td>sort()</td>
      <td>list.sort()</td>
      <td>Sorts list</td>
      <td>In ascending order by default</td>
      <td><code>[3,1,2].sort() → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>reverse()</td>
      <td>list.reverse()</td>
      <td>Reverses list</td>
      <td>In-place reversal</td>
      <td><code>[1,2,3].reverse() → [3,2,1]</code></td>
    </tr>
  </tbody>
</table>

<h2>🔑 3. Dictionary Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get()</td>
      <td>dict.get(key, default)</td>
      <td>Returns value by key</td>
      <td>Returns default if not found</td>
      <td><code>d.get("a", 0)</code></td>
    </tr>
    <tr>
      <td>keys()</td>
      <td>dict.keys()</td>
      <td>Returns keys</td>
      <td>As a view object</td>
      <td><code>dict.keys()</code></td>
    </tr>
    <tr>
      <td>values()</td>
      <td>dict.values()</td>
      <td>Returns values</td>
      <td>As a view object</td>
      <td><code>dict.values()</code></td>
    </tr>
    <tr>
      <td>items()</td>
      <td>dict.items()</td>
      <td>Returns key-value pairs</td>
      <td>As a view object</td>
      <td><code>dict.items()</code></td>
    </tr>
    <tr>
      <td>update()</td>
      <td>dict.update([other])</td>
      <td>Merges dictionaries</td>
      <td>Adds or overwrites keys</td>
      <td><code>d.update({'b': 2})</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>dict.pop(key[,default])</td>
      <td>Removes key</td>
      <td>Returns value or default</td>
      <td><code>d.pop("a")</code></td>
    </tr>
    <tr>
      <td>popitem()</td>
      <td>dict.popitem()</td>
      <td>Removes last inserted</td>
      <td>Returns key-value tuple</td>
      <td><code>d.popitem()</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>dict.clear()</td>
      <td>Removes all items</td>
      <td>Empties dictionary</td>
      <td><code>d.clear()</code></td>
    </tr>
    <tr>
      <td>setdefault()</td>
      <td>dict.setdefault(key[,default])</td>
      <td>Returns key value</td>
      <td>Inserts key with default if missing</td>
      <td><code>d.setdefault("a", 1)</code></td>
    </tr>
    <tr>
      <td>copy()</td>
      <td>dict.copy()</td>
      <td>Shallow copy</td>
      <td>Returns a copy of dict</td>
      <td><code>copy_dict = d.copy()</code></td>
    </tr>
  </tbody>
</table>


<h2>🔵 4. Set Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>add()</td>
      <td>set.add(elem)</td>
      <td>Adds an element</td>
      <td>Adds a unique element to the set</td>
      <td><code>s.add(4)</code></td>
    </tr>
    <tr>
      <td>update()</td>
      <td>set.update(iterable)</td>
      <td>Adds multiple elements</td>
      <td>Updates set with items from iterable</td>
      <td><code>s.update([5,6])</code></td>
    </tr>
    <tr>
      <td>remove()</td>
      <td>set.remove(elem)</td>
      <td>Removes element</td>
      <td>Raises error if not found</td>
      <td><code>s.remove(3)</code></td>
    </tr>
    <tr>
      <td>discard()</td>
      <td>set.discard(elem)</td>
      <td>Removes element safely</td>
      <td>Does not raise error if not found</td>
      <td><code>s.discard(10)</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>set.pop()</td>
      <td>Removes random element</td>
      <td>Returns and removes arbitrary element</td>
      <td><code>s.pop()</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>set.clear()</td>
      <td>Removes all elements</td>
      <td>Empties the set</td>
      <td><code>s.clear()</code></td>
    </tr>
    <tr>
      <td>union()</td>
      <td>set.union(other)</td>
      <td>Returns union</td>
      <td>Combines sets</td>
      <td><code>s.union({5,6})</code></td>
    </tr>
    <tr>
      <td>intersection()</td>
      <td>set.intersection(other)</td>
      <td>Returns intersection</td>
      <td>Common elements</td>
      <td><code>s1.intersection(s2)</code></td>
    </tr>
    <tr>
      <td>difference()</td>
      <td>set.difference(other)</td>
      <td>Returns difference</td>
      <td>Items only in first set</td>
      <td><code>s1.difference(s2)</code></td>
    </tr>
    <tr>
      <td>issubset()</td>
      <td>set.issubset(other)</td>
      <td>Checks if subset</td>
      <td>Returns True if set is a subset</td>
      <td><code>{1,2}.issubset({1,2,3})</code></td>
    </tr>
    <tr>
      <td>issuperset()</td>
      <td>set.issuperset(other)</td>
      <td>Checks if superset</td>
      <td>Returns True if set is a superset</td>
      <td><code>{1,2,3}.issuperset({1,2})</code></td>
    </tr>
  </tbody>
</table>




<h2>🔢 5. Numeric & General Functions</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Function</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>round()</td>
      <td>round(number[, ndigits])</td>
      <td>Rounds a number</td>
      <td>To nearest whole number or decimal places</td>
      <td><code>round(3.1415, 2) → 3.14</code></td>
    </tr>
    <tr>
      <td>max()</td>
      <td>max(iterable)</td>
      <td>Returns maximum</td>
      <td>Largest value from items</td>
      <td><code>max([1, 5, 2]) → 5</code></td>
    </tr>
    <tr>
      <td>min()</td>
      <td>min(iterable)</td>
      <td>Returns minimum</td>
      <td>Smallest value from items</td>
      <td><code>min([1, 5, 2]) → 1</code></td>
    </tr>
    <tr>
      <td>sum()</td>
      <td>sum(iterable)</td>
      <td>Returns sum</td>
      <td>Of all numeric elements</td>
      <td><code>sum([1,2,3]) → 6</code></td>
    </tr>
    <tr>
      <td>pow()</td>
      <td>pow(x, y[, z])</td>
      <td>Power calculation</td>
      <td>Returns x**y % z if z given</td>
      <td><code>pow(2, 3) → 8</code></td>
    </tr>
    <tr>
      <td>divmod()</td>
      <td>divmod(a, b)</td>
      <td>Division and modulus</td>
      <td>Returns (a // b, a % b)</td>
      <td><code>divmod(7, 2) → (3, 1)</code></td>
    </tr>
    <tr>
      <td>type()</td>
      <td>type(object)</td>
      <td>Returns object type</td>
      <td>Useful for debugging</td>
      <td><code>type(3) → &lt;class 'int'&gt;</code></td>
    </tr>
    <tr>
      <td>isinstance()</td>
      <td>isinstance(obj, class)</td>
      <td>Checks object type</td>
      <td>Returns True/False</td>
      <td><code>isinstance(5, int) → True</code></td>
    </tr>
    <tr>
      <td>id()</td>
      <td>id(obj)</td>
      <td>Returns identity</td>
      <td>Unique ID of object in memory</td>
      <td><code>id(5)</code></td>
    </tr>
  </tbody>
</table>

`,
                    code1: ``
                }
            ]
        },
    ]
}