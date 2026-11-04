const isHighlighted = 'java-notes'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

export const javaData = {
    javaNote: [
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: `
          <b> class rule </b>
          This error is a classic Java "Rule of Law": In a single <b>.java</b> file, you can only have ONE <b>public</b> class, and its name must match the filename exactly.
          
         -> cannot have two <b>public</b> classes in the same Java file.`,
                    code1: ``
                }
            ]
        },

        {
            id: 1,
            title: "JDK, JRE, JVM",
            note: [
                {
                    definition: `<b>Interview definition:</b> The <b>JDK</b> is the software development kit used to compile, package, and diagnose Java applications; it provides development tools and a Java runtime. The <b>JRE</b> is the runtime environment—conceptually, the <b>JVM</b> plus the standard libraries and supporting files required to run an application. The <b>JVM</b> loads, verifies, and executes Java bytecode, managing runtime services such as memory and garbage collection. In short: <b>the JDK develops, the JRE provides the runtime, and the JVM executes bytecode</b>.`,
                    text1: `<b>JVM (Java Virtual Machine)</b>
The JVM is the program that runs Java <b>bytecode</b> (compiled .class files). It loads classes, verifies bytecode, manages memory and garbage collection, and executes the instructions. It may interpret bytecode and use a <b>JIT compiler</b> to compile frequently used code into native machine code at runtime.

The JVM is platform-specific: Windows, Linux, and macOS need compatible JVM implementations. Java source is compiled to bytecode, which allows the same compiled program to run on different platforms when a compatible runtime is available.

<b>JRE (Java Runtime Environment)</b>
The JRE is the runtime environment needed to run Java applications. Conceptually, it contains a <b>JVM plus the Java class libraries and supporting runtime files</b>. It provides what an application needs to execute, but traditionally does not include development tools such as the Java compiler.

<b>JDK (Java Development Kit)</b>
The JDK is the development kit used to build Java applications. It includes a <b>Java compiler (javac), the runtime needed to run Java programs, and developer tools</b> such as jar, javadoc, and jshell. In the traditional model, the JDK contains the JRE, and the JRE contains the JVM.

<b>Easy way to remember</b>
JVM = runs bytecode
JRE = JVM + libraries and files needed to run applications
JDK = runtime + tools needed to develop Java applications

<b>How they work together</b>
1. A developer writes source code in a .java file.
2. The JDK compiler, javac, compiles it into bytecode in a .class file.
3. The Java runtime starts a JVM, which loads and executes that bytecode.

<b>Real-world example</b>
During development, a developer installs a JDK to compile and test an application. In a deployment environment, the application needs a compatible Java runtime to run. A build server or CI pipeline needs a JDK if it compiles the source code there.

<b>Important modern-Java note</b>
JRE is still a useful concept for explaining runtime components, but many current JDK distributions are installed as a single JDK and do not provide a separate JRE download. A custom runtime image can also be created for an application with tools such as jlink.

<b>Interview summary</b>
The <b>JDK develops</b>, the <b>runtime environment runs</b>, and the <b>JVM executes bytecode</b>. Java's portability comes from compiling source into platform-independent bytecode; each operating system still needs a compatible JVM implementation.`,
                    code1: `// Compile Hello.java with the JDK compiler:
javac Hello.java

// This creates Hello.class containing Java bytecode.

// Run the compiled class with the Java runtime:
java Hello

// The java launcher starts a JVM, which loads and executes Hello.class.`
                },
                {
                    definition: `<b>JDK (Java Development Kit)</b> is a software development kit that provides all the tools required to <b>develop, compile, debug, and run Java applications.</b> It includes the JRE (or runtime components in modern JDK distributions), development tools such as the Java compiler (javac), debugger (jdb), and the Java runtime environment.`,
                    text1: `<b>JDK (Java Development Kit)</b> <b>In simple terms:</b> JDK is required when you want to develop Java applications. It provides the compiler to convert Java source code (.java) into bytecode (.class), along with tools required for development and execution.

<b>Important JDK tools:</b>
1. <b>javac:</b> Compiles Java source code (.java) into bytecode (.class).
2. <b>java:</b> Launches the Java application using the JVM.
3. <b>jdb:</b> Used to debug Java applications.
4. <b>jar:</b> Used to create and manage JAR files.
5. <b>javadoc:</b> Generates documentation from Java source code.
6. <b>jshell:</b> Provides an interactive environment to execute Java code.
<b>Real-time example:</b>

When a developer creates a Spring Boot application, they write Java code, compile it, debug it, and run it. The JDK provides the tools needed for these development activities.

<b>Interview point:</b> Without a JDK, you cannot use the standard Java development compiler (javac) to compile Java source code.`,
                    code1: `// --------------- Ex1 : JDK ---------------

// HelloWorld.java

public class HelloWorld {
public static void main(String[] args) {
System.out.println("Hello Java");
}
}

// Step 1: Compile Java source code using JDK compiler.

// Command:
javac HelloWorld.java

// Output:
// HelloWorld.class

// Step 2: Execute the compiled class.

// Command:
java HelloWorld

// Output:
// Hello Java

// Explanation:
// javac is the Java compiler provided by the JDK.
// It converts .java source code into .class bytecode.
// The java launcher starts the application using the JVM.`
                },
                {
                    definition: `<b>JRE (Java Runtime Environment)</b> is the runtime environment required to execute Java applications. It provides the JVM and the supporting class libraries and runtime components required by Java applications.`,
                    text1: `<b>JRE (Java Runtime Environment)</b> <b>In simple terms:</b> JRE provides the environment required to run Java applications. It contains the JVM, Java class libraries, and other supporting runtime components.

<b>Major components of JRE:</b>
1. <b>JVM:</b> Executes Java bytecode.
2. <b>Java Class Libraries:</b> Provide predefined classes and APIs such as String, ArrayList, HashMap, and File.
3. <b>Supporting Runtime Components:</b> Provide the functionality required for application execution.
<b>Real-time example:</b>

Suppose a developer has developed a banking application and compiled it into bytecode.

Another employee wants to execute that application on their machine. They need a compatible Java runtime environment to execute it.

Traditionally, installing a JRE was sufficient to run Java applications without installing the complete development kit.

<b>Important interview point:</b>

JRE is primarily responsible for running Java applications, whereas JDK provides the tools required to develop Java applications.

<b>Version clarification:</b> Starting with Java 9, Oracle stopped distributing a separate traditional JRE as part of its standard JDK distribution. Modern Java installations commonly use a JDK or a custom runtime image created using jlink. Therefore, the traditional JDK → JRE → JVM relationship is a conceptual explanation rather than a strict description of every modern Java installation.`,
                    code1: `// --------------- Ex2 : JRE ---------------

// Consider a banking application.

// BankApplication.java

public class BankApplication {

public static void main(String[] args) {

    String customerName = "Anand";
    double balance = 50000;

    System.out.println("Customer: " + customerName);
    System.out.println("Balance: " + balance);
}

}

// After compilation:

// BankApplication.class

// This .class file contains Java bytecode.

// When we execute:

java BankApplication

// The Java runtime environment provides:
// 1. JVM to execute bytecode.
// 2. Java class libraries.
// 3. Supporting runtime components.

// Output:
// Customer: Anand
// Balance: 50000`
                },
                {
                    definition: `<b>JVM (Java Virtual Machine)</b> is an abstract virtual machine that provides the runtime environment to execute Java bytecode. It loads, verifies, and executes bytecode by interpreting instructions and using Just-In-Time (JIT) compilation to optimize frequently executed code into native machine code.`,
                    text1: `<b>JVM (Java Virtual Machine)</b>  <b>In simple terms:</b> JVM is responsible for executing Java bytecode. It acts as an intermediary between Java bytecode and the underlying operating system and hardware.

<b>Major responsibilities of JVM:</b>
1. <b>Class Loading:</b> Loads the required .class files into memory.
2. <b>Bytecode Verification:</b> Verifies bytecode to ensure it follows JVM rules and is structurally valid.
3. <b>Execution:</b> Executes bytecode using the interpreter and JIT compiler.
4. <b>Memory Management:</b> Allocates and manages memory for Java applications.
5. <b>Garbage Collection:</b> Automatically identifies and reclaims memory occupied by objects that are no longer reachable.
6. <b>Exception Handling:</b> Manages exceptions during program execution.
<b>Important JVM memory areas:</b>
1. <b>Heap:</b> Stores objects and arrays. It is shared among threads.
2. <b>Java Stack:</b> Stores method frames, local variables, and intermediate calculations. Each thread has its own stack.
3. <b>Method Area:</b> Stores class-level structures such as runtime constant pools and method information. Its implementation in HotSpot JVM includes Metaspace.
4. <b>PC Register:</b> Stores the current JVM instruction position for each thread.
5. <b>Native Method Stack:</b> Supports execution of native methods.
<b>How JVM executes Java code:</b>
1. The Class Loader loads the required class files.
2. The Bytecode Verifier verifies the bytecode.
3. The JVM Runtime Data Areas provide memory for execution.
4. The Execution Engine executes bytecode.
5. The Interpreter executes bytecode instructions.
6. The JIT Compiler optimizes frequently executed code by compiling it into native machine code.
7. The Garbage Collector manages unused objects in memory.
<b>Real-time example:</b>

Consider a banking application running on Windows, Linux, and macOS.

The same Java bytecode can run on these operating systems, provided a compatible JVM is available for each platform.

The JVM implementation translates or executes the bytecode according to the underlying platform.

<b>Interview point:</b> JVM is platform-dependent because JVM implementations are specific to operating systems and hardware architectures. Java bytecode is platform-independent, provided a compatible JVM is available.`,
                    code1: `// --------------- Ex3 : JVM ---------------

// HelloWorld.java

public class HelloWorld {
public static void main(String[] args) {

    int amount = 1000;
    int tax = 100;

    int total = amount + tax;

    System.out.println("Total Amount: " + total);
}
}

// Step 1: Compile source code.

// Command:
javac HelloWorld.java

// Generated file:
// HelloWorld.class

// Step 2: Execute the application.

// Command:
java HelloWorld

// JVM execution process:

// 1. Class Loader
//    Loads HelloWorld.class.

// 2. Bytecode Verifier
//    Verifies the bytecode.

// 3. Runtime Data Areas
//    Allocates memory for execution.

// 4. Execution Engine
//    Executes bytecode.

// 5. Interpreter
//    Executes bytecode instructions.

// 6. JIT Compiler
//    Optimizes frequently executed code.

// 7. Garbage Collector
//    Reclaims memory occupied by unreachable objects.

// Output:
// Total Amount: 1100
// `
                },

            ]
        },

        {
            id: 1,
            title: "compile time and run time",
            note: [
                {
                    text1: `<b>compile time</b> and <b>run time</b> are two different phases of program execution.
          compile time and run time refer to the two distinct phases a program goes through to go from the code you write to a fully functioning application.

          <b> ** Compile Time (Before program runs) </b>
         This is the phase where your <b>Java code is checked and converted into bytecode.</b>

        <b> What happens here</b>:
        -> Code is written in .java file
        -> Java compiler (javac) checks syntax
        -> Checks for errors like:
        &nbsp; &nbsp; => Missing semicolons
        &nbsp; &nbsp; => Wrong method calls
        &nbsp; &nbsp; => Type mismatch
        -> Converts code into bytecode (.class file)

        <b>Example compile-time error</b>:
int x = "hello"; // ❌ Type mismatch error
👉 Error is shown before running the program


This is the phase where you use the <b>javac</b> command. The Java compiler reads your human-readable source code (<b>.java</b> file) and translates it into machine-readable bytecode (<b>.class</b> file).

During this phase, the compiler acts as a strict grammar checker. It doesn't run your program; it just makes sure the code follows all the rules of the Java language.

<b>What happens here</b>:
    -> Syntax checking (looking for missing semicolons, unclosed brackets).
    -> Type checking (ensuring you aren't trying to store the word "Hello" in an <b>int</b> variable).
    -> Verifying that classes and methods you reference actually exist.

<b>Compile-Time Errors</b>:
If the compiler finds a mistake, it halts and refuses to create the <b>.class</b> file. You saw this firsthand earlier with the <b>public class ConfigManager</b> error!

    -> Example: Forgetting a semicolon: <b>int x = 5</b>
    -> Example: Incompatible types: <b>String name = 100</b>;

<b>** 🔵 Run Time (When program is executing)</b>
This is the phase when the program is actually executed by JVM (Java Virtual Machine).
<b>What happens here:</b>
-> Bytecode is executed by JVM
-> Memory is allocated
-> Objects are created
-> Methods are called

<b>Example run-time error:</b>
int[] arr = new int[3];
System.out.println(arr[5]); // ❌ Runtime error (ArrayIndexOutOfBounds)
👉 Code compiles fine, but crashes while running

This is the phase where you use the <b>java</b> command. The Java Virtual Machine (JVM) takes the compiled bytecode (<b>.class</b> file) and actually executes the instructions step-by-step.
During this phase, the program interacts with the computer's memory, the user, the network, and the file system.

What happens here:
    -> Memory is allocated for objects (like when you use the <b>new</b> keyword).
    -> Constructors are executed.
    -> User input is gathered.
    -> Logic and math operations are actually calculated.

<b>Run-Time Errors (Exceptions)</b>:
Because the compiler cannot predict the future or know what data a user will type, some errors only reveal themselves while the program is running. The code was perfectly legal Java, but the action was impossible.
    -> Example: Trying to divide by zero: <b>int result = 10 / 0;</b> (ArithmeticException)
    -> Example: Trying to use an object that hasn't been initialized: <b>String name = null; System.out.println(name.length());</b> (NullPointerException)
    -> Example: Trying to grab the 10th item from a list that only has 3 items. (ArrayIndexOutOfBoundsException)

<b>🧠 Simple way to remember</b>:
Compile time = checking stage
Run time = execution stage


         `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Difference between \"\" and '' in Java",
            note: [
                {
                    text1: `"" → String
String name = "Anand";

Key Points
Represents a String (sequence of characters)
Type: String
Can store multiple characters
Used with methods like:
length()
substring()
startsWith()


'' → char
char ch = 'A';
✅ Key Points
Represents a single character
Type: char
Can store only one character
Cannot store multiple characters ❌


Common Mistakes
❌ Wrong
char ch = 'AB';   // ❌ ERROR (more than one character)
❌ Wrong
String s = 'A';   // ❌ ERROR (char used instead of String)`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "length, length() and size()",
            note: [
                {
                    definition: `In Java, length, length() and size() are used to find the number of elements or characters. However, they are used with different data types.`,

                    text1: `1. length:
Used with arrays to get the total number of elements. It is a property, not a method.

2. length():
Used with String to get the total number of characters. It is a method.

3. size():
Used with Collections such as ArrayList, HashSet and HashMap to get the total number of elements. It is a method.`,

                    code1: `// ---------------- Ex : 1 (Array - length) -------------

int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers.length);

// Output: 5

// Array can store primitive and non-primitive elements.

String[] names = {"Anand", "Rahul", "John"};

System.out.println(names.length);

// Output: 3`,

                },
                {
                    definition: `1. Arrays use length`,
                    text1: `Use <b>array.length</b> to get the number of elements the array can hold. length is a field, not a method, so do not write parentheses.

An array's length is fixed when it is created. You can change the value in a slot, but you cannot grow or shrink that array. Arrays can hold primitive values, such as int, or references to objects, such as String.`,
                    code1: `// ---------------- Ex : 1 (Primitive Array) -------------

int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers.length);

// Output: 5


// ---------------- Ex : 2 (Non-Primitive Array) -------------

String[] names = {"Anand", "Rahul", "John"};

System.out.println(names.length);

// Output: 3

// The length is the number of slots, even when the array is empty.
int[] empty = new int[0];
System.out.println(empty.length);
// Output: 0`
                },
                {
                    definition: `2. Strings use length()`,
                    text1: `Use string.length() to get the length of a String. Because length() is a method, the parentheses are required.

For ordinary text, the result is usually the number of characters you expect. Technically, Java counts UTF-16 code units, so some Unicode characters (including many emoji) count as 2. For most beginner examples, length() is the method to remember.`,
                    code1: `// ---------------- Ex : 3 (String) -------------

String name = "Anand";

System.out.println(name.length());

// Output: 5


String message = "Hello Java";

System.out.println(message.length());

// Output: 10

String emoji = "😊";
System.out.println(emoji.length());
// Output: 2 (UTF-16 code units)
System.out.println(emoji.codePointCount(0, emoji.length()));
// Output: 1 Unicode code point`
                },
                {
                    definition: `3. Collections and Maps use size()`,
                    text1: `Use collection.size() or map.size() to find how many items are currently stored. size() is a method, so include parentheses.

- A List counts every element, including duplicates.
- A Set counts distinct elements; adding the same value again does not increase its size.
- A Map counts key-value pairs. Adding a value for a key that already exists replaces that key's value, so the number of pairs stays the same.

Unlike arrays, collections and maps can grow or shrink. They store objects, so use wrapper types such as Integer instead of primitive int. A Map has a size() method, but it is not a Collection.`,
                    code1: `// ---------------- Ex : 4 (ArrayList) -------------

import java.util.ArrayList;

ArrayList<String> employees = new ArrayList<>();

employees.add("Anand");
employees.add("Rahul");
employees.add("John");

System.out.println(employees.size());

// Output: 3


// ---------------- Ex : 5 (HashSet) -------------

import java.util.HashSet;

HashSet<Integer> numbers = new HashSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(30); // Duplicate: the set remains unchanged.

System.out.println(numbers.size());

// Output: 3


// ---------------- Ex : 6 (HashMap) -------------

import java.util.HashMap;

HashMap<Integer, String> employees = new HashMap<>();

employees.put(101, "Anand");
employees.put(102, "Rahul");
employees.put(103, "John");

System.out.println(employees.size());

// Output: 3`
                },
                {
                    definition: `Remember`,
                    text1: `Array      -> array.length
String     -> string.length()
Collection -> collection.size()
Map        -> map.size()

Quick check:
- numbers.length   // Correct for an array
- name.length()    // Correct for a String
- list.size()      // Correct for a collection

Common mistakes are adding parentheses to an array's length (numbers.length()) or leaving them off a method (name.length). Pick the form that matches the variable's type.`
                }
            ]
        },
        {
            id: 1,
            title: "String Constant Pool",
            note: [
                {
                    definition: `
                <b>What is String Constant Pool (SCP)?</b>

                <b>Definition:</b>

                String Constant Pool (SCP) is a special memory area within the Java Heap where JVM maintains and reuses String objects having the same content to optimize memory usage.

                Whenever we create a String using a String literal, JVM checks whether an equivalent String already exists in the String Constant Pool.

                - If the String already exists, JVM returns the reference to the existing pooled String.
                - If the String does not exist, JVM adds a String to the pool and returns its reference.

                <b>Why is String Constant Pool required?</b>

                Consider an application where thousands of employees belong to the same department, such as "IT".

                Creating separate String objects for every occurrence of "IT" may consume unnecessary memory.

                String Constant Pool helps reuse the same String object instead of creating duplicate pooled objects.

                <b>Key Benefits:</b>

                1. <b>Memory Optimization:</b> Reduces duplicate String objects.
                2. <b>Object Reusability:</b> Multiple references can point to the same pooled String.
                3. <b>Performance:</b> Avoids unnecessary object creation for repeated literals.
                4. <b>Thread Safety:</b> Multiple threads can safely share String objects because Strings are immutable.
            `,
                    text1: `
                <b>Important Points:</b>

                1. String Constant Pool is maintained by JVM.
                2. It is part of Java Heap memory.
                3. String literals are automatically pooled.
                4. Equivalent pooled Strings share a canonical reference.
                5. String objects are immutable.
                6. Not every String object is automatically pooled.
                7. We can use the intern() method to obtain the pooled reference of a String.

                <b>Interview Point:</b>

                String Constant Pool is not a separate memory area outside Heap. It is maintained within Java Heap memory.
            `,
                    code1: `// --------------- Ex1 : String Literal ---------------

String s1 = "Java";
String s2 = "Java";
String s3 = "Java";

System.out.println(s1 == s2); // true
System.out.println(s2 == s3); // true
System.out.println(s1 == s3); // true

/*
Explanation:

1. JVM checks whether "Java" exists in SCP.
2. Since it does not exist, JVM creates it in SCP.
3. s1 refers to the pooled String.

4. When s2 = "Java" executes, JVM finds the existing String.
5. s2 refers to the same object.

6. Similarly, s3 also refers to the same object.

Memory Representation:

String Constant Pool
--------------------
       "Java"
         ↑
    ┌────┼────┐
    s1   s2   s3

Output:
true
true
true

== compares object references.
*/`
                },
                {
                    definition: `
                <b>String Constant Pool vs Heap Memory</b>

                Both String Constant Pool and normal object storage are part of Java Heap memory.

                <b>String Constant Pool:</b>

                - Maintains pooled String objects.
                - Reuses equivalent String objects.
                - String literals are automatically pooled.
                - Provides memory optimization.

                <b>Normal Heap Memory:</b>

                - Stores objects created using the new keyword.
                - Stores String objects that are not pooled.
                - Stores other Java objects.

                <b>Important Interview Point:</b>

                When we create a String using the new keyword, JVM creates a separate String object in the Heap, even if the same String value already exists in SCP.

                However, the String literal used as an argument to the constructor can refer to an existing pooled String.
            `,
                    text1: `
                <b>How does JVM handle String creation?</b>

                <b>Using String Literal:</b>

                JVM checks the String Constant Pool and reuses an equivalent pooled String if available.

                <b>Using new Keyword:</b>

                JVM creates a separate String object in Heap.

                <b>Important Difference:</b>

                String literal creation focuses on reusing pooled Strings, whereas new String() explicitly creates a separate String object.
            `,
                    code1: `// --------------- Ex2 : String Literal vs new Keyword ---------------

String s1 = "Java";

String s2 = new String("Java");

System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true

/*
Explanation:

1. "Java" is available in SCP.
2. s1 refers to the pooled String.
3. new String("Java") creates a separate String object in Heap.
4. s2 refers to the newly created Heap object.

Memory Representation:

String Constant Pool
--------------------
       "Java"
         ↑
         s1

Heap Memory
-----------
       "Java"
         ↑
         s2

Output:
false
true

==       : Compares references.
equals() : Compares String content.
*/`
                },
                {
                    definition: `
                <b>How many String objects are created using new String()?</b>

                <b>Definition:</b>

                When we create a String using new String("Java"), JVM creates a separate String object in Heap.

                If the literal "Java" does not already exist in SCP, the literal also needs to be pooled.

                Therefore, two String objects are created in total:

                1. One pooled String object for the literal "Java".
                2. One separate String object created using new String().

                If "Java" already exists in SCP, only one new String object is created by this statement.

                <b>Important Interview Point:</b>

                Do not blindly answer that new String("Java") always creates two new objects. The count depends on whether the literal already exists in SCP.
            `,
                    text1: `
                <b>Remember:</b>

                The constructor argument "Java" is a String literal.

                Therefore, JVM checks the String Constant Pool for that literal independently of creating the new String object.
            `,
                    code1: `// --------------- Ex3 : String Object Creation ---------------

String s1 = new String("Java");

/*
Case 1: "Java" does not exist in SCP.

String Constant Pool
--------------------
       "Java"

Heap Memory
-----------
       "Java"
         ↑
         s1

Total newly created String objects: 2


Case 2: "Java" already exists in SCP.

String Constant Pool
--------------------
       "Java"

Heap Memory
-----------
       "Java"
         ↑
         s1

Total newly created String objects: 1
*/`
                },
                {
                    definition: `
                <b>What is intern() Method in Java?</b>

                <b>Definition:</b>

                The intern() method returns the canonical (pooled) representation of a String.

                If an equivalent String already exists in the String Constant Pool, intern() returns its reference.

                Otherwise, the String is added to the pool and its pooled reference is returned.

                <b>Why do we use intern()?</b>

                In real-time applications, duplicate String values may come from:

                - Database records.
                - REST API responses.
                - User input.
                - Configuration files.

                If there is a good reason to canonicalize frequently repeated Strings, intern() can help reuse references.
            `,
                    text1: `
                <b>Important Points:</b>

                1. intern() does not modify the original String.
                2. It returns a String reference.
                3. If the pooled String already exists, it returns the existing reference.
                4. Otherwise, it adds the String to the pool.
                5. The original String object continues to exist if it is still reachable.
                6. Excessive interning can introduce memory and performance overhead.

                <b>Interview Point:</b>

                intern() does not mean that the original String object is moved into the pool. It returns the canonical pooled reference.
            `,
                    code1: `// --------------- Ex4 : intern() Method ---------------

String s1 = "Java";

String s2 = new String("Java");

String s3 = s2.intern();

System.out.println(s1 == s2); // false
System.out.println(s1 == s3); // true
System.out.println(s2 == s3); // false

/*
Explanation:

1. s1 refers to the pooled "Java".
2. s2 refers to a separate Heap object.
3. s2.intern() returns the pooled reference.
4. s3 refers to the same object as s1.

Memory Representation:

String Constant Pool
--------------------
       "Java"
        ↑  ↑
        s1 s3

Heap Memory
-----------
       "Java"
         ↑
         s2

Output:
false
true
false
*/`
                },
                {
                    definition: `
                <b>What is String Immutability?</b>

                <b>Definition:</b>

                String is immutable in Java. It means once a String object is created, its content cannot be changed.

                Whenever we perform operations such as concatenation, replacement, or converting to uppercase, Java returns a new String if the resulting content is different.

                <b>Why is String Immutable?</b>

                1. <b>String Pooling:</b> Multiple references can safely share the same String object.
                2. <b>Security:</b> Strings are commonly used for file paths, usernames, URLs, and configuration values.
                3. <b>Thread Safety:</b> Immutable objects can be shared between multiple threads without synchronization for their contents.
                4. <b>HashCode Caching:</b> String hash codes can be cached because the content does not change.

                <b>Important Interview Point:</b>

                If Strings were mutable, modifying a shared pooled String through one reference could affect every other reference pointing to that object.
            `,
                    text1: `
                <b>What happens when we modify a String?</b>

                String methods such as concat(), replace(), and toUpperCase() do not modify the original String object.

                If the resulting content is different, they return a new String.

                Assigning that result back to the same variable changes the variable's reference, not the original object's content.
            `,
                    code1: `// --------------- Ex5 : String Immutability ---------------

String s1 = "Java";
String s2 = "Java";

s1 = s1.concat(" Programming");

System.out.println(s1); // Java Programming
System.out.println(s2); // Java

/*
Initially:

String Constant Pool
--------------------
       "Java"
        ↑  ↑
        s1 s2


After concat():

String Constant Pool
--------------------
       "Java"
         ↑
         s2

New String Object
-----------------
       "Java Programming"
                ↑
                s1

Explanation:

1. Initially, s1 and s2 refer to the same pooled String.
2. concat() creates a new String with the resulting content.
3. s1 now refers to the new String.
4. s2 still refers to the original String.

Important:
The original String object is not modified.
*/`
                },
                {
                    definition: `
                <b>Compile-Time vs Runtime String Concatenation</b>

                Java handles String concatenation differently depending on whether the expression is a compile-time constant expression or a runtime expression.

                <b>Compile-Time Concatenation:</b>

                When String concatenation contains only compile-time constant values, the Java compiler evaluates the expression at compile time.

                The resulting String behaves like a String literal and is pooled.

                <b>Runtime Concatenation:</b>

                When concatenation involves variables whose values are determined at runtime, the resulting String is generally created as a separate String object.

                <b>Important Interview Points:</b>

                - String literals are pooled.
                - Compile-time constant expressions are evaluated at compile time.
                - Runtime concatenation does not automatically guarantee a pooled reference.
                - Use intern() when you explicitly need the canonical pooled reference.
            `,
                    text1: `
                <b>What is a Compile-Time Constant Variable?</b>

                A variable declared using final and initialized with a compile-time constant expression can be treated as a constant variable.

                For example:

                final String s1 = "Java";

                final String s2 = "Script";

                Since both are compile-time constants, s1 + s2 is evaluated at compile time.

                <b>Important:</b>

                A final variable is not automatically a compile-time constant. Its initializer must also be a constant expression.
            `,
                    code1: `// --------------- Ex6 : Compile-Time Concatenation ---------------

String s1 = "Java";
String s2 = "Script";

String s3 = "Java" + "Script";

String s4 = s1 + s2;

System.out.println(s3 == "JavaScript"); // true
System.out.println(s4 == "JavaScript"); // false

/*
Explanation:

1. "Java" + "Script" contains only String literals.
2. Compiler evaluates the expression at compile time.
3. s3 refers to the pooled "JavaScript".

4. s1 + s2 involves variables.
5. Concatenation happens at runtime.
6. s4 refers to a separate String object.

Output:
true
false
*/


// --------------- Ex7 : Compile-Time Constant Variables ---------------

final String s5 = "Java";
final String s6 = "Script";

String s7 = s5 + s6;

System.out.println(s7 == "JavaScript"); // true

/*
Explanation:

1. s5 and s6 are final variables.
2. Both are initialized using constant expressions.
3. Therefore, they are compile-time constants.
4. The compiler evaluates s5 + s6.
5. The result is pooled.

Output:
true
*/`
                },
                {
                    definition: `
                <b>String Concatenation Using + Operator</b>

                The + operator is used to concatenate two or more Strings.

                When concatenation happens at runtime, Java creates a resulting String object.

                Modern Java compilers may use invokedynamic-based String concatenation internally.

                <b>Important:</b>

                Do not assume that every + operation creates a separate object in every situation. Compile-time constant expressions can be evaluated and pooled.
            `,
                    text1: `
                <b>Real-Time Understanding:</b>

                Consider an application that dynamically creates a welcome message using a user's name.

                Since the username is determined at runtime, the resulting String is created at runtime.

                The resulting String is not automatically guaranteed to be pooled.
            `,
                    code1: `// --------------- Ex8 : Runtime Concatenation ---------------

String name = "Anand";

String result = "Welcome " + name;

System.out.println(result);

// Welcome Anand

System.out.println(result == "Welcome Anand");

// false

/*
Explanation:

1. name is a variable.
2. The concatenation is evaluated at runtime.
3. The resulting String is generally a separate object.
4. "Welcome Anand" in the comparison is a String literal.

Therefore, == returns false.
*/`
                },
                {
                    definition: `
                <b>Real-Time Applications of String Constant Pool</b>

                String Constant Pool can be useful in applications where the same String literals are repeatedly used.

                <b>Example 1: Employee Management System</b>

                Department names such as IT, HR, Finance, and Operations can repeat across employee records.

                <b>Example 2: Banking Application</b>

                Transaction statuses such as SUCCESS, FAILED, PENDING, and CANCELLED are commonly used.

                <b>Example 3: E-commerce Application</b>

                Product categories such as Electronics, Clothing, Furniture, and Books may appear repeatedly.

                <b>Real-Time Benefits:</b>

                - Reduces duplicate String instances.
                - Helps optimize memory consumption.
                - Allows repeated literal values to share references.

                <b>Important:</b>

                Database values and API response values are not automatically guaranteed to be pooled. String literals are automatically pooled, whereas dynamically created Strings require intern() if explicit pooling is desired.
            `,
                    text1: `
                <b>Practical Interview Scenario:</b>

                Imagine an Employee Management System with 10,000 employees.

                Several employees belong to the IT department.

                When the department value is represented by the same String literal, JVM can reuse the pooled String object.

                This demonstrates how String Constant Pool helps avoid duplicate literal objects.

                <b>Note:</b>

                In real-world applications, do not assume that all repeated database values automatically share references. They may be separate String objects depending on how they are created.
            `,
                    code1: `// --------------- Ex9 : Employee Management System ---------------

class Employee {

    String name;
    String department;

    Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }
}

public class Main {

    public static void main(String[] args) {

        Employee e1 = new Employee("Anand", "IT");
        Employee e2 = new Employee("Rahul", "HR");
        Employee e3 = new Employee("Kiran", "IT");

        System.out.println(e1.department == e3.department);
        // true

        System.out.println(e1.department == e2.department);
        // false

        System.out.println(e1.department.equals(e3.department));
        // true
    }
}

/*
Explanation:

e1.department = "IT"
e2.department = "HR"
e3.department = "IT"

"IT" is a String literal.

Both e1.department and e3.department
refer to the same pooled String.

Therefore:
e1.department == e3.department returns true.

Real-time application:
Employee management system.
*/`
                },
                {
                    definition: `
                <b>String Constant Pool: Java 6 vs Java 7 and Above</b>

                The location of the String Constant Pool changed in Java 7.

                <b>Before Java 7:</b>

                - String Constant Pool was maintained in the Permanent Generation (PermGen).
                - PermGen was a separate memory area from the normal Java Heap.

                <b>Java 7 and Above:</b>

                - String Constant Pool was moved to Java Heap memory.
                - Pooled Strings can be garbage collected when they are no longer reachable.

                <b>Why was it moved?</b>

                Moving the String Pool to Heap memory allowed String objects to benefit from normal Heap memory management and garbage collection.

                <b>Interview Point:</b>

                From Java 7 onwards, String Constant Pool is part of Java Heap memory, not PermGen.
            `,
                    text1: `
                <b>JVM Memory Understanding:</b>

                Before Java 7:

                String Constant Pool was associated with PermGen.

                Java 7 and above:

                String Constant Pool is maintained in Java Heap.

                <b>Important Clarification:</b>

                The Runtime Constant Pool and String Constant Pool are related concepts, but they are not the same thing.

                The Runtime Constant Pool is associated with class and interface runtime information. The String Constant Pool maintains canonical String references.
            `,
                    code1: `// --------------- Ex10 : String Pool Memory Location ---------------

/*
Before Java 7:

JVM Memory
|
|-- Heap Memory
|     |-- Objects
|
|-- PermGen
      |-- String Constant Pool


Java 7 and Above:

JVM Memory
|
|-- Heap Memory
|     |-- String Constant Pool
|     |-- Normal Objects
|
|-- Metaspace (Java 8 onwards)
      |-- Class Metadata

Important:

1. String Constant Pool moved to Heap in Java 7.
2. PermGen was removed in Java 8.
3. Metaspace replaced PermGen for class metadata.

*/`
                },
                {
                    definition: `
                <b>Difference Between String, StringBuilder and StringBuffer</b>

                <b>String:</b>

                - Immutable.
                - String modifications create new String results.
                - Suitable when String content does not change frequently.

                <b>StringBuilder:</b>

                - Mutable.
                - Modifies its internal character sequence.
                - Not thread-safe.
                - Suitable for frequent String modifications in single-threaded operations.

                <b>StringBuffer:</b>

                - Mutable.
                - Thread-safe because its methods are synchronized.
                - Suitable when synchronized mutable String operations are required.

                <b>Interview Point:</b>

                StringBuilder and StringBuffer are not automatically stored in the String Constant Pool. They are separate mutable objects.
            `,
                    text1: `
                <b>When should we use each one?</b>

                <b>String:</b>

                When the content does not change frequently.

                <b>StringBuilder:</b>

                When frequent String modifications are required and thread safety is not needed.

                <b>StringBuffer:</b>

                When synchronized mutable String operations are required.

                <b>Important:</b>

                StringBuilder and StringBuffer do not provide String pooling in the same way as String literals.
            `,
                    code1: `// --------------- Ex11 : String vs StringBuilder vs StringBuffer ---------------

// String - Immutable

String s1 = "Java";

s1.concat(" Programming");

System.out.println(s1); // Java


// StringBuilder - Mutable

StringBuilder sb = new StringBuilder("Java");

sb.append(" Programming");

System.out.println(sb); // Java Programming


// StringBuffer - Mutable and Thread-Safe

StringBuffer sf = new StringBuffer("Java");

sf.append(" Programming");

System.out.println(sf); // Java Programming

/*
String:
Original object is not modified.

StringBuilder:
Original object is modified.

StringBuffer:
Original object is modified using synchronized methods.
*/`
                },
                {
                    definition: `
                <b>Frequently Asked String Constant Pool Interview Questions</b>

                <b>Q1. What is String Constant Pool?</b>

                It is a special memory area within Java Heap where JVM maintains and reuses pooled String objects.

                <b>Q2. Where is String Constant Pool located?</b>

                It is located in Java Heap memory from Java 7 onwards.

                <b>Q3. Why is String Constant Pool used?</b>

                To reduce duplicate String objects and optimize memory usage.

                <b>Q4. Are all String objects stored in SCP?</b>

                No. String literals are pooled automatically. Objects created using new are initially separate Heap objects.

                <b>Q5. What happens when we create a String using new?</b>

                JVM creates a separate String object in Heap, even if an equivalent pooled String already exists.

                <b>Q6. What is the purpose of intern()?</b>

                It returns the canonical pooled reference of a String.

                <b>Q7. Can we modify a String stored in SCP?</b>

                No. String is immutable.

                <b>Q8. Why is String immutable in Java?</b>

                Immutability supports safe sharing, String pooling, security, and thread safety.

                <b>Q9. What is the difference between == and equals()?</b>

                == compares references, whereas equals() compares String content.

                <b>Q10. Is String Constant Pool part of Stack or Heap?</b>

                It is part of Heap memory, not Stack memory.

                <b>Q11. Does intern() always create a new object?</b>

                No. It returns the existing pooled reference if an equivalent String already exists. Otherwise, it adds the String to the pool and returns its reference.

                <b>Q12. Can two different String variables refer to the same object?</b>

                Yes. When both variables refer to the same pooled String literal, they share the same object.

                <b>Q13. What happens to the original object after calling intern()?</b>

                The original String object is not modified or automatically replaced. It can be garbage collected when it becomes unreachable.

                <b>Q14. Is String Constant Pool thread-safe?</b>

                JVM manages the String pool internally. Sharing pooled Strings between threads is safe because String objects are immutable.

                <b>Q15. Can StringBuilder or StringBuffer use String Constant Pool?</b>

                They are mutable objects and are not automatically pooled like String literals.
            `,
                    text1: `
                <b>Additional Interview Questions:</b>

                <b>Q16. What happens if two Strings have the same content but are different objects?</b>

                equals() returns true, but == returns false.

                <b>Q17. Can we explicitly add a String to the String Constant Pool?</b>

                Yes. We can use intern() to obtain its canonical pooled representation.

                <b>Q18. Can pooled Strings be garbage collected?</b>

                Yes. Pooled Strings can be garbage collected when they are no longer reachable, subject to JVM garbage collection.

                <b>Q19. Is String Constant Pool the same as Runtime Constant Pool?</b>

                No. They are related but different concepts.

                <b>Q20. Does final make every String variable a compile-time constant?</b>

                No. It must be initialized with a compile-time constant expression.
            `,
                    code1: `// --------------- Ex12 : Interview Output-Based Questions ---------------

String s1 = "Java";

String s2 = "Java";

String s3 = new String("Java");

String s4 = new String("Java").intern();

String s5 = "Ja" + "va";

String s6 = s1 + s2;

System.out.println(s1 == s2); // true

System.out.println(s1 == s3); // false

System.out.println(s1 == s4); // true

System.out.println(s3 == s4); // false

System.out.println(s1 == s5); // true

System.out.println(s1 == s6); // false

/*
Explanation:

s1 and s2:
Both refer to the same pooled String.

s3:
Refers to a separate Heap object.

s4:
intern() returns the pooled reference.

s5:
"Ja" + "va" is a compile-time constant expression.
It is evaluated and pooled.

s6:
s1 + s2 involves variables.
It is evaluated at runtime and creates a separate String result.

Output:

true
false
true
false
true
false
*/`
                },
                {
                    definition: `
                <b>String Constant Pool - Final Interview Summary</b>

                <b>Most Important Concepts:</b>

                1. <b>SCP:</b> Special area within Java Heap memory.
                2. <b>String Literal:</b> Automatically pooled.
                3. <b>new String():</b> Creates a separate String object.
                4. <b>intern():</b> Returns the canonical pooled reference.
                5. <b>String Immutability:</b> String content cannot be modified after creation.
                6. <b>==:</b> Compares object references.
                7. <b>equals():</b> Compares String content.
                8. <b>Compile-Time Concatenation:</b> Constant expressions are evaluated and pooled.
                9. <b>Runtime Concatenation:</b> Generally creates a separate String result.
                10. <b>Java 7:</b> String Constant Pool moved from PermGen to Heap.

                <b>Most Important Interview Question:</b>

                Why did Java introduce String Constant Pool?

                <b>Answer:</b>

                Java introduced String Constant Pool to optimize memory consumption by reusing String objects that contain the same value. Whenever we create a String using a literal, JVM checks the pool. If an equivalent String already exists, JVM reuses its reference; otherwise, it adds a new String to the pool. This reduces unnecessary duplicate object creation and improves memory utilization.
            `,
                    text1: `
                <b>Interview Preparation Priority:</b>

                <b>High Priority:</b>

                1. String Literal vs new String().
                2. String Constant Pool vs Heap.
                3. intern() method.
                4. String Immutability.
                5. Compile-Time vs Runtime Concatenation.
                6. == vs equals().

                <b>Medium Priority:</b>

                1. Java 6 vs Java 7 memory changes.
                2. String vs StringBuilder vs StringBuffer.
                3. Real-time applications of String Pool.

                <b>Interview Tip:</b>

                Always explain the memory references step by step when answering String Constant Pool output-based questions.
            `,
                    code1: `// --------------- Ex13 : Final Revision ---------------

String a = "Java";
String b = "Java";
String c = new String("Java");
String d = c.intern();

System.out.println(a == b);      // true
System.out.println(a == c);      // false
System.out.println(a == d);      // true

System.out.println(a.equals(c)); // true
System.out.println(a.equals(d)); // true

/*
Final Memory Representation:

String Constant Pool
--------------------
       "Java"
        ↑  ↑  ↑
        a  b  d

Heap Memory
-----------
       "Java"
         ↑
         c

Remember:

==       -> Reference comparison
equals() -> Content comparison
intern() -> Pooled reference
String   -> Immutable
SCP      -> Java Heap
*/`
                }
            ]
        },
        {
            id: 1,
            title: "Does concat() method change the string in java(mutrable)",
            note: [
                {
                    definition: `<b>No. concat() never changes the original String.</b> In Java, <b>String is immutable</b>, so once a String object is created its content cannot be modified. <b>concat(String str)</b> creates and returns a <b>new String object</b> (original + str) and leaves the original object untouched. If you do not store the returned value, the result is lost.`,
                    text1: `<b>Interview Definition :</b><br>
<b>public String concat(String str)</b> appends the specified string to the end of the current string and <b>returns a new String</b>. The current object (this) is never modified.<br><br>

<b>Why is String immutable? (Most asked follow-up)</b><br>
1. <b>String Pool (security + memory) :</b> many references can share one pooled literal safely. If it was mutable, changing it through one reference would affect all the others.<br>
2. <b>Security :</b> Strings are used for DB URLs, usernames, passwords and file paths, and they must not change after validation.<br>
3. <b>Thread safety :</b> immutable objects are automatically thread-safe.<br>
4. <b>hashCode caching :</b> the hash is calculated once and cached, so String is a very fast HashMap key.<br>
5. <b>Class loading :</b> class names are passed as Strings, and they must be safe from modification.<br><br>

<b>Key Points of concat() :</b><br>
1. <b>Return type is String</b>, so you must assign the result: <b>s = s.concat("x");</b><br>
2. <b>Original object stays same</b>, and the new object is created in the <b>heap</b> (not in the String Pool).<br>
3. <b>Special case :</b> if the argument is an <b>empty string ""</b>, concat() returns the <b>same object (this)</b> and no new object is created.<br>
4. <b>concat(null)</b> throws <b>NullPointerException</b>.<br>
5. <b>concat() accepts only String</b> (not int, char or Object), whereas <b>+</b> accepts anything.<br><br>

<b>concat() vs + operator vs StringBuilder.append() :</b><br>
<b>concat()</b> : accepts only String, throws NPE for null, returns a new object, slightly faster for a single join of two strings.<br>
<b>+ operator</b> : accepts any type, treats null as the text "null", the compiler converts it internally to StringBuilder, and compile-time constants are joined at compile time and stored in the pool.<br>
<b>StringBuilder / StringBuffer append()</b> : <b>MUTABLE</b>, changes the same object, and is best inside loops. <b>StringBuffer</b> is thread-safe, <b>StringBuilder</b> is faster but not thread-safe.<br><br>

<b>Real-time examples :</b><br>
1. <b>Email generation :</b> username.concat("@gmail.com") gives a new string, and username remains the same.<br>
2. <b>Greeting message :</b> "Hello ".concat(name) builds a message without touching the stored name.<br>
3. <b>Building file path / URL :</b> baseUrl.concat("/api/users") returns a new URL, and baseUrl can be reused for other endpoints.<br>
4. <b>Loop performance :</b> concat() or + inside a loop of 100000 iterations creates 100000 objects (slow, heavy GC). Use <b>StringBuilder</b> instead.<br><br>

<b>Common Interview Questions :</b><br>
Q1. Does concat() modify the original string? <b>No, it returns a new String.</b><br>
Q2. Why does s.concat("x"); alone print the old value? <b>The returned object is not assigned to any variable.</b><br>
Q3. How many objects are created in String s = "Java".concat("World");? <b>3 objects in total</b>: "Java" (pool), "World" (pool) and the result "JavaWorld" (heap). Only the result is created by concat().<br>
Q4. Is s1.concat("") == s1? <b>true</b>, because the same object is returned.<br>
Q5. concat() vs +? <b>concat() works only with String and throws NPE on null, while + works with any type.</b><br>
Q6. Which one for loops? <b>StringBuilder</b>.<br>
Q7. Is StringBuilder.append() mutating? <b>Yes, it changes the same object.</b>`,
                    code1: `// --------------- Ex1 : concat() does NOT change original string ---------------
String s1 = "Java";
s1.concat(" Programming");          // result is ignored (lost)
System.out.println(s1);             // Java   (original unchanged)

// --------------- Ex2 : Store the returned value ---------------
String s2 = "Java";
String s3 = s2.concat(" Programming");
System.out.println(s2);             // Java
System.out.println(s3);             // Java Programming
System.out.println(s2 == s3);       // false (different objects)

// --------------- Ex3 : Reassigning the same reference ---------------
String s4 = "Hello";
s4 = s4.concat(" World");           // s4 now points to the NEW object
System.out.println(s4);             // Hello World
// The old object "Hello" is NOT modified, it just has no reference from s4 now.

// --------------- Ex4 : concat with empty string returns SAME object ---------------
String s5 = "Java";
String s6 = s5.concat("");
System.out.println(s5 == s6);       // true  (same object, no new object)

String s7 = s5.concat("A");
System.out.println(s5 == s7);       // false (new object)

// --------------- Ex5 : Heap object vs String Pool ---------------
String a = "Java";
String b = a.concat("Script");      // new object in heap
String c = "JavaScript";            // pool literal
System.out.println(b == c);         // false (heap vs pool)
System.out.println(b.equals(c));    // true  (content same)
System.out.println(b.intern() == c);// true  (intern gives pool reference)

// --------------- Ex6 : concat(null) vs + null ---------------
String name = null;
String r1 = "Hi ".concat(name);     // NullPointerException
String r2 = "Hi " + name;           // Hi null  (no exception)

// --------------- Ex7 : concat accepts only String ---------------
String id = "ID-";
// id.concat(101);                  // Compile error (int not allowed)
String id1 = id.concat(String.valueOf(101));   // ID-101
String id2 = id + 101;                         // ID-101

// --------------- Ex8 : Real time example (email + URL) ---------------
String username = "anand";
String email = username.concat("@gmail.com");
System.out.println(username);       // anand (unchanged, reusable)
System.out.println(email);          // anand@gmail.com

String baseUrl = "https://myapp.com";
String usersApi = baseUrl.concat("/api/users");
String ordersApi = baseUrl.concat("/api/orders");
System.out.println(baseUrl);        // https://myapp.com (still safe to reuse)

// --------------- Ex9 : Mutable alternative (StringBuilder) ---------------
StringBuilder sb = new StringBuilder("Java");
sb.append(" Programming");          // SAME object is modified
System.out.println(sb);             // Java Programming

StringBuilder sb2 = sb;
sb2.append("!");
System.out.println(sb);             // Java Programming!  (sb also changed, same object)

// --------------- Ex10 : Loop performance (interview point) ---------------
// BAD : creates a new String object in every iteration
String bad = "";
for (int i = 0; i < 5; i++) {
    bad = bad.concat(String.valueOf(i));
}

// GOOD : only one mutable object
StringBuilder good = new StringBuilder();
for (int i = 0; i < 5; i++) {
    good.append(i);
}
System.out.println(bad);            // 01234
System.out.println(good);           // 01234`
                }
            ]
        },
        {
            id: 1,
            section: 'Java Collections Framework',
            title: "Java Collections Framework",
            note: [
                {
                    text1: `The <b>Java Collections Framework (JCF)</b> is a <b>set of interfaces, classes, and algorithms</b> used to <b>store, manipulate, and process groups of objects</b> efficiently.
          
          Java Collection Framework (JCF) is a set of classes and interfaces that provide ready-made data structures to store and manipulate groups of objects efficiently.

Java provides collection interfaces like List, Set, Map, and Queue, with ready-made classes such as ArrayList, HashSet, HashMap, and PriorityQueue, so you don’t have to write data-handling code from scratch.
The Collection Framework improves productivity by making code more reusable, maintainable and faster to develop.

          It provides ready-made data structures like List, Set, Queue, and Map.
          
        <b>Features of Java Collection Framework</b>
Provides ready-to-use data structures (e.g., ArrayList, HashSet, HashMap).9
Offers interfaces (Collection, List, Set, Map, Queue) to define standard behaviors.
Supports dynamic resizing, unlike arrays with a fixed size.
Includes algorithms (sorting, searching, iteration) via the Collections utility class.
Improves code reusability and performance by reducing boilerplate code.

<b>Collection Interface in Java</b>
The Collection interface is the root of the Java Collections Framework, defined in the java.util package. It represents a group of individual objects as a single unit and provides basic operations for working with them.

<b>Dynamic in Nature</b>: Collections can automatically grow or shrink in size, unlike arrays that have a fixed length.
<b>Stores Homogeneous and Heterogeneous Objects</b>: Can hold same-type or different-type elements based on implementation.
<b>Easy to Use</b>: Provides convenient methods such as add(), remove(), and clear() to manage elements effortlessly.
<b>Efficient Traversal</b>: Allows easy access and processing of elements using loops or iterators.

<b>Collection Interface Declaration</b>
<b>public interface Collection&lt;E&gt; extends Iterable&lt;E&gt;</b>
Here, E represents the type of elements stored in the collection.

Object Creation of Collection Interface
Collection &lt; String&gt; fruits = new ArrayList&lt;&gt;();

In Java, we cannot create an object of an interface directly. Instead, we create an object of the ArrayList class that implements the interface and assign it to the interface reference.`,
                    code1: `// ----------- Ex : 1 ---------
          // We cannot instantiate interfaces directly in Java.
// We create an object of a class that implements the interface and assign it to the interface reference.


import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;


public class Demo {
    public static void main(String[] args) {

        Collection&lt; String&gt; fruits = new ArrayList&lt;&gt;();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        // Iterating using for-each
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Iterating using Iterator
        Iterator<String> it = fruits.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

    }
}

//Output:
Apple
Banana
Mango
Apple
Banana
Mango

`
                }
            ]
        },
        {
            id: 1,
            title: "Sub-Interfaces of Collection Interface",
            note: [
                {
                    text1: `The Collection interface is the root of most Java collections. Its main sub-interfaces are: 
          
          <b>1. List</b>
List represents an ordered collection that allows duplicates.
Elements can be accessed by index.
<b>Implementing Classes</b>: ArrayList, LinkedList, Vector, Stack.
<b>Declaration</b>:
public interface List<E> extends Collection<E>

<b>2. Set</b>
Set represents an unordered collection with no duplicate elements.
<b>Implementing Classes</b>: HashSet, TreeSet, LinkedHashSet, EnumSet, CopyOnWriteArraySet.
<b>Declaration</b>:
public interface Set<E> extends Collection<E>

<b>3. SortedSet</b>
SortedSet extends Set and maintains elements in a sorted order.
Provides methods to handle range-based operations.
<b>Implementing Class</b>: TreeSet.
<b>Declaration</b>:
public interface SortedSet<E> extends Set<E>

<b>4. NavigableSet</b>
NavigableSet extends SortedSet and provides navigation methods like lower(), floor(), ceiling(), and higher().
<b>Implementing Class</b>: TreeSet.
<b>Declaration</b>:
public interface NavigableSet<E> extends SortedSet<E>

<b>5. Queue</b>
Queue represents a collection following FIFO (First-In-First-Out) order.
<b>Implementing Classes</b>: PriorityQueue, Deque, ArrayDeque, LinkedList
<b>Declaration</b>:
public interface Queue<E> extends Collection<E>

5. Deque
Deque extends Queue and allows elements to be added/removed from both ends.
<b>Implementing Classes</b>: ArrayDeque, LinkedList.
<b>Declaration</b>:
public interface Deque<E> extends Queue<E>

Collection
 ├── List
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayList
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── LinkedList
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── Vector
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── Stack
 ├── Set
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── HashSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── LinkedHashSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── TreeSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── EnumSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── CopyOnWriteArraySet
 │
 ├── SortedSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── TreeSet
 │
 ├── NavigableSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── TreeSet
 │
 ├── Queue
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── PriorityQueue
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayDeque
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── LinkedList
 │
 └── Deque
       &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayDeque
       &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── LinkedList


       <table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Sub-Interface</th>
    <th>Description</th>
    <th>Implementing Classes</th>
    <th>Declaration</th>
  </tr>
  
  <tr>
    <td>List</td>
    <td>Ordered collection, allows duplicates, access by index</td>
    <td>ArrayList, LinkedList, Vector, Stack</td>
    <td>public interface List&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Set</td>
    <td>Unordered collection, no duplicates</td>
    <td>HashSet, TreeSet, LinkedHashSet, EnumSet, CopyOnWriteArraySet</td>
    <td>public interface Set&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>SortedSet</td>
    <td>Extends Set, maintains elements in sorted order, supports range operations</td>
    <td>TreeSet</td>
    <td>public interface SortedSet&lt;E&gt; extends Set&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>NavigableSet</td>
    <td>Extends SortedSet, provides navigation methods: lower(), floor(), ceiling(), higher()</td>
    <td>TreeSet</td>
    <td>public interface NavigableSet&lt;E&gt; extends SortedSet&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Queue</td>
    <td>Collection following FIFO (First-In-First-Out)</td>
    <td>PriorityQueue, Deque, ArrayDeque, LinkedList</td>
    <td>public interface Queue&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Deque</td>
    <td>Extends Queue, allows insertion/removal from both ends</td>
    <td>ArrayDeque, LinkedList</td>
    <td>public interface Deque&lt;E&gt; extends Queue&lt;E&gt;</td>
  </tr>
</table>

`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "List",
            note: [
                {
                    text1: `In Java, a List is a fundamental interface in the <b>java.util</b> package that represents an <b>ordered collection</b> of elements. Unlike a Set, a List allows <b>duplicate elements</b> and provides precise control over where each element is inserted. You can access elements by their integer index (position).

          <b>Core Characteristics</b>
    <b>Ordered</b>: Elements maintain the insertion order.
    <b>Index-based</b>: You can access, insert, or remove elements at a specific index.
    <b>Duplicates Allowed</b>: You can store the same object multiple times.
    <b>Dynamic Size</b>: Lists automatically resize themselves as you add or remove elements.
          
    <b>Common Implementations</b>
The most frequently used implementations of the <b>List</b> interface are <b>ArrayList</b> and <b>LinkedList</b>.

<b>List is an Interface</b>
<b>List</b> is not a class.
<b>public interface List&lt;E&gt; extends Collection&lt;E&gt; </b>
Since it's an interface, we cannot create an object directly.

❌ Invalid
List&lt;String&gt; list = new List&lt;&gt;();
✅ Valid
List&lt;String&gt; list = new ArrayList&lt;&gt;();


<b>Why Use List Instead of Array?</b>
<b>Array</b>
String[] names = new String[3];
<b>Problems</b>:
-> Fixed size
-> Cannot grow dynamically

<b>List</b>
List&lt;String&gt; names = new ArrayList&lt;&gt;();
<b>Advantages</b>:
-> Dynamic size
-> Many built-in methods
-> Easy insertion and deletion0

<b>Common Implementations of List</b>
ArrayList
LinkedList
Vector
Stack

<b>ArrayList</b>
List&lt;String&gt; list = new ArrayList&lt;&gt;();
Uses dynamic array internally
Fast retrieval
Slow insertion/deletion in the middle

<b>LinkedList</b>
List&lt;String&gt; list = new LinkedList&lt;&gt;();
Uses doubly linked list
Fast insertion/deletion
Slow random access

<b>Key Methods to Know</b>
    <b>add(E e)</b>: Appends an element to the end.
    <b>get(int index)</b>: Returns the element at the specified position.
    <b>remove(int index) / remove(Object o)</b>: Removes the element.
    <b>size()</b>: Returns the number of elements.
    <b>contains(Object o)</b>: Returns true if the list contains the element.
    <b>clear()</b>: Removes all elements from the list.

    <b>Important Considerations</b>
    <b>Generics</b>: Always use Generics (e.g., <b>List&lt;String&gt;</b>) to ensure type safety and avoid <b>ClassCastException</b> at runtime.

    <b>Thread Safety</b>: The standard implementations (<b>ArrayList, LinkedList</b>) are not thread-safe. If you need a list for concurrent environments, use <b>CopyOnWriteArrayList</b> or wrap your list using <b>Collections.synchronizedList()</b>.

<b>ArrayList is NOT Thread-Safe</b>

If multiple threads modify an <b>ArrayList</b> simultaneously, you may get:
-> Data inconsistency
-> Race conditions
-> ConcurrentModificationException

Example:
List&lt;String&gt; list = new ArrayList&lt;&gt;();

Thread t1 = new Thread(() -> list.add("A"));
Thread t2 = new Thread(() -> list.add("B"));

t1.start();
t2.start();
The result is unpredictable because <b>ArrayList</b> does not synchronize access.

<b>Option 1: Collections.synchronizedList()</b>
List&lt;String&gt; list =
        Collections.synchronizedList(new ArrayList<>());

Every operation is synchronized internally.

Example:
list.add("Java");
list.add("React");

Safe for multiple threads.

<b>Option 2: CopyOnWriteArrayList</b>
List&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();

Best when:
Reads are very frequent
Writes are rare

Example:
List&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();
list.add("Java");
for(String item : list) {
    System.out.println(item);
}
Internally, every write creates a new copy of the array.

<b>Advantages</b>
Thread-safe
No ConcurrentModificationException
Excellent for read-heavy applications

<b>Disadvantages</b>
Expensive writes
More memory usage

    <b>Performance</b>: Always choose the implementation based on your specific access pattern—if you are mostly reading, choose <b>ArrayList</b>; if you are constantly modifying the middle of the list, consider <b>LinkedList</b> or other specialized structures.
`,
                    code1: `// ---------- Ex : 1 ---------
           List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add("Java");
        list.add("Spring");
        list.add("Java"); // duplicates allowed
        System.out.println(list);
        
        
        // ----------------- Ex : 2 ---------------
        class Employee {
    int id;
    String name;
    String position;

    Employee(int id, String name, String position){
        this.id = id;
        this.name = name;
        this.position = position;
    }
}


// Demo.java
        import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) {

        List<Employee> emp = new ArrayList<>();
        emp.add(new Employee(1, "ram", "admin"));
        emp.add(new Employee(2, "vamshi", "suman"));
        System.out.println(emp);


        List<String> names = emp.stream()
                .map(e -> e.id +" - "+  e.name +" - " + e.position)
                .toList(); 

        System.out.println(names);
    }
}

//  Output:
 [Employee@6b95977, Employee@7e9e5f8a]
[1 - ram - admin, 2 - vamshi - suman]
        `
                }
            ]
        },
        {
            id: 1,
            title: "ArrayList",
            note: [
                {
                    text1: `In Java, <b>ArrayList</b> is a resizable-array implementation of the <b>List</b> interface. It's part of the <b>java.util</b> package. Unlike arrays, <b>ArrayList</b> can dynamically grow and shrink in size as elements are added or removed.
          
          <b>Dynamic Sizing</b>: <b>ArrayList</b> can dynamically increase or decrease its size as elements are added or removed. You don't need to specify the size of the <b>ArrayList</b> initially.
<b>Indexed Access</b>: Elements in an <b>ArrayList</b> can be accessed using an index, similar to arrays. The index starts from 0 for the first element and goes up to size-1 for the last element.
<b>Ordered Collection</b>: <b>ArrayList</b> maintains the order of elements in which they are inserted.
<b>Allows Duplicates</b>: <b>ArrayList</b> can contain duplicate elements.
<b>Not Synchronized</b>: Unlike <b>Vector, ArrayList</b> is not synchronized. If multiple threads access an <b>ArrayList</b> concurrently and at least one of the threads modifies the list structurally, it must be synchronized externally.
<b>Null Elements</b>: <b>ArrayList</b> allows storing <b>null</b> elements.

<a href="https://medium.com/@Bharat2044/what-is-arraylist-in-java-and-how-to-create-and-all-predefined-methods-and-different-ways-to-print-fa3cc9f86f8b" target="_blank">ArrayList</a>`,
                    code1: `//-------------- Ex : 1 ------------
          import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();

        list.add("Apple");
        list.add("Banana");
        list.add("Mango");

        System.out.println(list);        // [Apple, Banana, Mango]

        System.out.println(list.get(1));  // Banana

        list.remove("Banana");

        System.out.println(list);        // [Apple, Mango]
    }
}
    
// Output:
// [Apple, Banana, Mango]
// Banana
// [Apple, Mango]
`
                }
            ]
        },
        {
            id: 1,
            title: "LinkedList",
            note: [
                {
                    text1: `<b>LinkedList</b> is a class in the Java Collections Framework that implements both the <b>List</b> and <b>Deque</b> interfaces.
          
          Instead of storing elements in a continuous memory block like <b>ArrayList</b>, it stores elements as <b>nodes</b>, where each node contains:
-> Data
-> Reference to the next node
-> Reference to the previous node (Doubly Linked List)

A Linked List is a linear data structure where elements (called nodes) are connected using references (links). Unlike arrays, nodes are not stored in contiguous memory locations.


<b>1. What Exactly Is a Linked List in Java?</b>
A Linked List is a dynamic, node-based data structure where elements (called nodes) are linked using pointers (references). Unlike arrays, which occupy a single continuous block of memory, a Linked List's nodes can be scattered anywhere in memory but are connected through references.

A Linked List node typically contains:
-> The data it stores
-> A reference (pointer/link) to the next node
-> (For doubly linked lists) A reference to the previous node

Think of Linked Lists as:
"Chains of connected compartments spread across a warehouse."
-> Each compartment knows where the next one is.
-> You can easily insert or remove any compartment without disturbing the entire chain.
-> But you can't jump directly to a compartment you must walk through the chain.

This simple analogy explains both the power and the limitations of Linked Lists.

<b>2. Internal Working of Linked Lists in Java</b>
Java's LinkedList class is built on a Doubly Linked List implementation. Internally, it maintains:
-> A head (first node)
-> A tail (last node)
-> Nodes connected through previous and next references
-> A size counter

Let's understand the major components of the internal architecture.

<b>2.1 Nodes Are Objects on the Heap</b>
Each node in a Linked List is a separate object with:
-> A value
-> A reference to the next node
-> A reference to the previous node

This creates flexibility, but it also means:
-> More memory per element
-> More allocation operations
-> More fragmentation compared to arrays

<b>2.2 No Contiguous Memory Requirement</b>
Unlike arrays:
-> Nodes can live anywhere in heap memory
-> They are connected through references
-> You don't need to predefine size

This allows effortless resizing but results in slower traversal because pointers break CPU caching patterns.

<b>2.3 Traversal Requires Reference Chaining</b>
To reach the i-th element:
-> Java must start from the head
-> Follow the next references
-> Continue until it reaches that node

This means that indexing is O(n), unlike arrays which are O(1).
However, inserting or removing a node once you have a reference is extremely efficient.

<b>How the ArrayList works</b>
The ArrayList class has a regular array inside it. When an element is added, it is placed into the array. If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.

<b>How the LinkedList works</b>
The LinkedList stores its elements in "containers." The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.


<b>3. Types of Linked Lists Used in Java</b>
Let's explore the most commonly used Linked List variants.

<b>3.1 Singly Linked List</b>
Each node has:
-> Data
-> Reference to next node

Best for:
-> Forward traversal
-> Stack-like operations
-> Basic dynamic collections

<b>3.2 Doubly Linked List (used internally in Java's LinkedList)</b>
Each node has:
-> Data
-> Reference to next node
-> Reference to previous node

Better for:
-> Frequent insertions
-> Bidirectional navigation
-> Deque and queue-like structures

<b>3.3 Circular Linked List</b>
Last node's reference points to the first node.
Used in:
-> Round-robin scheduling
-> Repeated cyclic processes (OS kernels, task switching)




<b> Advantages of Linked Lists in Java </b>
Linked Lists are not always the fastest, but they offer unique strengths you cannot ignore.

4.1 Dynamic Sizing
Unlike arrays:
-> No need to define a fixed size
-> Memory allocated only when needed
-> Ideal when data continuously changes

This prevents memory wastage and avoids resizing costs.

<b>4.2 Fast Insertions and Deletions</b>
Linked Lists excel in structural modifications:
-> Insert anywhere without shifting
-> Delete in O(1) once the node is found
-> Perfect for systems with continuous updates

Examples:
-> Task queues
-> Realtime update buffers
-> Implementing Undo/Redo operations



<b>LinkedList Methods :</b>
<b>addFirst()</b>	Adds an element to the beginning of the list	
<b>addLast()</b>	Add an element to the end of the list	
<b>removeFirst()</b>	Remove an element from the beginning of the list	
<b>removeLast()</b>	Remove an element from the end of the list	
<b>getFirst()</b>	Get the element at the beginning of the list	
<b>getLast()</b>	Get the element at the end of the list
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Queue?",
            note: [
                {
                    text1: `A Queue is a collection used to store elements in <b>FIFO order (First In First Out)</b>.
          
          👉 Think like:
Bank queue
Ticket counter
Printer queue

First Come → First Serve`,
                    code1: `//------------ Ex : 1 -------------
          import java.util.*;

public class QueueExample {
    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<>();

        queue.add("Anand");
        queue.add("John");
        queue.add("Priya");

        System.out.println(queue);
    }
}`
                }
            ]
        },
        {
            id: 1,
            title: "var",
            note: [
                {
                    text1: `var is a feature introduced in Java 10 that allows the compiler to automatically infer the type of a local variable from its initializer. It reduces code verbosity while maintaining strong type checking at compile time.
          
          var name = "Anand";      // String
var age = 30;            // int
var salary = 50000.50;   // double

Rules of var
✅ Valid
var num = 10;
var name = "Java";
var list = new LinkedList<String>();

❌ Invalid
var x;          // Error: no initial value

❌ Invalid
var a = null;   // Error: type cannot be inferred
`,
                    code1: `// --------------- Ex : 1 ---------------
          
          import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {

        LinkedList<String> fruits = new LinkedList<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        System.out.println("Original List: " + fruits);

        // Add element at beginning
        fruits.addFirst("Orange");

        // Add element at end
        fruits.addLast("Grapes");

        System.out.println("After Adding: " + fruits);

        // Remove first element
        fruits.removeFirst();

        System.out.println("After Removing First: " + fruits);

        // Access element
        System.out.println("Second Element: " + fruits.get(1));
    }
}
    
// Output : 
// Original List: [Apple, Banana, Mango]
// After Adding: [Orange, Apple, Banana, Mango, Grapes]
// After Removing First: [Apple, Banana, Mango, Grapes]
// Second Element: Banana
`
                }
            ]
        },
        {
            id: 1,
            title: "What is Set?",
            note: [
                {
                    text1: `A <b>Set</b> is a collection that <b>does not allow duplicate elements.</b>
          Declaration
public interface Set&lt;E&gt; extends Collection&lt;E&gt;

In Java, a Set is a collection that cannot contain duplicate elements. It models the mathematical set abstraction and is defined by the <b>java.util.Set</b> interface.

Unlike a <b>List</b>, which is ordered and allows duplicates, a <b>Set</b> focuses on uniqueness and usually does not guarantee the order of its elements (unless specific implementations are used).

<b>Core Characteristics</b>
    <b>Uniqueness</b>: It ensures that no two elements are equal (based on <b>.equals()</b> and <b>.hashCode())</b>.
    <b>No Indexing</b>: Because most sets are unordered, you cannot access elements by an integer index (there is no get(int index) method).
    <b>Efficiency</b>: Set implementations are highly optimized for testing whether an item is already contained within the collection.

    Here are the common <b>Set</b> implementations in Java, broken down by their primary characteristics and use cases:

    <b>HashSet</b>
        <b>Ordering</b>: Unordered; it does not guarantee any specific sequence for elements.
        <b>Performance</b>: Offers constant-time O(1) performance for basic operations (add, remove, contains).
        <b>Best For</b>: General-purpose collections where you need fast lookups and don't care about the order of elements.

    <b>LinkedHashSet</b>
        <b>Ordering</b>: Maintains the insertion order of elements.
        <b>Performance</b>: Maintains O(1) performance, similar to <b>HashSet</b>.
        <b>Best For</b>: Scenarios where you need to ensure element uniqueness but also need to remember the order in which items were added.

    <b>TreeSet</b>
        <b>Ordering</b>: Keeps elements in their natural sorted order (or via a custom <b>Comparator</b>).
        <b>Performance</b>: Operates in logarithmic <b>O(log n)</b> time.
        <b>Best For</b>: Situations where you need the data to be kept in a specific sorted sequence, though it is slightly slower than the other two implementations.

        <b>Important Set Methods</b>
        <b>add(E e)</b>
        -> Adds an element to the Set.
        -> Returns <b>true</b> if the element was added successfully.
        -> Duplicate elements are ignored.
        
        <b>remove(Object o)</b>
        Removes the specified element from the Set.
        Returns <b>true</b> if the element existed and was removed.
        
        <b>contains(Object o)</b>
        Checks whether the specified element exists in the Set.
        Returns <b>true</b> if found; otherwise <b>false</b>.
        
        <b>size()</b>
        Returns the total number of elements present in the Set.
        
        <b>isEmpty()</b>
        Checks whether the Set contains any elements.
        Returns <b>true</b> if the Set is empty; otherwise <b>false</b>.
        
        <b>clear()</b>
        Removes all elements from the Set.
        The Set becomes empty after execution.
`,
                    code1: `// ---------------   HashSet ----------
          import java.util.*;

public class SetExample {
    public static void main(String[] args) {

        Set<String> set = new HashSet<>();

        set.add("Java");
        set.add("React");
        set.add("Java");

        System.out.println(set);
    }
}
    `
                }
            ]
        },
        {
            id: 1,
            title: "What is Map (Interface)",
            note: [
                {
                    text1: `In Java, a Map is a collection that stores data in key-value pairs. Unlike <b>List</b> or <b>Set</b>, which store individual elements, a <b>Map</b> is designed to map a unique key to a specific value.

It is defined by the <b>java.util.Map</b> interface. Think of it like a real-world dictionary: the word is the key, and the definition is the value.

public interface Map<K, V>
K → Key type
V → Value type

<b>Core Characteristics</b>
    <b>Key-Value Pairs</b>: Every entry consists of a key and its associated value.
    <b>Unique Keys</b>: Each key must be unique; a Map cannot contain duplicate keys. However, values can be duplicated.
    <b>Efficient Lookup</b>: Maps are designed for high-performance retrieval of values based on their keys.
    <b>HashMap</b> and <b>LinkedHashMap</b> allow one null key, and <b>TreeMap</b> does NOT allow null keys (if natural ordering is used).

    Not a Collection: While it is part of the "Collections Framework," a Map does not technically implement the Collection interface because it handles pairs rather than individual elements.

    <b>HashMap</b>
    A HashMap stores data in <b>key-value pairs</b> and provides <b>fast access (O(1) average time)</b>.
    <b>Ordering</b>: Unordered; it does not guarantee any specific sequence for its entries. Does not maintain any order (no insertion or sorting order)
    <b>Performance</b>: Offers constant-time O(1) performance for basic operations like <b>put</b> and <b>get</b>.
    <b>Best For</b>: General-purpose data storage where speed is the priority and the order of elements does not matter.

    Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();

    <b>LinkedHashMap</b>
    <b>Ordering</b>: Maintains the insertion order of keys. This means that when you iterate over the map, the keys will be returned in the same order they were added.
    <b>Performance</b>: Maintains O(1) performance, similar to <b>HashMap</b>.
    <b>Best For</b>: Scenarios where you need to preserve the order in which entries were added, such as implementing an LRU (Least Recently Used) cache or maintaining a logical sequence of items.

    When using LinkedHashMap in a multi-threaded environment where multiple threads can access and modify the map at the same time, it’s important to synchronize access to it. This can be done by either using external synchronization or by using the synchronizedMap method provided by the Collections class.

    Map&lt;Integer, String&gt; map = new LinkedHashMap&lt;&gt;();


    <b>TreeMap</b>
    <b>Ordering</b>: Keeps entries in their natural sorted order (by key) or via a custom <b>Comparator</b> provided at creation.
    <b>Performance</b>: Operates in logarithmic O(log n) time.
    <b>Best For</b>: Situations where you need to perform range queries or retrieve keys in a specific sorted sequence (e.g., sorting keys alphabetically or numerically).

    Map&lt;Integer, String&gt; map = new TreeMap&lt;&gt;();


    <b>Can Map contain duplicate keys?</b>
❌ No
If you insert same key again:
map.put(1, "Java");
map.put(1, "Spring");

Final value:
<b>{ 1=Spring }</b>
Old value is replaced.

--------------------------------
<b>Common Interview Questions</b>
What is hashing?
What is hashCode()?
What is a bucket?
What is collision?
How does HashMap handle collisions?
Why is HashMap not thread-safe?
Difference between HashMap and Hashtable?
Difference between HashMap and ConcurrentHashMap?
`,
                    code1: `//  --------------- Ex : 1 --------------
          import java.util.*;

          public class MapExample {
              public static void main(String[] args) {

                  Map<Integer, String> map = new HashMap<>();

                  map.put(1, "Java");
                  map.put(2, "React");
                  map.put(3, "Spring");

                  System.out.println(map);
              }
          }


          // ------------------ Employee ----------------
          class Employee {
              int id;
              String name;
              String position;

              Employee(int id, String name, String position){
                  this.id = id;
                  this.name = name;
                  this.position = position;
              }

              @Override
              public String toString() {
                  return id + " " + name + " " + position;
              }
          }


          // ------ EmployeeMapDemo -------
import java.util.*;

public class EmployeeMapDemo {
    public static void main(String[] args) {

        Map<Integer, Employee> empMap = new HashMap<>();

        empMap.put(101, new Employee(101, "Anand", "Developer"));
        empMap.put(102, new Employee(102, "John", "Tester"));
        empMap.put(103, new Employee(103, "Priya", "Manager"));

        // Fetch single employee
        System.out.println(empMap.get(101));

        // Iterate all employees
        for (Map.Entry<Integer, Employee> entry : empMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
    `
                }
            ]
        },
        {
            id: 1,
            title: "Set to Map Conversion",
            note: [
                {
                    text1: ``,
                    code1: `// --------------- Ex : 1 List&lt;Employee&gt; → Map&lt;Integer, String&gt; --------------
          
          import java.util.*;
import java.util.stream.Collectors;

class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return id + " " + name;
    }
}


    class Main {
        public static void main(String[] args) {
            List<Employee> emp = new ArrayList<>();
            
            emp.add(new Employee(1,"ram"));
            emp.add(new Employee(2,"Suman"));
            
            System.out.println("Set" + emp);
            
            Map<Integer, String> empMap = emp.stream()
                .collect(Collectors.toMap(
                        Employee::getId,
                        Employee::getName
                    ));
                    
            System.out.println("Map" +empMap);
        }
    }
        
    Output:
Set[1 ram, 2 Suman]
Map{1=ram, 2=Suman}


// --------------- Ex : 2 List&lt;Employee&gt; → Map&lt;Integer, Employee&gt; --------------
class Employee {
    int id;
    String name;
    String position;

    Employee(int id, String name, String position){
        this.id = id;
        this.name = name;
        this.position = position;
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    @Override
    public String toString() {
        return id + " " + name + " " + position;
    }
}
    
public class EmployeeMapDemo {
    public static void main(String[] args) {

        List<Employee> empList = new ArrayList<>();

        empList.add(new Employee(101, "Anand", "Developer"));
        empList.add(new Employee(102, "John", "Tester"));
        empList.add(new Employee(103, "Priya", "Manager"));

        Map<Integer, Employee> empMap =  empList.stream()
                .collect(Collectors.toMap(Employee::getId, emp -> emp));
              // Since emp -> emp simply returns the same object,
        System.out.println(empMap);

    }
}
    Output:
{101=101 Anand Developer, 102=102 John Tester, 103=103 Priya Manager}
`
                }
            ]
        },
        {
            id: 1,
            section: "Data Structures and Algorithms",
            title: "Pagination",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What are the differences between List and Set?",
            note: [
                {
                    text1: `List and Set both are interfaces. They both extends Collection interface. 
 
1) List is an ordered collection it maintains the insertion order, which means upon displaying the list content it will 
display the elements in the same order in which they got inserted into the list. 
Set is an unordered collection, it doesn’t maintain any order. There are few implementations of Set which 
maintains the order such as LinkedHashSet (It maintains the elements in insertion order). 
2) List allows duplicates while Set doesn’t allow duplicate elements. All the elements of a Set should be unique if 
you try to insert the duplicate element in Set it would replace the existing value. 
 
3) List implementations: ArrayList, LinkedList etc. 
Set implementations: HashSet, LinkedHashSet, TreeSet etc. 
 
4) List allows any number of null values. Set can have only a single null value at most. 
 
5) ListIterator can be used to traverse a List in both the directions (forward and backward) However it cannot be 
used to traverse a Set. We can use Iterator (It works with List too) to traverse a Set. 
 
6) List interface has one legacy class called Vector whereas Set interface does not have any legacy class.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Stream API",
            title: "Stream API",
            note: [
                {
                    text1: `It allows you to filter, transform, and process data easily using pipelines.

In simple words:
Stream API is used to process collections (List, Set, etc.) using functional programming concepts.

1️⃣ Key Features of Stream API
Processes collections of objects
Supports functional programming
Uses lambda expressions
Enables parallel processing
Improves readability and performance

2️⃣ Stream API Flow
Collection → Stream → Intermediate Operations → Terminal Operation → Result
Example flow:
List → stream() → filter() → map() → collect()

3️⃣ Types of Operations
<b>1. Intermediate Operations</b>
Return a Stream
Used for data transformation
Lazy execution (runs only when terminal operation is called)

Examples:
filter()
map()
sorted()
distinct()
limit()

<b>2. Terminal Operations</b>
Produce final result
Close the stream

Examples:
collect()
forEach()
count()
reduce()
findFirst()


<b>Interview Definition</b>
Stream API is a feature introduced in Java 8 that allows processing collections of objects using functional-style operations like filter, map, and reduce to perform data transformations and aggregations efficiently.


<h3>Stream vs Collection</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Collection</th>
      <th>Stream</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Storage</td>
      <td>Stores data</td>
      <td>Does not store data</td>
    </tr>
    <tr>
      <td>Processing</td>
      <td>Direct</td>
      <td>Pipeline operations</td>
    </tr>
    <tr>
      <td>Iteration</td>
      <td>External</td>
      <td>Internal</td>
    </tr>
    <tr>
      <td>Reusability</td>
      <td>Yes</td>
      <td>No (once used)</td>
    </tr>
  </tbody>
</table>


<h3>Common Stream Methods</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filter()</td>
      <td>Filters elements</td>
    </tr>
    <tr>
      <td>map()</td>
      <td>Transforms elements</td>
    </tr>
    <tr>
      <td>sorted()</td>
      <td>Sorts elements</td>
    </tr>
    <tr>
      <td>distinct()</td>
      <td>Removes duplicates</td>
    </tr>
    <tr>
      <td>limit()</td>
      <td>Limits number of elements</td>
    </tr>
    <tr>
      <td>collect()</td>
      <td>Converts stream to collection</td>
    </tr>
    <tr>
      <td>count()</td>
      <td>Counts elements</td>
    </tr>
  </tbody>
</table>`,
                    code1: `//--------- 1: Filter Even Numbers -----------
          import java.util.*;
import java.util.stream.*;

public class Example {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);

        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
    }
}
    
// Output
2
4
6


//-------------- 2: Map Operation (Transform Data) ------------
import java.util.*;

public class Example {
    public static void main(String[] args) {

        List<String> names = Arrays.asList("ram","shyam","hari");

        names.stream()
             .map(name -> name.toUpperCase())
             .forEach(System.out::println);
    }
}
// Output:
RAM
SHYAM
HARI



// ------------ 3: Collect Result ------------
import java.util.*;
import java.util.stream.Collectors;

public class Example {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5);

        List<Integer> result = numbers.stream()
                                      .filter(n -> n > 2)
                                      .collect(Collectors.toList());

        System.out.println(result);
    }
}
// Output:
[3, 4, 5]

// --------- ✅ Real-time Example (Employee Filtering) ---------

import java.util.*;
import java.util.stream.*;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}

public class StreamExample {

    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
            new Employee(1, "Ram", 45000),
            new Employee(2, "Shyam", 60000),
            new Employee(3, "Hari", 75000),
            new Employee(4, "Krishna", 30000)
        );

        employees.stream()
                 .filter(emp -> emp.getSalary() > 50000)
                 .map(emp -> emp.getName())
                 .forEach(System.out::println);
    }
}
    // Output
Shyam
Hari

//          This will:
// Filter employees with salary > 50000
// Get their names
// Print them


`
                }
            ]
        },
        {
            id: 1,
            title: "collect(Collectors.toMap())",
            note: [
                {
                    text1: `collect(Collectors.toMap()) is used to convert a collection (List/Set) into a Map.

          <b>keyMapper</b>	Function to generate the Map key
          <b>valueMapper</b>	Function to generate the Map value


          groupingBy() (very important)
          partitioningBy()
          mapping()
          joining()
          summarizingInt()
          `,
                    code1: `// ------------- Ex -----------
          Map<Key, Value> map = list.stream()
                          .collect(Collectors.toMap(
                              keyMapper,
                              valueMapper
                          ));

                // ------------ Ex : 1 ----------
                import java.util.*;
                import java.util.stream.Collectors;

                public class Example {

                    public static void main(String[] args) {

                        List<String> names = Arrays.asList("Ram", "Shyam", "Hari");

                        Map<String, Integer> map = names.stream()
                                .collect(Collectors.toMap(
                                        name -> name,
                                        name -> name.length()
                                ));

                        System.out.println(map);
                    }
                }
                    // Output:
                    {Ram=3, Shyam=5, Hari=4}


            // ---------- Real-Time Example (Employee Map) -------
// EmployeeId → EmployeeName

class Employee {

    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}


// Convert List → Map
import java.util.*;
import java.util.stream.Collectors;

public class StreamExample {

    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
                new Employee(1, "Ram", 45000),
                new Employee(2, "Shyam", 60000),
                new Employee(3, "Hari", 75000)
        );

        Map<Integer, String> employeeMap =
                employees.stream()
                        .collect(Collectors.toMap(
                                emp -> emp.getId(),
                                emp -> emp.getName()
                        ));

        System.out.println(employeeMap);
    }
}
    // Output:
    {1=Ram, 2=Shyam, 3=Hari}

                `
                }
            ]
        },
        {
            id: 1,
            title: "stream map",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "stream filter",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "stream reduce",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "stream sorted(), distinct(), limit()",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "real-time examples",
            note: [
                {
                    text1: ``,
                    code1: `//------------- Ex : 1 -----------
          import java.util.*;

class User {
    private int id;
    private String name;
    private boolean active;

    // Constructor
    public User(int id, String name, boolean active) {
        this.id = id;
        this.name = name;
        this.active = active;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isActive() {
        return active;
    }

    // Optional: toString() for better printing
    @Override
    public String toString() {
        return id + " - " + name + " - " + active;
    }
}

public class StreamUser {

    public static void main(String[] args) {

        List<User> users = Arrays.asList(
                new User(1, "Anand", true),
                new User(2, "Ram", false),
                new User(3, "Shyam", true),
                new User(4, "Hari", false)
        );

        // Stream API usage
        List<User> activeUsers = users.stream()
                .filter(user -> user.isActive())
                // .filter(UserEx2::isActive) // Method Reference
                .toList();

        // Print result
        activeUsers.forEach(System.out::println); // Method Reference
        // activeUsers.forEach(u -> System.out.println(u.toString())); 
    }
}
    

//------------- lognest string -----------
       List<String> words = List.of("ram","elephant", "microservices", "Docker", "spring");

        String longest = words.stream()
                .max(Comparator.comparingInt(String::length))
                .orElse("");

        System.out.println(longest);
        
        //Output: microservices 
        
//         🧠 Step-by-Step Explanation
//         1️⃣ words.stream()
// Convert List → Stream
// 2️⃣ Comparator.comparingInt(String::length)
// Compares strings based on length
// Equivalent to:
// (s1, s2) -> Integer.compare(s1.length(), s2.length())
// 3️⃣ .max(...)
// Finds the maximum element
// Here: string with maximum length
// 4️⃣ .orElse("")
// If list is empty → return "" (default value)
// Prevents NullPointerException


// ----------- 🔥 1️⃣ Longest Username ------------
String longestName = users.stream()
        .map(User::getName)
        .max(Comparator.comparingInt(String::length))
        .orElse("");

// ----------- 🔥 1️⃣ Longest Username real time ------------
import java.util.*;

class User {
    private int id;
    private String name;

    // Constructor
    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

public class LongestUser {
    public static void main(String[] args) {

        List<User> users = Arrays.asList(
                new User(1, "Ram"),
                new User(2, "Anand"),
                new User(3, "Christopher"),
                new User(4, "Hari")
        );

        // Find longest username
        String longestName = users.stream()
                .map(User::getName)
                .max(Comparator.comparingInt(String::length))
                .orElse("");

        System.out.println("Longest Username: " + longestName);
    }
}
    // ✅ Output
Longest Username: Christopher

// 🧠 Step-by-Step Flow
// 1️⃣ users.stream()
// Convert list → stream

// 2️⃣ map(User::getName)
// Convert:
// User → String (name)

// Intermediate data:
// ["Ram", "Anand", "Christopher", "Hari"]
// 3️⃣ max(Comparator.comparingInt(String::length))
// Compare strings by length
// Return the longest string
// 4️⃣ orElse("")
// If list is empty → return empty string
`
                }
            ]
        },
        {
            id: 1,
            title: "Method Reference :: ",
            note: [
                {
                    text1: `n Java, the double colon :: is known as the Method Reference operator. Introduced in Java 8, it’s a shorthand syntax used to refer to a method without actually invoking it.
          
          Think of it as a cleaner, more readable way to write a Lambda Expression. Instead of describing how to do something, you’re just pointing to an existing method that already does it.
          
          ✅ Simple Definition
Method reference (::) is a shorthand way to call a method using lambda expressions.

          <b>1. How it works</b>
If a lambda expression simply calls an existing method, you can replace the lambda with a method reference.
    Lambda Style: s -> System.out.println(s)
    Method Reference Style: System.out::println
//-----------
    Instead of writing:
name -> name.length()
You can write:
String::length
    
<b>Interview Answer (Perfect)</b>
:: is called method reference in Java. It is used to refer to a method without executing it and is a shorthand for lambda expressions, improving readability and reducing boilerplate code.

<h3>Common Types of Method References</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Type</th>
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Static Method</td>
      <td>Class::staticMethod</td>
      <td>Math::max</td>
    </tr>
    <tr>
      <td>Instance Method (Specific Object)</td>
      <td>instance::method</td>
      <td>myString::toLowerCase</td>
    </tr>
    <tr>
      <td>Instance Method (Arbitrary Object)</td>
      <td>Class::method</td>
      <td>String::toUpperCase</td>
    </tr>
    <tr>
      <td>Constructor</td>
      <td>Class::new</td>
      <td>ArrayList::new</td>
    </tr>
  </tbody>
</table>

<h3>Lambda vs Method Reference</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Lambda</th>
      <th>Method Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>x -&gt; x.toUpperCase()</td>
      <td>String::toUpperCase</td>
    </tr>
    <tr>
      <td>x -&gt; x.length()</td>
      <td>String::length</td>
    </tr>
    <tr>
      <td>user -&gt; user.getName()</td>
      <td>User::getName</td>
    </tr>
  </tbody>
</table>
    `,
                    code1: `// ----------- Ex : 1 -----------
          import java.util.*;
          public class MethodRef {
              public static void main(String[] args) {
                  List<Integer> nums = Arrays.asList(1, 2, 3);
                  nums.forEach(System.out::println);
              }
          }
          // System.out::println = (x) -> System.out.println(x)

          // 2️⃣ Instance Method of Object
object::method
// Example
String str = "hello";
Runnable r = str::toUpperCase;

// 3️⃣ Instance Method of Class (Most Used)
ClassName::method

// Example
List<String> names = List.of("ram", "shyam");
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);
👉 String::toUpperCase = name -> name.toUpperCase()

// 4️⃣ Constructor Reference
ClassName::new
// ---------- User::new --------
import java.util.*;

class User {
    private String name;

    // Constructor that accepts name
    public User(String name) {
        this.name = name;
    }

    // Getter
    public String getName() {
        return name;
    }

    // toString() for printing
    @Override
    public String toString() {
        return "User{name='" + name + "'}";
    }
}

public class UserDoubleCollonMain {
    public static void main(String[] args) {

        // List of names
        List<String> names = List.of("Ram", "Shyam");

        // Convert names → User objects using constructor reference
        List<User> users = names.stream()
                .map(User::new)
            //  .map(user -> new UserEx1(user)) // generally we will use
                .toList();

        // Print users
        users.forEach(System.out::println);
    }
}


// 👉 Calls constructor new User(name)
// 🔥 Your Example Explained
.map(User::getName)
// 👉 Same as:
.map(user -> user.getName())

Comparator.comparingInt(String::length)
// 👉 Same as:
Comparator.comparingInt(s -> s.length())


//-------------

// 🔥 1️⃣ Simple String Uppercase
// ✅ Lambda
names.stream()
     .map(name -> name.toUpperCase())
     .forEach(System.out::println);

// ✅ Method Reference
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);
// 👉 Same meaning, cleaner with ::


// 🔥 2️⃣ Get Length of Strings
// Lambda
names.stream()
     .map(name -> name.length())
     .forEach(System.out::println);
// Method Reference
names.stream()
     .map(String::length)
     .forEach(System.out::println);

// 🔥 3️⃣ Print Values
// Lambda
names.forEach(name -> System.out.println(name));
// Method Reference
names.forEach(System.out::println);

🔥 4️⃣ Convert String → User Object (Constructor)
// Lambda
.map(name -> new User(name))
// Method Reference
.map(User::new)

🔥 5️⃣ Get Object Property
// Lambda
.map(user -> user.getName())
// Method Reference
.map(User::getName)

🔥 6️⃣ Sorting
// Lambda
users.stream()
     .sorted((u1, u2) -> u1.getName().compareTo(u2.getName()))
     .toList();
// Method Reference
users.stream()
     .sorted(Comparator.comparing(User::getName))
     .toList();

🔥 7️⃣ Filter Example (⚠️ Important)
// Lambda
users.stream()
     .filter(user -> user.isActive())
     .toList();
// Method Reference
users.stream()
     .filter(User::isActive)
     .toList();
          `
                }
            ]
        },
        {
            id: 1,
            section: "Generics",
            title: "Generics",
            note: [
                {
                    text1: `<b>Definition of Generics in Java</b>
<b>Generics in Java</b> is a feature that allows you to write <b>classes, interfaces, and methods with a placeholder for types</b>, so that you can use the same code with different data types <b>in a type-safe way</b>.
          <b>Why Use Generics?</b>
    <b>Type Safety</b>: The compiler checks that you’re only adding the correct type of data.
    <b>Elimination of Casts</b>: You don't have to manually convert types (e.g., (String) myValue).
    <b>Code Reusability</b>: You can write a single class or method that works with different types of data while maintaining safety.
    
    Generics = Write code once, use it with any data type (without losing type safety).
    
    Before generics (Java 1.4 and earlier), we used Object type:
List list = new ArrayList();
list.add("Anand");
list.add(10);  // allowed

❌ Problems:
No type safety
Need manual casting
Runtime errors

✅ With Generics (Java 1.5+)
List<String> list = new ArrayList<>();
list.add("Anand");
// list.add(10); ❌ Compile-time error
✔ Type-safe
✔ No casting required
✔ Errors caught at compile time

<b>Basic Syntax</b>
ClassName&lt;T&gt; 
T = Type parameter (can be anything like E, K, V)`,
                    code1: `//------ Example 1: Generic Class ---------
class Box&lt;T&gt; {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

//Usage:
Box&lt;String&gt; stringBox = new Box&lt;&gt;();
stringBox.setValue("Hello");

Box&lt;Integer&gt; intBox = new Box&lt;&gt;();
intBox.setValue(100);`
                }
            ]
        },
        {
            id: 1,
            section: "Lambda functions",
            title: "Lambda functions",
            note: [
                {
                    text1: `Lambda functions in Java are a <b>short way to write anonymous functions (functions without a name).</b> They are mainly used with <b>functional interfaces</b> and introduced in Java 8 to support functional programming.
          
          ✅ Simple Definition
A lambda expression is a concise way to represent a method with <b>no name, no modifier, and no return type declaration.</b>

<b>Why break is Forbidden in Lambdas</b>
Even though <b>list.forEach()</b> feels like a loop, at the language level, it is not.
    Lambdas are just methods: A lambda expression in Java is essentially a compact way of writing an anonymous method (in this case, the <b>accept</b> method of the <b>Consumer</b> interface).

    <b>break</b> requires a native loop: The <b>break</b> (and <b>continue</b>) keywords are strictly designed to control the flow of native language structures like <b>for, while, do-while</b>, and <b>switch</b> blocks.

    No enclosing loop: Because the lambda is just a standalone method body being passed into <b>forEach</b>, there is no actual <b>for</b> or <b>while</b> loop surrounding the <b>break</b> statement for it to exit out of.
    
    <a href="https://github.com/anand-developer01/java-programs/blob/main/BreakInsideLambda.java" target="_blank">cannot use a statement inside a lambda expression.</a>

    (<b>Note</b>: If you use <b>return;</b> inside this lambda, it will compile, but it acts like a <b>continue</b> statement, not a <b>break</b>. It simply exits the current method call for that specific element and moves on to the next one.)
    
    `,
                    code1: `// 🔹------  Basic Syntax -------
(parameters) -> expression
// or
(parameters) -> {
    // multiple statements
}
    
// ---------  Example 1: Without Lambda (Old Way)
Runnable r = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};
// ----------  Example 2: With Lambda (New Way)
Runnable r = () -> System.out.println("Hello");
`
                }
            ]
        },
        {
            id: 1,
            title: "Functional Interface in Java",
            note: [
                {
                    text1: `A <b>Functional Interface</b> is an interface that contains <b>exactly one abstract method.</b>
        A functional interface can have:
-> Only <b>one abstract method</b>
-> Any number of <b>default</b> or <b>static</b> methods

A Functional Interface in Java is an interface that contains exactly one abstract method.

They are the foundation of functional programming in Java, enabling the use of <b>Lambda expressions</b> and <b>Method references</b>. Because they only have one method, the compiler can easily map a lambda expression directly to that method.

<b>Key Characteristics</b>
    -> <b>Single Abstract Method (SAM)</b>: While they can have any number of <b>default</b> or <b>static</b> methods, they must have exactly one abstract method.

    -> <b>@FunctionalInterface Annotation</b>: This is an optional but highly recommended annotation. It instructs the compiler to verify that the interface has exactly one abstract method, providing a compile-time error if you accidentally add a second one.

    <b>🧠 Why Functional Interfaces?</b>
They are used for:
Lambda expressions
Stream API
Functional programming style in Java

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Interface</th>
      <th>Method</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Predicate&lt;T&gt;</code></td>
      <td><code>test(T t)</code></td>
      <td>Returns true/false</td>
    </tr>
    <tr>
      <td><code>Function&lt;T,R&gt;</code></td>
      <td><code>apply(T t)</code></td>
      <td>Converts input to output</td>
    </tr>
    <tr>
      <td><code>Consumer&lt;T&gt;</code></td>
      <td><code>accept(T t)</code></td>
      <td>Takes input, returns nothing</td>
    </tr>
    <tr>
      <td><code>Supplier&lt;T&gt;</code></td>
      <td><code>get()</code></td>
      <td>Returns a value</td>
    </tr>
  </tbody>
</table>

          `,
                    code1: `// --------- Example 1: Functional Interface ---------
          @FunctionalInterface
          interface Greeting {
              void sayHello(String name); // The one abstract method
          }

          public class Main {
              public static void main(String[] args) {
                  // Implementation using a Lambda Expression
                  Greeting g = (name) -> System.out.println("Hello, " + name);
                  
                  g.sayHello("Java Developer");
              }
          }

          // Output:
Hello, Java Developer 

// --------------------- Ex : 2 ---------------------
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b); // single abstract method
}

public class Main {
    public static void main(String[] args) {

        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println("Addition: " + add.calculate(10, 5));
        System.out.println("Multiplication: " + multiply.calculate(10, 5));
    }
}
    // Output:
Addition: 15
Multiplication: 50
}     `
                }
            ]
        },
        {
            id: 1,
            section: "Oops",
            title: "Pagination",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Constructor",
            note: [
                {
                    text1: `A constructor is a special block of code used to <b>initialize objects.</b> It has the same name as the class and does not have a return type, not even void. When you create an object of a class, the constructor is called automatically to set up the initial state of the object.

In Java, a constructor is a block of codes similar to the method. It is called
when an instance of the class is created. At the time of calling constructor,
memory for the object is allocated in the memory.

A constructor in Java is a special member that is called when an object is created. It initializes the new object’s state

A constructor is a specialized block of code designed specifically to <b>initialize a newly created object.</b> It shares the same name as the class and does not have a return type, not even void. When you create an object of a class, the constructor is invoked automatically to set up the initial state of that object.

Whenever you use the new keyword to create an object, at least one constructor is called. It sets up the initial state of the object by assigning values to its instance variables.

<b>Rules of Constructors</b>
To write a constructor in Java, you must follow three strict rules:
  -> The name must match the class name exactly. If your class is <b>Student</b>, your constructor must be <b>Student()</b>.
  -> It cannot have an explicit return type. Unlike methods, constructors do not return values, not even <b>void</b>.
  -> It cannot be abstract, static, final, or synchronized. Constructors are tied directly to object instantiation, so these modifiers do not apply. (They can, however, be <b>public, private, protected</b>, or package-private).
  -> It can accept parameters to initialize object properties.


  <b> Types of Constructors </b>
  -> <b>Default Constructor</b>: A constructor with no parameters. If you don’t define any constructor, Java provides a default one automatically.
  If you do not write any constructor in your class, the Java compiler automatically inserts a hidden, no-argument constructor for you. It initializes all uninitialized instance variables to their default values (<b>0</b> for integers, <b>null</b> for objects, <b>false</b> for booleans).
   <b>Note</b>: It is not necessary to write a constructor for a class because the Java compiler automatically creates a default constructor (a constructor with no arguments) if your class doesn’t have any. 

   Because the default constructor is automatically injected by the Java compiler, it is completely invisible in your <b>.java</b> source code. You will never see it just by reading your code.

However, you can prove it exists and identify it using three different methods, ranging from basic behavior to inspecting the actual compiled machinery.
If you write any constructor, the default constructor disappears

If a class does not contain any constructor and we can still create an object using <b>new ClassName()</b>, then the Java compiler has automatically provided a default constructor.


//---------------- Ex ; 1 ---------------

class Car {
    String model;
}

public class Main {
    public static void main(String[] args) {
        // We never wrote Car(), but this compiles perfectly.
        // This is proof the default constructor is there.
        Car myCar = new Car(); 
    }
}


// -------------- Ex : 2 --------------
class Car {
    String model;
    
    Car(String model) {
        this.model = model;
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); 
    }
}
 //because Java no longer generates the default constructor.
ERROR! 
Main.java:15: error: constructor Car in class Car cannot be applied to given types;
        Car myCar = new Car(); 
                    ^
  required: String
  found:    no arguments
  reason: actual and formal argument lists differ in length
1 error

ar myCar = new Car("BMW");   // ✅ Correct

  -> <b>Parameterized Constructor</b>: A constructor that takes arguments to initialize an object with specific values.
It accepts arguments so you can dynamically assign different values to different objects the moment they are created.

  -> <b>Copy Constructor</b>: A constructor that creates a new object as a copy of an existing object (not built-in in Java, but can be implemented manually). 

  -> <b> No-Argument Constructor </b>: A constructor that takes no parameters, often used to create objects with default values.
  This is a constructor you write yourself that takes no parameters. It is useful when you want to set specific default values for all objects of that class upon creation.

  -> <b>Constructor Overloading</b>: Having multiple constructors in the same class with different parameter lists (number or type of parameters).
  Just like methods, constructors can be overloaded. This means you can have <b>multiple constructors in the same class</b>, as long as their parameter lists (the number, type, or order of parameters) are different. This gives users of your class flexibility in how they create objects.

  -> <b>Chained Constructor (The this() method) - Constructor Chaining</b>: A constructor that calls another constructor in the same class using <b>this()</b> or in the parent class using <b>super()</b>.
  When you have overloaded constructors, they often share similar initialization logic. To avoid repeating code, one constructor can call another constructor within the same class using <b>this()</b>.
  <b>this()</b> → call another constructor in the same class
  <b>super()</b> → call a constructor in the parent class

  -> <b>The Private Constructor (The Pattern Enforcer)</b>
While constructors are usually <b>public</b>, marking a constructor <b>private</b> strictly forbids other classes from using the <b>new</b> keyword to create an object of this class.
A <b>private constructor</b> is a constructor that cannot be accessed outside its own class.
A private constructor is a constructor restricted by the private access modifier. This means it can only be called from within the same class where it is defined.

    <b>Purpose</b>: Used primarily to control how and when objects are created. It is the backbone of two common scenarios:
        -> Utility Classes: Classes that only contain <b>static</b> helper methods (<b>like java.lang.Math</b>). You don't want anyone instantiating a "Math" object, so you make the constructor private.
        -> The Singleton Pattern: When you need to guarantee that only one single instance of a class can ever exist in your entire application (like a central configuration manager).


    <b>Why Do We Use Private Constructors?</b>
    Private constructors are commonly used in:
    <b> -> Singleton Pattern</b>: To ensure that only one instance of a class is created and provide a global point of access to it.
    The most frequent use of a private constructor is to ensure that only one instance of a class exists throughout the application. By making the constructor private, you prevent other classes from using the new keyword to create instances.
    <b> -> Utility Classes </b>: To prevent instantiation of classes that only contain static methods and fields (like java.lang.Math).
    If a class contains only static methods or static constants (often called a "Utility" or "Helper" class), you don't want anyone to create an instance of it. Adding a private constructor ensures the class cannot be instantiated accidentally.
    <b> -> Factory Method Pattern</b>: To delegate the instantiation logic to a separate method.
    When you want to control the object creation process, you can make the constructor private and provide a public static method (a factory method) that returns an instance of the class. This allows you to perform validation, return cached instances, or return subclasses without changing the client code.
    <b> -> Preventing Object Creation</b>: To prevent the creation of objects of a class that is not meant to be instantiated.

    <b>Real-Time Java Examples</b>
Java uses private constructors in many classes:
-> java.lang.Math — prevents creating Math objects.
-> java.util.Collections — contains only static utility methods.
-> java.util.Arrays — helper methods for arrays.

    A private constructor in Java restricts object creation from outside the class. It is mainly used to implement the Singleton pattern, create utility classes with only static methods, control object creation through factory methods, and prevent instantiation of a class. The constructor can still be accessed from within the same class, allowing the class to manage how and when its objects are created.

<a href="https://github.com/anand-developer01/java-programs/blob/main/PrivateConstructor.java" target="_blank">Private Constructor</a>
`,
                    code1: `// ----------------- Ex : 1 ----------------
          class Student {
    String name;

    // Constructor
    Student(String name) {
        this.name = name;
    }

    void display() {
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        Student s1 = new Student("Vishnu");
        s1.display();
    }
}

// Output:
// Name: Vishnu  


// ------------------The Default Constructor ----------------
public class Car {
    String brand;
    int year;

    public static void main(String[] args) {
        // We didn't write a constructor, but we can still create the object
        Car myCar = new Car(); 
        System.out.println(myCar.brand); // Output: null
    }
}
    // Output:
// null


//---------------- default constructor No manual ---------------

class Car {
String model;
}

public class Main {
public static void main(String[] args) {
// We never wrote Car(), but this compiles perfectly.
// This is proof the default constructor is there.
Car myCar = new Car();
}
}


// --------------default constructor Manual defined --------------
class Car {
String model;

Car(String model) {
this.model = model;
}
}

public class Main {
public static void main(String[] args) {
Car myCar = new Car();
}
}
//because Java no longer generates the default constructor.
ERROR!
Main.java:15: error: constructor Car in class Car cannot be applied to given types;
Car myCar = new Car();
^
required: String
found: no arguments
reason: actual and formal argument lists differ in length
1 error

ar myCar = new Car("BMW"); // ✅ Correct


// ------------------ Parameterized Constructor ----------------
public class Car {
    String brand;
    int year;

    // Parameterized constructor
    public Car(String b, int y) {
        brand = b;
        year = y;
    }

    public static void main(String[] args) {
        Car honda = new Car("Honda", 2018);
        Car toyota = new Car("Toyota", 2022);
    }
}
    // Output:
// No output, but two Car objects are created with specified brand and year
          
// ------------------ No-Argument Constructor ----------------
public class Car {
    String brand;
    int year;

    // User-defined no-argument constructor
    public Car() {
        brand = "Unknown Brand";
        year = 2023;
        System.out.println("Car object created!");
    }
}
    // Output:
// Car object created!
          

// ------------------ Constructor Overloading ----------------
public class User {
    String username;
    String email;
    int age;

    // Constructor 1: Only username provided
    public User(String username) {
        this.username = username;
        this.email = "Not provided";
    }

    // Constructor 2: Username and email provided
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Constructor 3: All details provided
    public User(String username, String email, int age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
}
    // Output:  


// ------------------ Copy Constructor (this()) ----------------    
// Copy constructor is not built-in in Java, but you can implement it manually. It creates a new object as a copy of an existing object.
// 
import java.io.*;

class Geeks{
    
    // data members of the class
    String name;
    int id;

    // Parameterized Constructor
    Geeks(String name, int id)
    {
        this.name = name;
        this.id = id;
    }

    // Copy Constructor
    Geeks(Geeks obj2)
    {
        this.name = obj2.name;
        this.id = obj2.id;
    }
}

class GFG {
    public static void main(String[] args)
    {
        // This would invoke the parameterized constructor
        System.out.println("First Object");
        Geeks geek1 = new Geeks("Sweta", 68);
        System.out.println("GeekName: " + geek1.name
                           + " and GeekId: " + geek1.id);

        System.out.println();

        // This would invoke the copy constructor
        Geeks geek2 = new Geeks(geek1);
        System.out.println(
            "Copy Constructor used Second Object");
        System.out.println("GeekName: " + geek2.name
                           + " and GeekId: " + geek2.id);
    }
}
    // Output:
First Object
GeekName: Sweta and GeekId: 68

Copy Constructor used Second Object
GeekName: Sweta and GeekId: 68

// ------------------Copy Constructor (2) ----------------

class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Copy Constructor
    Employee(Employee e) {
        this.id = e.id;
        this.name = e.name;
    }

    void display() {
        System.out.println(id + " " + name);
    }
}

public class Main {
    public static void main(String[] args) {

        Employee e1 = new Employee(101, "Anand");

        // Copying e1 into e2
        Employee e2 = new Employee(e1);

        e2.display();
    }
}
    // Output:
101 Anand


// ------------------Copy Constructor (super()) ----------------
// 




// ------------------ Chained Constructor Using this() ----------------

class Employee {

    Employee() {
        this(101);
        System.out.println("Default Constructor");
    }

    Employee(int id) {
        this(id, "Anand");
        System.out.println("One Parameter Constructor");
    }

    Employee(int id, String name) {
        System.out.println(id + " " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        new Employee();
    }
}
// Output
// 101 Anand
// One Parameter Constructor
// Default Constructor

// Execution flow:
// Employee()
//     ↓
// Employee(int)
//     ↓
// Employee(int, String)


// ----------------- Chained Constructor Using super() ------------------
class Person {

    Person() {
        System.out.println("Person Constructor");
    }
}

class Employee extends Person {

    Employee() {
        super();
        System.out.println("Employee Constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        new Employee();
    }
}
// Output
// Person Constructor
// Employee Constructor

// ----------------- The Private Constructor (The Pattern Enforcer) ------------------

// Removed 'public' here so it can live happily inside Main.java
class ConfigManager {

    private static ConfigManager singleInstance = new ConfigManager();

    private String databaseUrl;
    private int maxConnections;

    private ConfigManager() {
        this.databaseUrl = "jdbc:mysql://localhost:3306/mydb";
        this.maxConnections = 10;
        System.out.println("--- ConfigManager Initialized! ---");
    }

    public static ConfigManager getInstance() {
        return singleInstance;
    }

    public String getDatabaseUrl() {
        return databaseUrl;
    }

    public void setDatabaseUrl(String databaseUrl) {
        this.databaseUrl = databaseUrl;
    }

    public int getMaxConnections() {
        return maxConnections;
    }

    public void setMaxConnections(int maxConnections) {
        this.maxConnections = maxConnections;
    }
}

// The main class that runs the program
public class Main {
    public static void main(String[] args) {
        
        ConfigManager config1 = ConfigManager.getInstance();
        ConfigManager config2 = ConfigManager.getInstance();

        System.out.println("Are config1 and config2 the same object? " + (config1 == config2));
        System.out.println("Default DB URL: " + config1.getDatabaseUrl());

        config1.setDatabaseUrl("jdbc:postgresql://live-server:5432/production_db");
        System.out.println("Updated DB URL (read from config2): " + config2.getDatabaseUrl());
    }
}

//output:
// --- ConfigManager Initialized! ---
// Are config1 and config2 the same object? true
// Default DB URL: jdbc:mysql://localhost:3306/mydb
// Updated DB URL (read from config2): jdbc:postgresql://live-server:5432/production_db
  

// ------------------- Ex Practical Example ----------------

class Emp {
    String id;
    String name;
    Emp(){
        System.out.println("Constructor");
    }
    
    Emp(String id, String name){
        this.id = id;
        this.name = name;
        System.out.println("Param Constructor");
    }
    
    public String getEmp(){
        return "Ram";
    }
    
    public String getFullEmp(){
        return this.id + this.name;
    }
}

public class Main {
    public static void main(String[] args){
        Emp ob1 = new Emp("9", "Vamshi");
        System.out.println(ob1.getEmp());
        System.out.println(ob1.getFullEmp());
    }
}

// Output:
// Param Constructor
// Ram
// 9Vamshi

//It didn't print "Constructor" because of how you created your object in the // \`main// \` method:
// \`Emp ob1 = new Emp("9", "Vamshi");// \`

// When you use the new keyword and pass arguments inside the parentheses \`("9", "Vamshi")\`, Java looks at those arguments and finds the exact constructor that matches them. Because you passed two Strings, Java executed the Parameterized Constructor and completely ignored the No-Argument Constructor.
// A constructor only runs if you specifically call it.
// How to make it print

// If you want to see "Constructor" print to the console, you have two options:
// This calls the No-Argument Constructor
    Emp ob2 = new Emp();

`
                }
            ]
        },
        {
            id: 1,
            title: "What is the usage to Consumer interface?",
            note: [
                {
                    text1: `Use Java's Consumer interface to store a lambda expression in a variable: 
          
          <b>Consumer<T></b> is a built-in Functional Interface located in the java.util.function package.
Here is the technical breakdown of what that means in practice:
<b>1. Why is it called a "Functional Interface"?</b>
A functional interface is an interface that has exactly one abstract method. This allows it to be used as the "target type" for <b>Lambda Expressions or Method References</b>.
In the case of Consumer, that single method is:
void accept(T t);

<b>The Internal Code (Simplified) - (Ex : 2)</b>
`,
                    code1: `import java.util.ArrayList; // For ArrayList
import java.util.function.Consumer; // For the Consumer interface

public class Main {
    public static void main(String[] args){
        
        ArrayList<Integer> numbers = new ArrayList<Integer>(); 
        numbers.add(5); 
        numbers.add(9); 
        numbers.add(8); 
        numbers.add(1); 
        
        // This is a Lambda expression being assigned to a Consumer
        Consumer<Integer> method = (n) -> { System.out.println(n); }; 
        numbers.forEach( method ); 
    }
}
// ----------------  The Internal Code (Simplified) Ex : 2  ----------------
// If you were to look at the Java source code, it looks roughly like this:

Java
@FunctionalInterface
public interface Consumer<T> {
    
    // The main method you must implement (usually via Lambda)
    void accept(T t);

    // A default method to chain consumers together
    default Consumer<T> andThen(Consumer<? super T> after) {
        // ... implementation ...
    }
}

// -------------  Functional Interface  --------------
interface FuncInterface 
{ 
    // An abstract function 
    void abstractFun(int x); 
   
    // A non-abstract (or default) function 
    default void normalFun() 
    { 
       System.out.println("Hello"); 
    } 
} 
   
class Test 
{ 
    public static void main(String args[]) 
    { 
        // lambda expression to implement above 
        // functional interface. This interface 
        // by default implements abstractFun() 
        FuncInterface fobj = (int x)->System.out.println(2*x); 
   
        // This calls above lambda expression and prints 10. 
        fobj.abstractFun(5); 
    } 
} 
`
                }
            ]
        },
        {
            id: 1,
            title: "What are the states in the lifecycle of a Thread?",
            note: [
                {
                    text1: `A thread can have one of the following states during its lifetime: 
<b>New</b>:  
In this state, a Thread class object is created using a new operator, but the thread is not alive. Thread doesn't start 
until we call the start () method. 
<b>Runnable</b>:  
In this state, the thread is ready to run after calling the start () method. However, the thread is not yet selected by 
the thread scheduler. 
<b>Running</b>:  
In this state, the thread scheduler picks the thread from the ready state, and the thread is running. 
<b>Waiting/Blocked</b>:  
In this state, a thread is not running but still alive, or it is waiting for the other thread to finish. 
<b>Dead/Terminated</b>:  
A thread is in terminated or dead state when the run () method exits. `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Static Method",
            note: [
                {
                    text1: `A static method belongs to the class rather than the object. 
There is no need to create the object to call the static methods. 
A static method can access and change the value of the static variable. 
          
          This error highlights one of the most important rules in Java: <b>A static method belongs to the class, not to an object</b>.
<b>The Problem Ex : 3</b>
When you mark a method as static, it exists even if you haven't created a new MyClass(). However, variables like <b>c</b> or <b>b</b> are <b>instance variables</b>—they only exist when an object is created.
static context: The "Class Level." It doesn't know which object's <b>c</b> or <b>b</b> you are talking about.
this keyword: Refers to the current object. Since a static method doesn't have a "current object," using this inside it is impossible.`,
                    code1: `// -------------------- Ex : 3 -------------
          // A static method belongs to the class, not to an object.
          class MyClass {
    public int a = 7;
    public int b = 2;
    MyClass(int a, int b){
        this.a = a;
        this.b = b;
    }
    
    public static int Calc(){
        return this.a + this.b;
    }
}
public class Main {
    public static void main(String[] args){
        System.out.println(MyClass.Calc());
    }
}

// Output:
// ERROR!
// Main.java:266: error: non-static variable this cannot be referenced from a static context
//         return this.a + this.b;
//                ^
// Main.java:266: error: non-static variable this cannot be referenced from a static context
//         return this.a + this.b;
//                         ^
// 2 errors
// === Code Exited With Errors ===
//========= Correct way ==========
class MyClass {
    static int x = 7;
    static int y = 2;

    public static int Calc() {
        return x + y; // 'this' is removed
    }
}
          `
                }
            ]
        },
        {
            id: 1,
            title: "Why is the main method static?",
            note: [
                {
                    text1: `Because the object is not required to call the static method.  
If we make the main method non-static, JVM will have to create its object first and then call main() method which 
will lead to the extra memory allocation. 
You can write the main method in your program without the static modifier, the program gets compiled without 
compilation errors.  
But, at the time of execution JVM does not consider this new method (without static) as the entry point of the 
program.  It searches for the main method which is public, static, with return type void, and a String array as an 
argument. 
If such a method is not found, a run time error is generated. 

<span style="color:red">Error: Main method is not static in class Sample, please define the main method as − public static void main(String[] 
args) </span>`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Can we declare the main () method as final in Java?",
            note: [
                {
                    text1: `Yes, we can declare the main () method as final in Java. The compiler does not throw any error. 
• If we declare any method as final by placing the final keyword then that method becomes the final method. 
• The main use of the final method in Java is they are not overridden. 
• We cannot override final methods in subclasses. 
• If we are using inheritance and we need some methods not to overridden in subclasses then we need to 
make it final so that those methods can't be overridden by subclasses. 
• We can access final methods in the subclass but we cannot override final methods.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Inheritance",
            note: [
                {
                    text1: `Inheritance is an Object-Oriented Programming (OOP) concept in Java where one class acquires the properties (variables) and behaviors (methods) of another class using the extends keyword.
          Inheritance means one class can extend to another class. So that the codes can be reused from one class to another 
class. The existing class is known as the Super class whereas the derived class is known as a sub class.
          It allows:
        -> Code reusability
        -> Method overriding
        -> Establishing an "is-a" relationship between classes

        🔹 Simple Definition (Interview Ready)
        Inheritance is the mechanism by which one class (child class) can inherit the properties and methods of another class (parent class) in Java.

        Types of Inheritance in Java:
        1️⃣ Single Inheritance:

        2️⃣ Multilevel Inheritance:

        3️⃣ Hierarchical Inheritance:

        4️⃣ Multiple Inheritance ❌ (Not supported with classes)
          Java does NOT support multiple inheritance with classes to avoid the Diamond Problem (ambiguity)
        
        
        
        In Java, every class <b>implicitly extends</b> the <b>java.lang.Object</b> class if it does not explicitly extend another class. This means that even if you don’t write  <b>extends Object </b>, your class automatically inherits all the methods of  <b>Object</b>, such as:<b> Ex: 5</b>

toString()
equals(Object obj)
hashCode()
getClass()
clone()
finalize()  `,
                    code1: `
          1️⃣ Single Inheritance:
class Vehicle {
    void start() {
        System.out.println("Vehicle starts");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();   // inherited method
        c.drive();   // own method
    }
}
// ---Output:-- 
// Vehicle starts
// Car drives


          2️⃣ Multilevel Inheritance:
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps");
    }
}

public class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.weep();
    }
}
// --- Output ----
// Animal eats
// Dog barks
// Puppy weeps



          3️⃣ Hierarchical Inheritance:
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

// Child class 1
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Child class 2
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();

        Cat c = new Cat();
        c.eat();
        c.meow();
    }
}
// ---- Output ---:
// Animal eats food
// Dog barks
// Animal eats food
// Cat meows

//--------------- Ex : 5 ---------------
class MyClass {
    // No explicit extends
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.toString());  // Inherited from Object
    }
}

`
                }
            ]
        },
        {
            id: 1,
            title: "Can you use this() and super() both in a constructor?",
            note: [
                {
                    text1: `No, because this() and super() must be the first statement in the class constructor. 
• this() is used to call default/parameterized constructor of same class. it should be first statement inside 
constructor. 
• super() is used to call default/parameterized constructor of base class. it should be first statement inside 
constructor. 
so this() and super() both are used for constructor call but both want to execute at first. That’s why it'll show 
compiler error like: 
error: call to this must be first statement in constructor this(); or 
error: call to this must be first statement in constructor super(); `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "super Keyword",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Polymorphism",
            note: [
                {
                    text1: `Polymorphism means many forms. 
A single object can refer to the super-class or sub-class depending on the reference type which is called 
polymorphism.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Method Overriding",
            note: [
                {
                    text1: `<b>Method Overriding</b> occurs when a <b>subclass (child class)</b> provides a <b>specific implementation</b> of a method that is already defined in its <b>superclass (parent class)</b>.  
It allows a <b>child class</b> to <b>change or extend</b> the behavior of the <b>parent class method</b>.


<b>Rules for Method Overriding</b>
-> <b>Same Method Signature</b> – The method in the <b>child class</b> must have the <b>same name, return type, and parameters</b> as in the <b>parent class</b>.
-> <b>Inheritance Required</b> – <b>Method overriding</b> happens only in <b>inheritance (child extends parent)</b>.
-> <b>Access Modifier</b> – The <b>access modifier</b> cannot be more restrictive than the <b>parent’s method</b>
-> Example: If <b>parent method</b> is <b>public</b>, <b>child</b> cannot make it <b>private</b> or <b>protected</b>.
-> <b>Return Type</b> – Must be the <b>same</b> or <b>covariant</b> (for objects, <b>child type</b> can override <b>parent type</b>).
-> <b>Cannot Override</b> <b>final</b>, <b>static</b>, or <b>private methods</b>.
-> <b>Annotation @Override</b> – Recommended to use to let the compiler check correctness.

<b>What @Override does</b>
The <b>@Override</b> annotation does <b>not actually make a method overridden</b>.  
The <b>overriding happens</b> simply because the <b>child class method</b> has the <b>same signature</b> as the <b>parent class method</b>.

The @Override annotation is optional, but it helps the compiler check that you are actually overriding a method.
`,
                    code1: `// ---------------- Ex ---------------
          // Parent class
class Calc {
    int add(int a, int b) {
        System.out.println("Calc add method");
        return a + b;
    }
}

// Child class
class AdvCalc extends Calc {
    // Overriding add method (no @Override annotation used)
    int add(int a, int b) {
        System.out.println("AdvCalc add method");
        return a + b + 10; // just an example of different behavior
    }
}

// Main class to test
public class DemoCalc {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println("Result from Calc: " + c.add(5, 10));  
        // Output: Calc add method
        // Result from Calc: 15

        AdvCalc ac = new AdvCalc();
        System.out.println("Result from AdvCalc: " + ac.add(5, 10));  
        // Output: AdvCalc add method
        // Result from AdvCalc: 25

        // Runtime polymorphism
        Calc c2 = new AdvCalc();
        System.out.println("Result from Calc reference pointing to AdvCalc: " + c2.add(5, 10));
        // Output: AdvCalc add method
        // Result: 25
    }
}



// ----------- Ex : 2 -----------
// Compile-time check – If you mistakenly change the method signature in the child class, the compiler will give an error.

class Parent {
    void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    @Override
    void show(int x) { // ❌ Compiler error: method does not override
        System.out.println("Child show");
    }
}

`
                }
            ]
        },
        {
            id: 1,
            title: "Method overloading",
            note: [
                {
                    text1: `Method overloading is when a class has multiple methods with the same name but different parameters (different number, type, or order of arguments).
          
          The compiler decides which version to call based on the arguments you pass — this is resolved at <b>compile time</b> (static polymorphism).
          
        <b>Key rules</b>:
-> Parameters must differ (type, count, or order)
-> Return type alone is <b>not enough</b> to overload — it won't compile
-> Access modifiers can vary, but don't affect overloading
`,
                    code1: `// -------------- Ex : 1 -------------
          class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }

    //Calling add(1, 2) → uses the first. add(1.5, 2.5) → uses the second. add(1, 2, 3) → uses the third.

    // ------------ Here are some real-world examples of method overloading: ------------
    // ------------ 1. Print/Log System (like System.out.println in Java) ----------
    class Logger {
    void log(String message) { 
        System.out.println("LOG: " + message); 
    }
    void log(String message, int errorCode) { 
        System.out.println("LOG [" + errorCode + "]: " + message); 
    }
    void log(Exception e) { 
        System.out.println("ERROR: " + e.getMessage()); 
    }
}

// Usage
logger.log("Server started");           // simple message
logger.log("Not found", 404);           // with error code
logger.log(new NullPointerException()); // with exception

// ------------- 2. Payment System ---------------
class PaymentService {
    void processPayment(double amount) { 
        // pay in default currency (USD)
    }
    void processPayment(double amount, String currency) { 
        // pay in specific currency
    }
    void processPayment(double amount, String currency, String couponCode) { 
        // pay with discount coupon
    }
}

// Usage
payment.processPayment(100.0);                   // simple payment
payment.processPayment(100.0, "EUR");            // in Euros
payment.processPayment(100.0, "USD", "SAVE20"); // with coupon


// -------------- 3. Search Feature (like Google/e-commerce search) -----------------
class SearchService {
    List<Product> search(String keyword) { 
        // search by name
    }
    List<Product> search(String keyword, String category) { 
        // search within a category
    }
    List<Product> search(String keyword, double minPrice, double maxPrice) { 
        // search with price range
    }
}

// Usage
search.search("shoes");                    // basic search
search.search("shoes", "Sports");          // in sports category
search.search("shoes", 500.0, 2000.0);    // within price range
}`
                }
            ]
        },
        {
            id: 1,
            title: "Packages",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Abstract",
            note: [
                {
                    text1: `<b>Abstraction</b> is the process of <b>hiding implementation details</b> and <b>showing only essential functionality</b> to the user.
          
          "Abstraction is the process of hiding implementation details and exposing only essential functionality. In Java, it is achieved using abstract classes and interfaces."
          <b>Abstraction</b> is an OOP principle that hides implementation details and shows only essential features to the user. Java achieves abstraction through abstract classes and interfaces.
          Abstraction reduces complexity, improves maintainability, and enforces design contracts
          
          <b> abstract class </b>
          An abstract class is a class that is declared using the <b>abstract</b> keyword and <b>cannot be instantiated (you cannot create objects of it).</b>
          
          
          <b>Simple Definition (Best for Interview)</b>
An abstract class in Java is a class that cannot be instantiated and is used to achieve abstraction. It can have both abstract methods and non-abstract methods.

It can contain:
-> <b>Abstract methods</b> (methods without body)
-> <b>Concrete methods</b> (methods with implementation)
`,
                    code1: ` // -----------------  Ex : 1 -----------
          abstract class Shape {
    String color;

    Shape(String color) {
        this.color = color;
    }

    abstract double area();

    void display() {
        System.out.println("Color: " + color + ", Area: " + area());
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape c = new Circle("Red", 5);
        Shape r = new Rectangle("Blue", 4, 6);
        c.display();  // Color: Red, Area: 78.53
        r.display();  // Color: Blue, Area: 24.0
    }
}`
                }
            ]
        },
        {
            id: 1,
            title: "Encapsulation",
            note: [
                {
                    text1: `Encapsulation is one of the four core principles of Object-Oriented Programming (OOP). It refers to <b>bundling data (fields) and the methods that operate on that data into a single unit (a class), while restricting direct access to some of the object's components.</b>
          
          Encapsulation in java is a mechanism of wrapping the data(variables) and code acting on the data(members) together as single unit
          Encapsulation is the process of <b>binding data (variables) and methods (functions) together into a single unit (class)</b> and <b>restricting direct access to the data.</b>
          
          <b>🔷 Key Idea</b>
Instead of accessing variables directly, we control access using:
-> private variables
-> public getter and setter methods
👉 This is also called <b>data hiding</b>

🔷 Real-Time Example
Think of a <b>bank account</b>:
You <b>cannot directly access</b> balance
You use methods like:
-> deposit()
-> withdraw()
-> getBalance()
👉 This is encapsulation

<b>🔷 Why Encapsulation is Important</b>
✅ Protects data from unauthorized access
✅ Improves security
✅ Provides control over data (validation)
✅ Makes code maintainable
✅ Supports abstraction

<b>🔷 Interview-Ready Answer</b>
Encapsulation in Java is the process of wrapping data and methods into a single unit, i.e., a class, and restricting direct access to the data using access modifiers. It is achieved using private variables and public getter and setter methods, which helps in data hiding and improves security and maintainability.`,
                    code1: `public class BankAccount {
    private double balance;
    private String owner;
    private int transactionCount;

    // Constructor
    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
        this.transactionCount = 0;
    }

    // Getters
    public double getBalance()       { return balance; }
    public String getOwner()         { return owner; }
    public int getTransactionCount() { return transactionCount; }

    // Deposit with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            transactionCount++;
            System.out.println("  Deposited: $" + amount);
        } else {
            System.out.println("  Deposit failed: Amount must be positive.");
        }
    }

    // Withdraw with validation
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("  Withdrawal failed: Amount must be positive.");
        } else if (amount > balance) {
            System.out.println("  Withdrawal failed: Insufficient funds. Balance is $" + balance);
        } else {
            balance -= amount;
            transactionCount++;
            System.out.println("  Withdrawn: $" + amount);
        }
    }

    // Account summary
    public void printSummary() {
        System.out.println("  Owner        : " + owner);
        System.out.println("  Balance      : $" + balance);
        System.out.println("  Transactions : " + transactionCount);
    }

    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("       BANK ACCOUNT SIMULATION          ");
        System.out.println("========================================");

        BankAccount account = new BankAccount("Alice", 1000.0);

        System.out.println("\n--- Initial Account Summary ---");
        account.printSummary();

        System.out.println("\n--- Depositing $500 ---");
        account.deposit(500.0);
        System.out.println("  Balance after deposit: $" + account.getBalance());

        System.out.println("\n--- Withdrawing $200 ---");
        account.withdraw(200.0);
        System.out.println("  Balance after withdrawal: $" + account.getBalance());

        System.out.println("\n--- Withdrawing $2000 (more than balance) ---");
        account.withdraw(2000.0);

        System.out.println("\n--- Depositing negative amount ---");
        account.deposit(-100.0);

        System.out.println("\n--- Withdrawing negative amount ---");
        account.withdraw(-50.0);

        System.out.println("\n--- Final Account Summary ---");
        account.printSummary();

        System.out.println("\n--- Encapsulation Demo ---");
        System.out.println("  account.balance       --> ERROR: balance has private access");
        System.out.println("  account.getBalance()  --> $" + account.getBalance());

        System.out.println("========================================");
    }
}
    

//////////////////////////// OUTPUT /////////////////////////////
// ========================================
//        BANK ACCOUNT SIMULATION          
// ========================================

// --- Initial Account Summary ---
//   Owner        : Alice
//   Balance      : $1000.0
//   Transactions : 0

// --- Depositing $500 ---
//   Deposited: $500.0
//   Balance after deposit: $1500.0

// --- Withdrawing $200 ---
//   Withdrawn: $200.0
//   Balance after withdrawal: $1300.0

// --- Withdrawing $2000 (more than balance) ---
//   Withdrawal failed: Insufficient funds. Balance is $1300.0

// --- Depositing negative amount ---
//   Deposit failed: Amount must be positive.

// --- Withdrawing negative amount ---
//   Withdrawal failed: Amount must be positive.

// --- Final Account Summary ---
//   Owner        : Alice
//   Balance      : $1300.0
//   Transactions : 2

// --- Encapsulation Demo ---
//   account.balance       --> ERROR: balance has private access
//   account.getBalance()  --> $1300.0
// ========================================

// === Code Execution Successful ===
`
                }
            ]
        },
        {
            id: 1,
            title: "(Access specifiers) - Access Modifiers",
            note: [
                {
                    text1: `Access Modifiers in Java define who <b>can access a class, method, variable, or constructor</b>. They are used for <b>encapsulation (data hiding)</b> and controlling visibility.
          
          Access specifiers (also called access modifiers) control the visibility and accessibility of class members (variables, methods, constructors) in object-oriented programming.
          
        <b>The Three Main Access Specifiers</b>
<b>1. Public</b>
Accessible from anywhere — same class, same package, subclasses, other packages
No restrictions
public int age;
public void display() { }

<b>2. Private</b>
Accessible only within the same class
Not visible to subclasses or other classes
private int salary;
private void calculate() { }

<b>3. Protected</b>
Accessible within the same class, same package, and subclasses (even in other packages)
Protected members are available outside the class.

<b>4. Default (no keyword — package-private)</b>
Accessible only within the same package
Used when no specifier is written
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Difference between String, String Builder, and String Buffer.",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Difference between Abstract class and Interface.",
            note: [
                {
                    definition: `An <b>abstract class</b> is a class declared with the abstract keyword that <b>cannot be instantiated and can hold both implemented methods and abstract (unimplemented) methods, plus state (fields) and constructors</b>. An <b>interface</b> is a <b>contract that declares what a class can do, without saying how</b>, and a class can implement many interfaces. Use an abstract class for an <b>"is-a" relationship with shared code and state</b>, and an interface for a <b>"can-do" capability</b>.`,

                    text1: `<b>Quick comparison</b>
1. <b>Keyword</b>: abstract class is extended (extends). Interface is implemented (implements).
2. <b>Multiple inheritance</b>: a class can extend <b>only one</b> abstract class, but can implement <b>many</b> interfaces. An interface can also extend multiple interfaces.
3. <b>Methods</b>: abstract class can have abstract and normal (concrete) methods. Interface methods are abstract by default, and since <b>Java 8</b> can also have <b>default</b> and <b>static</b> methods, and since <b>Java 9</b> <b>private</b> methods.
4. <b>Variables</b>: abstract class can have normal instance fields (any type, mutable). Interface variables are always <b>public static final</b> (constants).
5. <b>Constructor</b>: abstract class <b>can have constructors</b> (called via super). Interface <b>cannot have constructors</b>.
6. <b>Access modifiers</b>: abstract class members can be private, protected, public or default. Interface methods are <b>public</b> by default.
7. <b>State</b>: abstract class can hold <b>object state</b>. Interface cannot hold instance state.
8. <b>Relationship</b>: abstract class means <b>"is-a"</b> (Car is a Vehicle). Interface means <b>"can-do"</b> (Car can be Insurable).
9. <b>Instantiation</b>: neither can be instantiated directly with new. You create an object of a concrete subclass or implementing class (or an anonymous class / lambda for functional interfaces).

<b>When to use abstract class</b>
Use it when related classes share <b>common code, common fields, or need a constructor</b>. Example: PaymentMethod holds the common amount, a common validate() method, and forces each child (UPI, Card) to implement its own pay().

<b>When to use interface</b>
Use it when <b>unrelated classes</b> must follow the same contract, or you need <b>multiple inheritance of type</b>. Example: Refundable and Notifiable can be implemented by UPI, Card, and even a Wallet class that has no common parent.

<b>Key terms</b>
<b>Abstract method</b>: a method with no body, declared with the abstract keyword. The child class <b>must</b> override it (unless the child is also abstract).
<b>Default method</b>: an interface method with a body, added in Java 8 so interfaces can evolve <b>without breaking existing implementing classes</b>.
<b>Functional interface</b>: an interface with <b>exactly one abstract method</b>, usable with lambdas (Runnable, Comparator).
<b>Diamond problem</b>: ambiguity when two parents provide the same method. Java avoids it for classes (single inheritance). For interfaces with the same default method, the implementing class <b>must override</b> and can pick one using InterfaceName.super.method().

<b>Important points to remember</b>
<b>An abstract class does not need to have any abstract method</b>. It can be abstract just to stop instantiation.
<b>A class that has even one abstract method must be declared abstract.</b>
<b>Abstract methods cannot be private, final, or static</b>, because the child has to override them.
A class can <b>extend one class and implement many interfaces</b> together: class UPI extends PaymentMethod implements Refundable, Notifiable.
<b>Since Java 8 the gap has narrowed</b>, but interfaces still <b>cannot have instance fields or constructors</b>, so abstract class is still needed when you need state.
<b>Rule of thumb</b>: start with an interface for flexibility. Move to (or add) an abstract class only when you need shared state or shared code.`,

                    code1: `// --------------- Ex1 : Abstract class + Interface working together ---------------
// Zomato style payment methods

// INTERFACE: capability (can-do)
interface Refundable {
    int MAX_REFUND_DAYS = 7;            // public static final automatically

    void refund(double amount);         // public abstract automatically

    default void printRefundPolicy() {  // default method (Java 8+)
        System.out.println("Refund allowed within " + MAX_REFUND_DAYS + " days");
    }

    static boolean isValidAmount(double amount) {   // static method (Java 8+)
        return amount > 0;
    }
}

// INTERFACE: another capability
interface Notifiable {
    void sendNotification(String message);
}

// ABSTRACT CLASS: common state + common code + forced contract (is-a)
abstract class PaymentMethod {
    protected String orderId;           // instance field (state)
    protected double amount;

    PaymentMethod(String orderId, double amount) {   // constructor
        this.orderId = orderId;
        this.amount = amount;
    }

    // concrete method: shared by all children
    void validate() {
        if (amount <= 0) {
            throw new IllegalArgumentException("Invalid amount");
        }
        System.out.println("Order " + orderId + " validated for Rs." + amount);
    }

    // abstract method: every child MUST implement it
    abstract void pay();
}

// CHILD: extends ONE abstract class, implements MANY interfaces
class UpiPayment extends PaymentMethod implements Refundable, Notifiable {
    private String upiId;

    UpiPayment(String orderId, double amount, String upiId) {
        super(orderId, amount);          // abstract class constructor
        this.upiId = upiId;
    }

    @Override
    void pay() {
        validate();                      // inherited concrete method
        System.out.println("Paid Rs." + amount + " using UPI id " + upiId);
        sendNotification("Payment successful for " + orderId);
    }

    @Override
    public void refund(double refundAmount) {
        if (Refundable.isValidAmount(refundAmount)) {
            System.out.println("Refunded Rs." + refundAmount + " to " + upiId);
        }
    }

    @Override
    public void sendNotification(String message) {
        System.out.println("Notification: " + message);
    }
}

class CashOnDelivery extends PaymentMethod {   // not Refundable, only the abstract class
    CashOnDelivery(String orderId, double amount) {
        super(orderId, amount);
    }

    @Override
    void pay() {
        validate();
        System.out.println("Collect Rs." + amount + " in cash at the door");
    }
}

public class AbstractVsInterfaceDemo {
    public static void main(String[] args) {
        // PaymentMethod p = new PaymentMethod("ZOM1", 100);   // ERROR: abstract, cannot instantiate
        // Refundable r = new Refundable();                    // ERROR: interface, cannot instantiate

        UpiPayment upi = new UpiPayment("ZOM123", 450, "anand@upi");
        upi.pay();
        upi.refund(450);
        upi.printRefundPolicy();         // default method from the interface

        PaymentMethod cod = new CashOnDelivery("ZOM124", 300);   // parent reference
        cod.pay();                       // polymorphism

        Refundable refundable = upi;     // interface reference
        refundable.refund(100);
    }
}


// --------------- Ex2 : Abstract class with NO abstract method + default method conflict ---------------
// abstract class Utility {                  // abstract just to block new Utility()
//     static int add(int a, int b) { return a + b; }
// }
//
// interface A { default void show() { System.out.println("A"); } }
// interface B { default void show() { System.out.println("B"); } }
//
// class C implements A, B {
//     @Override
//     public void show() {                  // MUST override to resolve the conflict
//         A.super.show();                   // choose A's version (or B.super.show())
//     }
// }


// --------------- Ex3 : Functional interface with lambda ---------------
// @FunctionalInterface
// interface Discount {
//     double apply(double price);           // exactly one abstract method
// }
//
// public class LambdaDemo {
//     public static void main(String[] args) {
//         Discount tenPercent = price -> price * 0.90;
//         System.out.println(tenPercent.apply(450));   // 405.0
//     }
// }
//
// Expected output of Ex1:
// Order ZOM123 validated for Rs.450.0
// Paid Rs.450.0 using UPI id anand@upi
// Notification: Payment successful for ZOM123
// Refunded Rs.450.0 to anand@upi
// Refund allowed within 7 days
// Order ZOM124 validated for Rs.300.0
// Collect Rs.300.0 in cash at the door
// Refunded Rs.100.0 to anand@upi`
                },
                {
                    text1: `The differences between Abstract Class and Interface are as follows: 
<b>Abstract Class</b>: 
• Abstract classes have a default constructor and it is called whenever the concrete subclass is instantiated. 
• It contains Abstract methods as well as Non-Abstract methods. 
• The class which extends the Abstract class shouldn’t require the implementation of all the methods, only 
Abstract methods need to be implemented in the concrete sub-class. 
• Abstract class contains instance variables. 
<b>Interface</b>: 
• It doesn’t have any constructor and couldn’t be instantiated. 
• The abstract method alone should be declared. 
• Classes that implement the interface should provide the implementation for all the methods. 
• The interface contains only constants.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Exceptions",
            note: [
                {
                    text1: `An exception is an event that disrupts the normal flow of a program during execution. Java has a robust exception-handling mechanism built into the language.

Throwable
├── Error              (JVM errors — don't catch these)
│   &nbsp; &nbsp; &nbsp; ├── OutOfMemoryError
│   &nbsp; &nbsp; &nbsp; └── StackOverflowError
└── Exception
    &nbsp; &nbsp; &nbsp; ├── IOException         (Checked)
    &nbsp; &nbsp; &nbsp; ├── SQLException        (Checked)
    &nbsp; &nbsp; &nbsp; ├── FileNotFoundException (Checked)
    &nbsp; &nbsp; &nbsp; └── RuntimeException    (Unchecked)
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── NullPointerException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── ArithmeticException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── ArrayIndexOutOfBoundsException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── IllegalArgumentException


        <b>Checked vs Unchecked Exceptions</b>
<b>Checked Exceptions (Exception) </b>
These are exceptions that the <b>compiler forces you to handle</b>. If you call a method that can throw a checked exception and you don't handle it, your code won't even compile.
Think of it as: The compiler is saying "Hey, something could go wrong here — deal with it!"
----------
// This will NOT compile if you don't handle IOException
public void readFile() {
    FileReader fr = new FileReader("file.txt"); // ❌ Compile error!
}

// You MUST do one of these two things:

// Option 1 — Handle it with try-catch
public void readFile() {
    try {
        FileReader fr = new FileReader("file.txt"); // ✅
    } catch (IOException e) {
        System.out.println("File not found!");
    }
}

// Option 2 — Declare it with throws
public void readFile() throws IOException {
    FileReader fr = new FileReader("file.txt"); // ✅
}
-------------
Common examples: <b> IOException, SQLException, FileNotFoundException </b>


<b>Unchecked Exceptions (RuntimeException)</b>
These are exceptions the <b>compiler does NOT force you to handle</b>. They happen at runtime, usually due to bugs in your logic.
Think of it as: The compiler trusts you — but if your logic is wrong, the program crashes at runtime.
-------------
// This compiles fine ✅ — but CRASHES at runtime ❌
public void example() {
    String name = null;
    System.out.println(name.length()); // NullPointerException at runtime!
}

// Another example
int[] arr = new int[3];
arr[10] = 5; // ArrayIndexOutOfBoundsException — no compile error, crashes at runtime
-------------
Common examples: <b>NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, IllegalArgumentException</b>

**** Side-by-side Comparison  *****
// ---- CHECKED ----
public void saveToDatabase(String data) throws SQLException {
    // compiler FORCES you to acknowledge this can fail
    connection.execute(data);
}

// ---- UNCHECKED ----
public void printLength(String s) {
    // compiler says nothing — but crashes if s is null
    System.out.println(s.length());
}

<b>Simple Rule to Remember</b>
<b>Checked</b> = Problems <b>outside your control</b> (file missing, network down, DB unavailable) → compiler forces you to prepare for them.

<b>Unchecked</b> = Problems <b>inside your code</b> (null values, bad index, wrong logic) → your responsibility to write correct code.
                  `,
                    code1: `// Basic Syntax
// try-catch-finally
try {
    int result = 10 / 0; // throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Always runs — good for cleanup");
}

// -----------------  Multi-catch  ----------------
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("Caught: " + e.getMessage());
}

// ----------   try-with-resources (auto-closes resources)  ------------
try (FileReader fr = new FileReader("file.txt")) {
    // use fr — it closes automatically
} catch (IOException e) {
    e.printStackTrace();
}

// ------------- Throwing Exceptions ----------------
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative: " + age);
    }
    this.age = age;
}

// ------------- Declaring with \`throws\` --------------
public void readFile(String path) throws IOException {
    FileReader fr = new FileReader(path); // checked exception
}



// ---------------       Custom Exceptions      --------------
// Checked custom exception
public class InsufficientFundsException extends Exception {
    private double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Short by: " + amount);
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Usage
public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
`
                }
            ]
        },
        {
            id: 1,
            title: "Multithreading in Java",
            note: [
                {
                    text1: `<b>The Core Idea</b>
Java runs your program in a process. Inside that process, you can have many threads — each thread is an independent path of execution, but they all share the same memory.

Multithreading in Java is a feature that allows a program to execute multiple threads (small units of a process) simultaneously.
<b>🔹 What is a Thread?</b>
A thread is a lightweight sub-process.
It is the smallest unit of execution in a program.
Process (Your Java App)
&nbsp; &nbsp; &nbsp; ├── Thread 1 → handles UI
&nbsp; &nbsp; &nbsp; ├── Thread 2 → downloads file
&nbsp; &nbsp; &nbsp; └── Thread 3 → writes to DB

<b>🔹 Why we use Multithreading?</b>
Better performance
Faster execution
Efficient CPU usage
Non-blocking operations (like UI, API calls)
Parallel execution

<b>🔹 Ways to create a Thread in Java </b>
<b>1. By extending Thread class </b>
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // starts new thread
    }
}

<b>2. By implementing Runnable interface (preferred)</b>
Why prefer <b>Runnable</b>? Because Java doesn't allow multiple inheritance. If you <b>extend Thread</b>, you can't extend anything else. <b>Runnable</b> keeps your options open.

class MyTask implements Runnable {
    public void run() {
        System.out.println("Runnable thread running...");
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new MyTask());
        t1.start();
    }
}
    <b>
    NEW → RUNNABLE → RUNNING → (BLOCKED/WAITING) → TERMINATED
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; start()              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;sleep/wait/join
      </b>

<b>🔹 Thread Lifecycle</b>
<b>New</b> → Thread created
<b>Runnable</b> → Ready to run
<b>Running</b> → Executing
<b>Blocked/Waiting</b> → Paused
<b>Terminated</b> → Execution finished

<b>start()</b>	Starts a new thread
<b>run()</b>	Contains task logic
<b>sleep()</b>	Pauses thread
<b>join()</b>	Waits for thread to finish
<b>yield()</b>	Suggests thread pause


The <b>run()</b> method is a core method in both the <b>Runnable</b> interface and the <b>Thread</b> class in Java. It defines the task or logic that should be executed by a thread.

When a thread is started using the <b>start()</b> method, the JVM creates a new thread of execution and internally invokes the <b>run()</b> method to execute the task defined inside it.

<b>Key Clarification (Important Interview Point)</b>
-> You should not call <b>run()</b> directly if you want multithreading.
-> You must call <b>start()</b> to execute <b>run()</b> in a new thread.

Thread t = new Thread(() -> {
    System.out.println("Running in thread: " + Thread.currentThread().getName());
});

t.start(); // New thread created


-------------------------
🔥 
Synchronization in Java (very important)
🔥 
Deadlock, race condition
🔥 
Executor framework (advanced multithreading)
🔥 
Real interview questions with answers
`,
                    code1: `// ------------ Two Ways to Create a Thread -------------
// ----------- 1. Extend Thread -----------
class MyThread extends Thread {

    @Override
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        t1.start();   // Creates a new thread
    }
}

// Output:
// Thread is running...


// ------------  2. Implement Runnable ✅ (preferred) ------------
class MyTask implements Runnable {

    @Override
    public void run() {
        System.out.println("Task is executing...");
    }
}

public class Main {
    public static void main(String[] args) {

        Thread t1 = new Thread(new MyTask());

        t1.start();
    }
}
    //Output:
    // Task is executing...

    // ------------------ real-world example ----------------
    class OrderTask implements Runnable {

    private String taskName;

    public OrderTask(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        System.out.println(taskName + " started by: " + Thread.currentThread().getName());

        try {
            Thread.sleep(2000); // simulate processing time
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(taskName + " completed by: " + Thread.currentThread().getName());
    }
}


public class Main {
    public static void main(String[] args) {

        Runnable orderProcessing = new OrderTask("Order Processing");
        Runnable notification = new OrderTask("Sending Notification");

        Thread t1 = new Thread(orderProcessing);
        Thread t2 = new Thread(notification);

        t1.start();
        t2.start();
    }
}
    // Output (order may vary due to concurrency):
    // Order Processing started by: Thread-0
    // Sending Notification started by: Thread-1
    // Order Processing completed by: Thread-0
    // Sending Notification completed by: Thread-1
`
                }
            ]
        }, {
            id: 1,
            title: "race condition",
            note: [
                {

                    definition: `A <b>race condition</b> happens when <b>two or more threads access shared mutable data at the same time, and the final result depends on the unpredictable order (timing) in which the threads run</b>. At least one thread modifies the data, and nothing makes the access safe, so the outcome can be wrong, different on every run, and very hard to reproduce.`,

                    text1: `A <b>race condition</b> occurs when multiple threads access and modify the same shared resource simultaneously, and the final result depends on the order in which the threads execute.

  <b>Why it happens</b>
An operation like count++ looks like one step, but it is really <b>three steps: read, add 1, write back</b>. This is not <b>atomic</b>. If two threads interleave between these steps, one update overwrites the other and is <b>lost</b>.

<b>Example of lost update (count = 5)</b>
1. Thread A reads 5.
2. Thread B reads 5 (before A has written).
3. Thread A writes 6.
4. Thread B writes 6.
Expected 7, got 6. One increment vanished.

<b>Two common types of race condition</b>
1. <b>Read-modify-write</b>: count++, balance = balance + amount. Threads overwrite each other's result.
2. <b>Check-then-act</b>: if (stock > 0) { stock--; }. Another thread can change the value between the check and the act. Zomato example: only <b>1 biryani left</b>, two users click Order at the same moment, both see stock = 1, both pass the check, and stock becomes -1 (oversold).

<b>Key terms</b>
<b>Shared mutable state</b>: data that more than one thread can read and change. It is the root cause. If data is immutable or not shared, there is no race.
<b>Critical section</b>: the block of code that touches shared data and must run by only one thread at a time.
<b>Atomic operation</b>: an operation that completes fully or not at all, with no other thread seeing a half-done state.
<b>Visibility</b>: without proper synchronization, one thread may not even see the latest value written by another thread.

<b>How to fix it in Java</b>
1. <b>synchronized</b> (method or block): only one thread can enter the critical section at a time, and it also guarantees visibility.
2. <b>AtomicInteger / AtomicLong</b>: lock-free atomic operations like incrementAndGet(), good for simple counters.
3. <b>ReentrantLock</b> (java.util.concurrent.locks): explicit lock and unlock, with more control (tryLock, timeouts). Always unlock in a finally block.
4. <b>volatile</b>: gives visibility only. It does <b>NOT</b> make count++ atomic, so it does not fix read-modify-write races.
5. <b>Thread-safe collections</b> such as ConcurrentHashMap instead of HashMap.
6. <b>Avoid sharing</b>: use immutable objects, local variables, or ThreadLocal.

<b>Important points to remember</b>
<b>Race conditions do not throw exceptions.</b> The program runs and silently gives wrong results.
<b>Bugs are intermittent.</b> It may work 100 times and fail on the 101st, so tests can pass while production fails.
Keep the <b>synchronized block as small as possible</b>, since big locks reduce performance.
Do the <b>check and the act inside the same lock</b>, otherwise the check-then-act race remains.
Race condition is different from <b>deadlock</b> (threads waiting on each other forever) and from <b>data race</b> (unsynchronized access to the same variable, which is one specific cause of race conditions).`,

                    code1: `// ----- Imagine a bank account has ₹1,000. Two threads try to withdraw ₹700 simultaneously. ----
  class BankAccount {

    int balance = 1000;

    public void withdraw(int amount) {

        if (balance >= amount) {

            System.out.println(Thread.currentThread().getName()
                    + " is processing withdrawal");

            balance = balance - amount;

            System.out.println(Thread.currentThread().getName()
                    + " remaining balance: " + balance);
        }
    }
}

public class RaceConditionExample {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        Thread t1 = new Thread(() -> account.withdraw(700), "Thread-1");

        Thread t2 = new Thread(() -> account.withdraw(700), "Thread-2");

        t1.start();
        t2.start();
    }
}

// Expected Behaviour
// - Initial balance = ₹1,000.
// - Thread-1 withdraws ₹700.
// - Remaining balance = ₹300.
// - Thread-2 should not be allowed to withdraw ₹700 because only ₹300 is available.
//----------------------
// Step 1: Thread-1 checks the balance
// - Thread-1 reads the current balance (₹1,000).
// - It checks whether 1000 >= 700.
// - Condition is true, so it proceeds with the withdrawal.
// Step 2: Thread-2 checks the balance
// - Before Thread-1 updates the balance, Thread-2 reads the balance (₹1,000).
// - It checks whether 1000 >= 700.
// - Condition is true, so it also proceeds with the withdrawal.
// Step 3: Thread-1 calculates the remaining balance
// - Thread-1 calculates 1000 - 700.
// - Result = ₹300.
// - The calculated result is ready to be assigned to balance.
// Step 4: Thread-2 calculates the remaining balance
// - Thread-2 also calculates 1000 - 700.
// - Result = ₹300.
// - It also prepares to update the balance.
// Step 5: Thread-1 updates the balance
// - Thread-1 assigns ₹300 to the shared balance variable.
// - Current balance = ₹300.
// Step 6: Thread-2 updates the balance
// - Thread-2 also assigns ₹300 to the shared balance variable.
// - Current balance = ₹300.

// ----- What went wrong? ----
// - Both threads read the same initial balance (₹1,000).
// - Both threads independently checked the withdrawal condition.
// - Both threads calculated the remaining balance using the same old value.
// - Both threads updated the same shared variable.
// - As a result, the balance is ₹300 instead of the expected -₹400 if both withdrawals were allowed.



  // --------------- Ex1 : Lost update (read-modify-write race) ---------------
import java.util.concurrent.atomic.AtomicInteger;

public class RaceConditionDemo {

    static int unsafeCount = 0;                         // shared, NOT protected
    static int syncCount = 0;                           // protected by synchronized
    static AtomicInteger atomicCount = new AtomicInteger(0); // protected by atomics

    static void unsafeIncrement() {
        unsafeCount++;           // read -> add -> write (3 steps, not atomic)
    }

    static synchronized void syncIncrement() {
        syncCount++;             // only one thread at a time
    }

    // Runs the task 100000 times in each of 2 threads and waits for both
    static void runTwoThreads(Runnable task) throws InterruptedException {
        Runnable loop = () -> {
            for (int i = 0; i < 100000; i++) {
                task.run();
            }
        };
        Thread t1 = new Thread(loop, "Thread-A");
        Thread t2 = new Thread(loop, "Thread-B");
        t1.start();
        t2.start();
        t1.join();
        t2.join();
    }

    public static void main(String[] args) throws Exception {
        runTwoThreads(RaceConditionDemo::unsafeIncrement);
        runTwoThreads(RaceConditionDemo::syncIncrement);
        runTwoThreads(() -> atomicCount.incrementAndGet());

        System.out.println("Expected          : 200000");
        System.out.println("Unsafe (race)     : " + unsafeCount);   // usually LESS than 200000, changes every run
        System.out.println("synchronized      : " + syncCount);     // always 200000
        System.out.println("AtomicInteger     : " + atomicCount.get()); // always 200000
    }
}


// --------------- Ex2 : Check-then-act race (Zomato last biryani) ---------------
// class BiryaniStock {
//     private int stock = 1;
//
//     // UNSAFE: two threads can both pass the check before either decrements
//     public boolean orderUnsafe(String user) throws InterruptedException {
//         if (stock > 0) {                  // CHECK
//             Thread.sleep(10);             // simulates delay, makes the race easy to see
//             stock--;                      // ACT
//             System.out.println(user + " got the biryani, stock = " + stock);
//             return true;
//         }
//         return false;
//     }
//
//     // SAFE: check and act happen together inside one lock
//     public synchronized boolean orderSafe(String user) throws InterruptedException {
//         if (stock > 0) {
//             Thread.sleep(10);
//             stock--;
//             System.out.println(user + " got the biryani, stock = " + stock);
//             return true;
//         }
//         System.out.println(user + " : sold out");
//         return false;
//     }
//
//     public static void main(String[] args) throws Exception {
//         BiryaniStock shop = new BiryaniStock();
//         Thread u1 = new Thread(() -> { try { shop.orderUnsafe("User1"); } catch (Exception e) {} });
//         Thread u2 = new Thread(() -> { try { shop.orderUnsafe("User2"); } catch (Exception e) {} });
//         u1.start(); u2.start();
//         u1.join(); u2.join();
//         // Unsafe output: both users get it and stock becomes -1 (oversold)
//         // Replace orderUnsafe with orderSafe: one user gets it, the other sees "sold out"
//     }
// }


// --------------- Ex3 : ReentrantLock version of the fix ---------------
// import java.util.concurrent.locks.ReentrantLock;
//
// class SafeCounter {
//     private int count = 0;
//     private final ReentrantLock lock = new ReentrantLock();
//
//     public void increment() {
//         lock.lock();
//         try {
//             count++;
//         } finally {
//             lock.unlock();   // ALWAYS unlock in finally
//         }
//     }
//
//     public int get() {
//         lock.lock();
//         try {
//             return count;
//         } finally {
//             lock.unlock();
//         }
//     }
// }`
                }
            ]
        },
        {
            id: 1,
            title: "Wrapper classes",
            note: [
                {
                    text1: `In Java, Wrapper classes are a set of classes that allow you to treat primitive data types (<b>like int, char, boolean</b>) as objects.

Since Java is an object-oriented language, many features (such as Collections like <b>ArrayList, HashMap, or Generics</b>) only work with objects. Wrapper classes bridge the gap between the primitive world and the object world.

Primitive types are <b>not objects</b>, but many Java APIs work only with objects.

For example, Collections Framework (<b>ArrayList, HashMap</b>, etc.) stores objects, not primitives. If you want to store an int in an ArrayList, you need to wrap it in an Integer object.

❌ Invalid:
ArrayList&lt;int&gt; numbers = new ArrayList&lt;&gt;();

✅ Valid:
ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();
numbers.add(10);
numbers.add(20);

<b>Key Concepts: Autoboxing and Unboxing</b>
To make working with these classes convenient, Java provides two automatic mechanisms:
    <b>Autoboxing</b>: The automatic conversion of a primitive type into its corresponding wrapper class object.
        &nbsp; &nbsp; => Example: <b>Integer myInt = 10;</b> (The compiler converts 10 to <b>Integer.valueOf(10)</b>).

    <b>Unboxing</b>: The automatic conversion of a wrapper class object back into its corresponding primitive type.
        &nbsp; &nbsp; => Example: <b>int val = myInt;</b> (The compiler converts <b>myInt</b> to <b>myInt.intValue()</b>).

<b>Why Use Wrapper Classes?</b>
    -> <b>Collections Framework</b>: You cannot store primitive types in a List or Set.
       &nbsp; &nbsp; => Example: List&lt;int&gt; list = new ArrayList&lt;&gt;(); will cause a compile-time error. You must use List&lt;Integer&gt; list = new ArrayList&lt;&gt;();.
    -> <b>Utility Methods</b>: Wrapper classes provide helpful static methods to manipulate data.
       &nbsp; &nbsp; => Example: Converting a string to an integer: int num = Integer.parseInt("123");.
    -> <b>Nullability</b>: A primitive type (like int) must have a value (defaults to 0). A wrapper object (like Integer) can be null, which is useful when representing the absence of a value (e.g., in database results).
    -> <b>Synchronization</b>: In multithreading, you can only synchronize on objects, not primitives.



        boolean[] arr1 = new boolean[3];
        Boolean[] arr2 = new Boolean[3];
        System.out.println(arr1[0]);
        System.out.println(arr2[0]);

        <b>The Result</b>
    arr1[0] outputs: false
    arr2[0] outputs: null

<b>Why this happens</b>
<b>1. Primitive Arrays (boolean[])</b>
When you initialize an array of primitive types, Java automatically populates the array with the default value for that type.
    -> For <b>boolean</b>, the default is <b>false</b>.
    -> For numeric types (<b>int, double</b>, etc.), the default is <b>0</b> or <b>0.0</b>.
    -> For <b>char</b>, the default is the null character <b>'\u0000'</b>.
Because <b>arr1</b> holds actual primitive values, it is fully populated with <b>false</b> the moment it is created.

<b>2. Wrapper Class Arrays (Boolean[])</b>
When you initialize an array of objects (which is what a wrapper class array is), Java populates the array with the default reference value, which is null.
    -> The array arr2 does not contain Boolean objects yet; it is simply an array of three empty sots (references) waiting to hold Boolean objects.
    -> Since nothing has been assigned to index 0, it remains null.

Important Caution: The <b>NullPointerException</b>
Because <b>Boolean[]</b> (the wrapper array) defaults to <b>null</b>, you must be careful when unboxing. If you try to perform an operation that triggers unboxing on a null element, your code will crash:


❌ Error:
Boolean[] arr2 = new Boolean[3];
boolean b = arr2[0]; // This will throw a NullPointerException!

✅ Valid:
if (arr2[0] != null && arr2[0]) {
    // Safely perform logic
}

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Primitive Type</th>
      <th>Wrapper Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>byte</code></td>
      <td><code>Byte</code></td>
    </tr>
    <tr>
      <td><code>short</code></td>
      <td><code>Short</code></td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td><code>Integer</code></td>
    </tr>
    <tr>
      <td><code>long</code></td>
      <td><code>Long</code></td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td><code>Float</code></td>
    </tr>
    <tr>
      <td><code>double</code></td>
      <td><code>Double</code></td>
    </tr>
    <tr>
      <td><code>char</code></td>
      <td><code>Character</code></td>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td><code>Boolean</code></td>
    </tr>
  </tbody>
</table>`,
                    code1: `// -------------- Ex : 1 -------------
          class Main {
    public static void main(String[] args) {
        boolean[] arr1 = new boolean[3];
        Boolean[] arr2 = new Boolean[3];
        System.out.println(arr1[0]);
        System.out.println(arr2[0]);
    }
}`
                }
            ]
        },
        {
            id: 1,
            title: "shallow copy and deep copy",
            note: [
                {
                    text1: `A <b>shallow copy</b> creates a new object but copies only the references of nested objects, so both the original and copied objects share the same referenced data. In contrast, a <b>deep copy</b> creates completely independent copies of all nested objects, ensuring that changes made to the copied object do not affect the original. Shallow copies are faster and use less memory, while deep copies provide better isolation at the cost of additional memory and processing time.
                    
                    <b>1. Shallow Copy</b>
A shallow copy creates a new object and copies the primitive values of the original object to it. However, for fields that are references (objects), it only copies the memory addresses (references), not the actual objects they point to.
    <b>Result</b>: Both the original and the copied object share the same internal objects.
    <b>Implication</b>: If you modify an internal object (e.g., changing a value inside a List held by the object), that change will be reflected in both the original and the copy.

<b>2. Deep Copy</b>
A deep copy creates a new object and recursively copies all objects found in the fields. It creates entirely new instances of all reference-type objects.
    <b>Result</b>: The original and the copied object are completely independent.
    <b>Implication</b>: Modifying the internal state of the copied object will have no effect on the original object.

    <b>Implementing Shallow Copy</b>
The standard way to perform a shallow copy is by implementing the <b>Cloneable</b> interface and overriding the <b>clone()</b> method. By default, <b>super.clone()</b> performs a shallow copy.

<a href="https://github.com/anand-developer01/java-programs/blob/main/ShallowCopyVsDeepCopy.java" target="_blank">Shallow Copy Vs Deep Copy</a>
    `,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Webhook in Java, how does it work (Interview Level)",
            note: [
                {
                    definition: `<b>A Webhook is an HTTP callback.</b> It is a mechanism where <b>one system (provider) automatically sends an HTTP POST request to a URL of another system (consumer)</b> the moment an <b>event</b> happens, so the consumer does not need to keep asking "is there any update?". It is also called <b>"Reverse API"</b> or <b>"Push-based API"</b> : instead of you calling the API, the API calls you. In Java, the consumer side is usually a <b>REST endpoint (Spring Boot @RestController)</b>, and the sender side uses <b>HttpClient / RestTemplate / WebClient</b>.`,
                    text1: `<b>Interview Definition :</b><br>
<b>Webhook = Event + HTTP POST + Callback URL.</b> You register a <b>public callback URL</b> with the provider (Razorpay, Stripe, GitHub, PayPal, Twilio, Slack). When an event occurs (payment success, code pushed, SMS delivered), the provider sends a <b>JSON payload</b> to your URL. Your Java application receives it, <b>verifies it</b>, <b>processes it</b> and replies with <b>HTTP 2xx</b> quickly.<br><br>

<b>Polling vs Webhook (Most asked) :</b><br>
<b>Polling (Pull) :</b> client calls the server every few seconds asking for status. Wastes requests and has delay.<br>
<b>Webhook (Push) :</b> server calls the client only when something happens. <b>Real time, fewer calls, less load.</b><br>
<b>Webhook vs API :</b> in a normal API <b>you are the client</b>, in a webhook <b>you are the server</b> and the provider is the client.<br>
<b>Webhook vs WebSocket :</b> webhook is a <b>one time HTTP request per event</b> (server to server, no open connection). WebSocket is a <b>persistent two way connection</b> (usually browser to server).<br><br>

<b>How does it work? (Step by step flow)</b><br>
1. <b>Register :</b> you give your callback URL (for example https://myapp.com/webhooks/payment) and a <b>secret key</b> to the provider dashboard.<br>
2. <b>Event happens :</b> customer completes the payment on the provider side.<br>
3. <b>Provider sends HTTP POST :</b> JSON body + headers (event id, <b>signature</b>) to your URL.<br>
4. <b>Your endpoint receives :</b> reads the <b>raw body</b> and the signature header.<br>
5. <b>Verify signature :</b> calculate <b>HMAC-SHA256</b> of the raw body using the shared secret and compare it with the header. Reject with <b>401</b> if it does not match.<br>
6. <b>Check idempotency :</b> if this <b>event id</b> was already processed, ignore it (providers can send the same event more than once).<br>
7. <b>Respond fast with 200 OK</b> and process the heavy work <b>asynchronously</b> (update order, send email, generate invoice).<br>
8. <b>Retry :</b> if you return non-2xx or time out, the provider <b>retries</b> with exponential backoff (for example after 1 min, 5 min, 30 min ...), so your logic must be safe for duplicates.<br><br>

<b>Webhook Receiver in Java (Spring Boot) - Key Points :</b><br>
1. Create a <b>@PostMapping</b> endpoint that is <b>publicly reachable</b> (use <b>ngrok</b> for local testing).<br>
2. Read the body as <b>raw String (@RequestBody String)</b> for signature verification. If you let Spring convert it to an object first, the raw bytes change and the signature will not match.<br>
3. <b>Always verify the signature</b> (HMAC), otherwise anybody can call your URL and fake a "payment success".<br>
4. Use <b>MessageDigest.isEqual()</b> for comparison (constant time) to avoid timing attacks.<br>
5. Make the handler <b>idempotent</b> (store processed event ids in DB with a unique constraint).<br>
6. <b>Return 200 quickly</b> (within a few seconds) and push the heavy work to <b>@Async / queue (Kafka, RabbitMQ)</b>.<br>
7. <b>Use HTTPS</b> only, and keep the secret in <b>environment variables / vault</b>, never in code.<br>
8. <b>Log the event id and payload</b> for debugging and replay.<br><br>

<b>Webhook Sender in Java - Key Points (when your system is the provider) :</b><br>
1. Store subscriber URLs + secret in DB.<br>
2. When the event happens, build JSON, <b>sign it</b> (HMAC) and send POST with <b>java.net.http.HttpClient</b> (Java 11+) or <b>WebClient</b>.<br>
3. Set <b>connect and read timeouts</b>, and <b>retry with backoff</b> on failure.<br>
4. After max retries move the event to a <b>dead letter / failed table</b> for manual replay.<br><br>

<b>Real-time examples :</b><br>
1. <b>Payment gateway (Razorpay / Stripe / PayPal) :</b> user pays, the browser may close before returning to your site, but the gateway still sends <b>payment.success</b> webhook, so your order is marked PAID reliably.<br>
2. <b>GitHub :</b> on every push, GitHub calls your Jenkins / CI server URL, which starts the build automatically (CI/CD trigger).<br>
3. <b>Twilio / SMS :</b> delivery status (delivered / failed) is posted to your URL.<br>
4. <b>Slack / Teams alerts :</b> your Java app posts a JSON message to an incoming webhook URL to send alerts to a channel (here you are the sender).<br>
5. <b>E-commerce shipping :</b> courier service sends "out for delivery" and "delivered" events to update the order status page.<br><br>

<b>Common Problems and Solutions :</b><br>
<b>Duplicate events</b> : use event id + unique DB constraint (idempotency).<br>
<b>Out of order events</b> : check the event timestamp / status before updating.<br>
<b>Slow endpoint causing retries</b> : respond 200 first, process async.<br>
<b>Fake calls</b> : verify HMAC signature (and optionally allow only provider IPs).<br>
<b>Lost events when your server is down</b> : provider retries, and you can also use the provider's "resend event" option or a reconciliation job.<br><br>

<b>Common Interview Questions :</b><br>
Q1. What is a webhook? <b>An HTTP callback where the provider POSTs event data to your URL when something happens.</b><br>
Q2. Webhook vs polling? <b>Webhook is push based and real time, polling is pull based and wasteful.</b><br>
Q3. How do you secure a webhook? <b>HTTPS + HMAC signature verification + secret in vault + optional IP allow list + replay protection with timestamp.</b><br>
Q4. How do you handle duplicate webhook calls? <b>Idempotency using the unique event id.</b><br>
Q5. What status code should you return? <b>200 / 2xx on success. Non-2xx or timeout triggers a retry.</b><br>
Q6. Why return 200 quickly and process later? <b>To avoid provider timeouts and retries, so use @Async or a message queue.</b><br>
Q7. How to test locally? <b>ngrok / localtunnel to expose localhost, or Postman / curl to send a sample payload.</b><br>
Q8. Webhook vs WebSocket? <b>Webhook is a one time server to server HTTP call, WebSocket is a persistent two way connection.</b><br>
Q9. Why read the raw body? <b>The signature is calculated on the exact raw bytes, any re-serialization changes it.</b><br>
Q10. Which Java classes are used? <b>Spring: @RestController, @PostMapping, @RequestHeader, @Async. Sender: HttpClient, WebClient, RestTemplate. Security: Mac (HmacSHA256), MessageDigest.isEqual.</b>`,
                    code1: `// --------------- Ex1 : Polling vs Webhook (concept) ---------------
// POLLING (bad) : client keeps asking
// while (true) {
//     status = callApi("/payments/1001/status");   // every 5 seconds
//     if (status.equals("PAID")) break;
//     Thread.sleep(5000);
// }
//
// WEBHOOK (good) : provider calls us once when payment is done
// POST https://myapp.com/webhooks/payment
// Header : X-Signature: 9f2c...
// Body   : {"eventId":"evt_101","type":"payment.success","orderId":"ORD-1001","amount":499}


// --------------- Ex2 : Webhook receiver (Spring Boot controller) ---------------
@RestController
@RequestMapping("/webhooks")
public class PaymentWebhookController {

    private final WebhookService webhookService;

    public PaymentWebhookController(WebhookService webhookService) {
        this.webhookService = webhookService;
    }

    @PostMapping("/payment")
    @ResponseStatus(HttpStatus.OK)
    public void receive(@RequestBody String rawPayload,
                        @RequestHeader("X-Signature") String signature) throws Exception {

        // 1. verify signature using RAW body
        if (!SignatureUtil.isValid(rawPayload, signature, System.getenv("WEBHOOK_SECRET"))) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid signature");
        }

        // 2. hand over to async processing and return 200 immediately
        webhookService.process(rawPayload);
    }
}


// --------------- Ex3 : HMAC SHA256 signature verification ---------------
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HexFormat;

public class SignatureUtil {

    public static boolean isValid(String payload, String receivedSignature, String secret) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));

        byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
        String expected = HexFormat.of().formatHex(hash);          // Java 17+

        // constant time comparison (prevents timing attack)
        return MessageDigest.isEqual(
                expected.getBytes(StandardCharsets.UTF_8),
                receivedSignature.getBytes(StandardCharsets.UTF_8));
    }
}


// --------------- Ex4 : Idempotent + asynchronous processing ---------------
@Service
public class WebhookService {

    private final ProcessedEventRepository eventRepo;
    private final OrderService orderService;

    public WebhookService(ProcessedEventRepository eventRepo, OrderService orderService) {
        this.eventRepo = eventRepo;
        this.orderService = orderService;
    }

    @Async                                  // needs @EnableAsync on the main class
    public void process(String rawPayload) {
        // parse JSON (Jackson ObjectMapper) -> eventId, type, orderId
        String eventId = "evt_101";
        String type = "payment.success";
        String orderId = "ORD-1001";

        // idempotency : provider may send the same event again (retry)
        if (eventRepo.existsById(eventId)) {
            return;                         // already processed, ignore
        }

        if (type.equals("payment.success")) {
            orderService.markAsPaid(orderId);       // update DB
            // send email, generate invoice, reduce stock ...
        }

        eventRepo.save(new ProcessedEvent(eventId));   // unique key on eventId
    }
}


// --------------- Ex5 : Webhook sender using java.net.http.HttpClient (Java 11+) ---------------
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class WebhookSender {

    private static final HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .build();

    public static int send(String url, String json, String secret) throws Exception {
        String signature = SignatureUtil.sign(json, secret);   // same HMAC logic, returns hex

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .timeout(Duration.ofSeconds(10))
                .header("Content-Type", "application/json")
                .header("X-Signature", signature)
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();

        var response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.statusCode();             // 2xx = delivered
    }

    public static void main(String[] args) throws Exception {
        String json = """
                {"eventId":"evt_101","type":"payment.success","orderId":"ORD-1001","amount":499}
                """;
        int status = send("https://myapp.com/webhooks/payment", json, "my_secret");
        System.out.println("Delivery status : " + status);
    }
}


// --------------- Ex6 : Retry with exponential backoff (sender side) ---------------
public static boolean sendWithRetry(String url, String json, String secret) throws Exception {
    int maxAttempts = 5;
    long delayMs = 1000;                          // 1 sec

    for (int attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            int status = WebhookSender.send(url, json, secret);
            if (status >= 200 && status < 300) {
                return true;                      // delivered
            }
        } catch (Exception e) {
            System.out.println("Attempt " + attempt + " failed : " + e.getMessage());
        }
        Thread.sleep(delayMs);
        delayMs = delayMs * 2;                    // 1s, 2s, 4s, 8s, 16s
    }
    return false;                                 // save to failed table / dead letter for manual replay
}


// --------------- Ex7 : Sending alert to Slack incoming webhook (real time) ---------------
String slackUrl = System.getenv("SLACK_WEBHOOK_URL");
String message = """
        {"text":"Order ORD-1001 payment failed. Please check."}
        """;

HttpRequest slackRequest = HttpRequest.newBuilder()
        .uri(URI.create(slackUrl))
        .header("Content-Type", "application/json")
        .POST(HttpRequest.BodyPublishers.ofString(message))
        .build();

HttpClient.newHttpClient().send(slackRequest, HttpResponse.BodyHandlers.ofString());
// Slack posts the message into the channel. Here OUR app is the webhook sender.


// --------------- Ex8 : Local testing with curl (ngrok exposes localhost) ---------------
// ngrok http 8080   -> gives https://abc123.ngrok.io (use this as callback URL in provider dashboard)
//
// curl -X POST http://localhost:8080/webhooks/payment
//      -H "Content-Type: application/json"
//      -H "X-Signature: <calculated-hmac>"
//      -d '{"eventId":"evt_101","type":"payment.success","orderId":"ORD-1001","amount":499}'
//
// Expected : 200 OK for valid signature, 401 for wrong signature`
                },
                {
                    definition: `A webhook is an HTTP callback: instead of your server repeatedly asking a service "has it happened yet?" (polling), the service calls a URL on your server the moment the event happens. In a Zomato UPI payment, the payment gateway (Razorpay, PayU, etc.) is the sender and Zomato's backend is the receiver.`,

                    text1: `Scenario: you order biryani for Rs.450 on Zomato and pay with UPI.
1. Zomato creates an order (ZOM123) with status PAYMENT_PENDING and asks the gateway to start a Rs.450 payment.
2. The gateway sends a UPI request to your app (GPay/PhonePe) and you approve it with your UPI PIN.
3. Your bank debits the money and NPCI tells the gateway. This can take a few seconds, or longer if the bank is slow. Meanwhile, Zomato's server doesn't know if you paid, failed, or closed the app.
4. The gateway sends an HTTP POST (the webhook) to Zomato's registered URL, e.g. /webhooks/payment, with event "payment.captured".
5. Zomato verifies the signature, marks the order PAID, notifies the restaurant, assigns a rider and pushes "Order confirmed!" to your app.
Why webhook over polling: no wasted requests, near real-time, and it works even if you closed the app after paying.

Rules for a real implementation: 
(a) verify the HMAC signature so fake "success" calls are rejected, 
(b) be idempotent because gateways retry and the same event can arrive 2-3 times, 
(c) return 200 quickly and do heavy work on a background thread pool or queue, 
(d) don't trust event order, so check the current order state before changing it, 
(e) run a reconciliation job for orders stuck in PAYMENT_PENDING because webhooks can be lost. The webhook is the source of truth for money, the app redirect is only for UX.
Java notes: ConcurrentHashMap.newKeySet() gives a thread-safe set for idempotency (add() returns false for duplicates), ExecutorService runs the heavy jobs off the request thread, and MessageDigest.isEqual compares signatures in constant time.`,

                    code1: `// --------------- Ex1 : ---------------
// Zomato backend receiving a UPI payment webhook (Java 17+, no external libraries)

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HexFormat;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ZomatoWebhookServer {

    private static final String WEBHOOK_SECRET = "shared_secret_from_gateway";
    private static final char QUOTE = '"';

    static class Order {
        String status;
        long amount; // in paise
        Order(String status, long amount) {
            this.status = status;
            this.amount = amount;
        }
    }

    // In-memory stores (use a DB / Redis in real life)
    private static final Map<String, Order> orders = new ConcurrentHashMap<>();
    private static final Set<String> processedEvents = ConcurrentHashMap.newKeySet();

    // Background workers: heavy work happens here, not in the request thread
    private static final ExecutorService jobPool = Executors.newFixedThreadPool(3);

    public static void main(String[] args) throws Exception {
        orders.put("ZOM123", new Order("PAYMENT_PENDING", 45000));

        HttpServer server = HttpServer.create(new InetSocketAddress(3000), 0);
        server.createContext("/webhooks/payment", ZomatoWebhookServer::handleWebhook);
        server.start();
        System.out.println("Zomato server on 3000");
    }

    private static void handleWebhook(HttpExchange exchange) {
        try {
            if (!"POST".equals(exchange.getRequestMethod())) {
                reply(exchange, 405);
                return;
            }

            String rawBody = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
            String signature = exchange.getRequestHeaders().getFirst("x-signature");

            // 1. Verify signature (reject fake calls)
            String expected = hmacSha256Hex(rawBody, WEBHOOK_SECRET);
            boolean valid = signature != null && MessageDigest.isEqual(
                    expected.getBytes(StandardCharsets.UTF_8),
                    signature.getBytes(StandardCharsets.UTF_8));
            if (!valid) {
                reply(exchange, 400);
                return;
            }

            String eventId = field(rawBody, "event_id");
            String eventType = field(rawBody, "event");
            String orderId = field(rawBody, "order_id");
            long amount = Long.parseLong(field(rawBody, "amount"));

            // 2. Idempotency: add() returns false if we already saw this event
            if (!processedEvents.add(eventId)) {
                reply(exchange, 200);
                return;
            }

            // 3. Respond fast, do the rest after
            reply(exchange, 200);

            // 4. Check current state before applying the change
            Order order = orders.get(orderId);
            if (order == null) return;

            synchronized (order) {
                if (!"PAYMENT_PENDING".equals(order.status)) return;

                if ("payment.captured".equals(eventType) && amount == order.amount) {
                    order.status = "PAID";
                    queueJob("notify-restaurant", orderId);
                    queueJob("assign-rider", orderId);
                    queueJob("push-notification", orderId);
                    System.out.println("Order " + orderId + " marked PAID");
                } else if ("payment.failed".equals(eventType)) {
                    order.status = "PAYMENT_FAILED";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            reply(exchange, 500);
        }
    }

    private static void queueJob(String name, String orderId) {
        // Replace with a real queue (Kafka, SQS, RabbitMQ, etc.)
        jobPool.submit(() ->
            System.out.println("Job " + name + " done for " + orderId
                    + " on " + Thread.currentThread().getName()));
    }

    private static String hmacSha256Hex(String data, String secret) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
        return HexFormat.of().formatHex(mac.doFinal(data.getBytes(StandardCharsets.UTF_8)));
    }

    private static void reply(HttpExchange exchange, int code) {
        try {
            exchange.sendResponseHeaders(code, -1);
        } catch (Exception ignored) {
        } finally {
            exchange.close();
        }
    }

    // Tiny JSON field reader for this demo (use Jackson/Gson in real projects)
    private static String field(String json, String key) {
        String marker = QUOTE + key + QUOTE;
        int k = json.indexOf(marker);
        if (k < 0) return null;
        int start = json.indexOf(':', k + marker.length()) + 1;
        while (json.charAt(start) == ' ') start++;
        int end;
        if (json.charAt(start) == QUOTE) {
            start++;
            end = json.indexOf(QUOTE, start);
        } else {
            end = start;
            while (end < json.length() && ",} ".indexOf(json.charAt(end)) < 0) end++;
        }
        return json.substring(start, end);
    }
}


// ---- Fake gateway (separate file: FakeGateway.java) to simulate the webhook ----
// import javax.crypto.Mac;
// import javax.crypto.spec.SecretKeySpec;
// import java.net.URI;
// import java.net.http.HttpClient;
// import java.net.http.HttpRequest;
// import java.net.http.HttpResponse;
// import java.nio.charset.StandardCharsets;
// import java.util.HexFormat;
//
// public class FakeGateway {
//     public static void main(String[] args) throws Exception {
//         String q = String.valueOf('"');
//         String payload = "{" + q + "event_id" + q + ":" + q + "evt_001" + q + ","
//                 + q + "event" + q + ":" + q + "payment.captured" + q + ","
//                 + q + "payment_id" + q + ":" + q + "pay_9xK2" + q + ","
//                 + q + "order_id" + q + ":" + q + "ZOM123" + q + ","
//                 + q + "amount" + q + ":45000}";
//
//         Mac mac = Mac.getInstance("HmacSHA256");
//         mac.init(new SecretKeySpec("shared_secret_from_gateway".getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
//         String signature = HexFormat.of().formatHex(mac.doFinal(payload.getBytes(StandardCharsets.UTF_8)));
//
//         HttpRequest request = HttpRequest.newBuilder()
//                 .uri(URI.create("http://localhost:3000/webhooks/payment"))
//                 .header("Content-Type", "application/json")
//                 .header("x-signature", signature)
//                 .POST(HttpRequest.BodyPublishers.ofString(payload))
//                 .build();
//
//         HttpClient client = HttpClient.newHttpClient();
//         for (int i = 1; i <= 2; i++) { // send twice to see idempotency
//             HttpResponse<String> res = client.send(request, HttpResponse.BodyHandlers.ofString());
//             System.out.println("Attempt " + i + " -> HTTP " + res.statusCode());
//         }
//     }
// }
// Expected server output: "Order ZOM123 marked PAID" once, then 3 job lines. The second send is ignored.`
                }
            ]
        },
    ]
}

export default javaData;
