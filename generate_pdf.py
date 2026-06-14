from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER
from reportlab.lib.units import inch

def add_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica-Oblique', 10)
    canvas.drawCentredString(letter[0] / 2.0, 0.5 * inch, "Created by Eng. Ahmed Elfaky")
    canvas.restoreState()

def create_exam_pdf():
    doc = SimpleDocTemplate("d:/Revision 2S/Java_Final_Exam_Revision.pdf", pagesize=letter,
                            rightMargin=50, leftMargin=50,
                            topMargin=50, bottomMargin=50)

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='Justify', alignment=TA_JUSTIFY))
    styles.add(ParagraphStyle(name='CenterTitle', alignment=TA_CENTER, fontSize=18, spaceAfter=20, fontName="Helvetica-Bold"))
    styles.add(ParagraphStyle(name='SectionTitle', fontSize=14, spaceAfter=10, spaceBefore=20, fontName="Helvetica-Bold", textColor="black"))
    styles.add(ParagraphStyle(name='QuestionText', fontSize=11, spaceAfter=6, spaceBefore=4))
    styles.add(ParagraphStyle(name='CodeBlock', fontName="Courier", fontSize=10, leftIndent=20, rightIndent=20, spaceBefore=8, spaceAfter=8, backColor="#f4f4f4"))
    
    Story = []

    # Title
    Story.append(Paragraph("Java Programming - Comprehensive Revision", styles['CenterTitle']))
    Story.append(Spacer(1, 10))
    Story.append(Paragraph("This comprehensive revision sheet covers all course topics including Data Types, Operators, the 'this' Keyword, ArrayLists, and Object-Oriented Programming (OOP).", styles['Justify']))
    Story.append(Spacer(1, 20))

    # --- Part 1: True / False ---
    Story.append(Paragraph("Part 1: True or False", styles['SectionTitle']))
    tf_questions = [
        "1. Widening casting is done automatically when passing a smaller size type to a larger size type. (   )",
        "2. A boolean variable in Java can be assigned the value 1 or 0. (   )",
        "3. The 'this' keyword can be used to invoke a class constructor from another constructor within the same class. (   )",
        "4. An ArrayList has a fixed size and cannot grow or shrink dynamically. (   )",
        "5. To store primitive integers in an ArrayList, you must use ArrayList<int>. (   )",
        "6. In Encapsulation, class variables are typically declared as private and accessed via public getter and setter methods. (   )",
        "7. A subclass inherits the properties and methods of its superclass using the 'implements' keyword. (   )",
        "8. Run-time polymorphism is achieved through Method Overriding. (   )",
        "9. An abstract class can have both abstract methods and concrete (implemented) methods. (   )",
        "10. You can create an object (instantiate) directly from an abstract class or an interface. (   )",
        "11. A class can implement multiple interfaces at the same time. (   )",
        "12. Method overloading occurs when two or more methods in the same class have the same name but different parameters. (   )",
        "13. In Java, array indexes begin at 1. (   )",
        "14. The wrapper class for the primitive data type 'char' is 'Character'. (   )",
        "15. A switch statement must always have a 'default' case to compile successfully. (   )"
    ]
    for q in tf_questions:
        Story.append(Paragraph(q, styles['QuestionText']))

    # --- Part 2: Multiple Choice ---
    Story.append(Paragraph("Part 2: Multiple Choice", styles['SectionTitle']))
    mcq_questions = [
        "1. Which of the following is NOT a primitive data type in Java?",
        "   a) byte   b) boolean   c) String   d) short",
        "2. What happens during narrowing casting in Java?",
        "   a) It happens automatically.   b) It must be done manually by placing the type in parentheses.   c) It is not allowed.   d) It converts a String to an int.",
        "3. Which method is used to retrieve an element from a specific index in an ArrayList?",
        "   a) retrieve()   b) get()   c) set()   d) fetch()",
        "4. How do you find out the number of elements in an ArrayList named 'list'?",
        "   a) list.length   b) list.size()   c) list.length()   d) list.getSize()",
        "5. Which keyword is used to refer to the current object in a method or constructor?",
        "   a) super   b) static   c) this   d) final",
        "6. What is the process of hiding internal details and showing only the essential functionality?",
        "   a) Inheritance   b) Polymorphism   c) Encapsulation   d) Abstraction",
        "7. Which keyword is used by a class to use an interface?",
        "   a) extends   b) implements   c) inherits   d) imports",
        "8. Method Overriding is an example of:",
        "   a) Compile-time Polymorphism   b) Run-time Polymorphism   c) Encapsulation   d) None of the above",
        "9. If you want to sort an ArrayList alphabetically or numerically, which class provides the sort() method?",
        "   a) Arrays   b) ArrayList   c) Collections   d) Sorter",
        "10. Which statement is true about an Interface in Java?",
        "   a) It can have instance variables.   b) Its methods are abstract by default.   c) It can have constructors.   d) A class can only implement one interface."
    ]
    for line in mcq_questions:
        if line.startswith("   "):
            Story.append(Paragraph(line, styles['QuestionText']))
            Story.append(Spacer(1, 5))
        else:
            Story.append(Paragraph(line, styles['QuestionText']))

    # --- Part 3: Predict the Output ---
    Story.append(Paragraph("Part 3: Predict the Output", styles['SectionTitle']))
    Story.append(Paragraph("Carefully trace the code and write down the exact output printed to the console.", styles['QuestionText']))
    
    predict_snippets = [
        ("Snippet 1: Casting", """double myDouble = 9.78;
int myInt = (int) myDouble;
System.out.println(myInt);"""),
        ("Snippet 2: Switch Case", """int day = 3;
switch (day) {
  case 1: System.out.print("Sun ");
  case 2: System.out.print("Mon ");
  case 3: System.out.print("Tue ");
  case 4: System.out.print("Wed "); break;
  default: System.out.print("Invalid");
}"""),
        ("Snippet 3: The 'this' Keyword", """class Test {
  int num = 10;
  void print(int num) {
    System.out.println(this.num + " " + num);
  }
}
Test t = new Test();
t.print(20);"""),
        ("Snippet 4: Constructor Chaining", """class Person {
  Person() {
    this(25);
    System.out.print("A ");
  }
  Person(int age) {
    System.out.print("B ");
  }
}
Person p = new Person();"""),
        ("Snippet 5: ArrayList", """ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.set(1, "Mazda");
cars.remove(2);
System.out.println(cars.size() + " " + cars.get(1));"""),
        ("Snippet 6: Inheritance & Polymorphism", """class Animal {
  void sound() { System.out.print("Animal "); }
}
class Dog extends Animal {
  void sound() { System.out.print("Bark "); }
}
Animal a1 = new Animal();
Animal a2 = new Dog();
a1.sound();
a2.sound();""")
    ]
    
    for title, code in predict_snippets:
        Story.append(Paragraph(f"<b>{title}</b>", styles['QuestionText']))
        Story.append(Paragraph(code.replace("\n", "<br/>").replace("  ", "&nbsp;&nbsp;"), styles['CodeBlock']))
        Story.append(Paragraph("Output: _________________________________", styles['QuestionText']))
        Story.append(Spacer(1, 15))

    # --- Part 4: Correct the Code ---
    Story.append(Paragraph("Part 4: Correct the Code", styles['SectionTitle']))
    Story.append(Paragraph("Identify the syntax or logical errors in the following snippets. Underline the error, then write the corrected line(s) below.", styles['QuestionText']))
    
    error_snippets = [
        ("1. Using ArrayList with Primitives", """ArrayList<int> list = new ArrayList<int>();
list.add(10);"""),
        ("2. Instantiating an Abstract Class", """abstract class Shape {
  abstract void draw();
}
Shape s = new Shape();"""),
        ("3. Inheritance Keyword", """class Vehicle { }
class Car implements Vehicle { }"""),
        ("4. Encapsulation Violation", """class User {
  private String password;
}
User u = new User();
u.password = "12345";"""),
        ("5. Interface Method Body", """interface Animal {
  void eat() { System.out.println("Eating..."); }
}""")
    ]

    for title, code in error_snippets:
        Story.append(Paragraph(f"<b>{title}</b>", styles['QuestionText']))
        Story.append(Paragraph(code.replace("\n", "<br/>").replace("  ", "&nbsp;&nbsp;"), styles['CodeBlock']))
        Story.append(Paragraph("Correction: ___________________________________________________________________", styles['QuestionText']))
        Story.append(Spacer(1, 15))

    Story.append(PageBreak())

    # --- Part 5: Write Code ---
    Story.append(Paragraph("Part 5: Write Code", styles['SectionTitle']))
    
    write_codes = [
        "1. Write a complete Java program (Calculator) that uses the Scanner class to read two integers from the user. Calculate and print their Sum, Subtraction, Multiplication, Division, and Modulus.",
        "2. Write a Java class named 'Employee' that applies the concept of Encapsulation. The class should have a private String variable 'name' and a private double variable 'salary'. Include public getter and setter methods for both variables.",
        "3. Write a Java program that creates an ArrayList of Integers. Add the values 50, 10, 40, and 20 to the list. Sort the list in ascending order using the Collections class. Finally, use a for-each loop to print all the elements.",
        "4. Create a superclass called 'Shape' with a method 'area()'. Create a subclass called 'Circle' that extends 'Shape' and overrides the 'area()' method to print 'Area of Circle'. In a main method, demonstrate Run-time polymorphism by creating a Circle object using a Shape reference."
    ]
    
    for prompt in write_codes:
        Story.append(Paragraph(f"<b>{prompt}</b>", styles['QuestionText']))
        Story.append(Spacer(1, 120))


    # --- Model Answer Section ---
    Story.append(PageBreak())
    Story.append(Paragraph("Model Answers (For Review)", styles['CenterTitle']))
    
    # Answers Part 1
    Story.append(Paragraph("<b>Part 1: True / False</b>", styles['QuestionText']))
    Story.append(Paragraph("""1. True (byte -> short -> int -> long -> float -> double) <br/>
2. False (boolean takes only 'true' or 'false', not 1/0) <br/>
3. True (using this() constructor chaining) <br/>
4. False (ArrayList size is dynamic, unlike standard arrays) <br/>
5. False (Must use Wrapper classes like ArrayList&lt;Integer&gt;) <br/>
6. True <br/>
7. False (Uses 'extends' for classes. 'implements' is for interfaces) <br/>
8. True <br/>
9. True <br/>
10. False (Abstract classes and interfaces cannot be directly instantiated) <br/>
11. True <br/>
12. True (Compile-time polymorphism) <br/>
13. False (Array and ArrayList indexes begin at 0) <br/>
14. True <br/>
15. False (default is optional)""", styles['QuestionText']))
    Story.append(Spacer(1, 15))

    # Answers Part 2
    Story.append(Paragraph("<b>Part 2: Multiple Choice</b>", styles['QuestionText']))
    Story.append(Paragraph("""1. c) String (String is an object/reference type) <br/>
2. b) It must be done manually (e.g., (int) 9.78) <br/>
3. b) get() <br/>
4. b) list.size() <br/>
5. c) this <br/>
6. d) Abstraction <br/>
7. b) implements <br/>
8. b) Run-time Polymorphism <br/>
9. c) Collections <br/>
10. b) Its methods are abstract by default""", styles['QuestionText']))
    Story.append(Spacer(1, 15))

    # Answers Part 3
    Story.append(Paragraph("<b>Part 3: Predict the Output</b>", styles['QuestionText']))
    Story.append(Paragraph("""<b>Snippet 1:</b> 9 <br/>
<b>Snippet 2:</b> Tue Wed (Because there is no break after case 3, it executes case 4 as well) <br/>
<b>Snippet 3:</b> 10 20 ('this.num' refers to instance variable 10, 'num' is the parameter 20) <br/>
<b>Snippet 4:</b> B A (Calls Person(int), prints B, then returns to Person() and prints A) <br/>
<b>Snippet 5:</b> 2 Mazda (Ford is removed. Size is 2. Index 1 is Mazda) <br/>
<b>Snippet 6:</b> Animal Bark""", styles['QuestionText']))
    Story.append(Spacer(1, 15))

    # Answers Part 4
    Story.append(Paragraph("<b>Part 4: Correct the Code</b>", styles['QuestionText']))
    Story.append(Paragraph("""<b>1. Error:</b> &lt;int&gt; <br/> <b>Correction:</b> ArrayList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;(); <br/><br/>
<b>2. Error:</b> new Shape(); <br/> <b>Correction:</b> Cannot instantiate an abstract class. Create a subclass first. <br/><br/>
<b>3. Error:</b> implements Vehicle <br/> <b>Correction:</b> class Car extends Vehicle { } <br/><br/>
<b>4. Error:</b> u.password = "12345"; <br/> <b>Correction:</b> Add a public method setter. u.setPassword("12345"); <br/><br/>
<b>5. Error:</b> Method body in interface. <br/> <b>Correction:</b> void eat(); // interface methods have no body by default""", styles['QuestionText']))
    Story.append(Spacer(1, 15))

    # Answers Part 5
    Story.append(Paragraph("<b>Part 5: Write Code (Sample Answers)</b>", styles['QuestionText']))
    code_ans = """<b>1. Calculator:</b><br/>
<font face="Courier">
import java.util.Scanner;<br/>
public class Calculator {<br/>
&nbsp;&nbsp;public static void main(String[] args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = new Scanner(System.in);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;int a = sc.nextInt();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;int b = sc.nextInt();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Sum = " + (a+b));<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// ... repeat for -, *, /, %<br/>
&nbsp;&nbsp;}<br/>
}
</font><br/><br/>

<b>2. Encapsulation:</b><br/>
<font face="Courier">
public class Employee {<br/>
&nbsp;&nbsp;private String name;<br/>
&nbsp;&nbsp;private double salary;<br/>
&nbsp;&nbsp;public String getName() { return name; }<br/>
&nbsp;&nbsp;public void setName(String name) { this.name = name; }<br/>
&nbsp;&nbsp;public double getSalary() { return salary; }<br/>
&nbsp;&nbsp;public void setSalary(double salary) { this.salary = salary; }<br/>
}
</font><br/><br/>

<b>3. ArrayList Sort:</b><br/>
<font face="Courier">
import java.util.ArrayList;<br/>
import java.util.Collections;<br/>
public class Main {<br/>
&nbsp;&nbsp;public static void main(String[] args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;ArrayList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;list.add(50); list.add(10); list.add(40); list.add(20);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Collections.sort(list);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;for(Integer i : list) { System.out.println(i); }<br/>
&nbsp;&nbsp;}<br/>
}
</font><br/><br/>

<b>4. Polymorphism:</b><br/>
<font face="Courier">
class Shape {<br/>
&nbsp;&nbsp;void area() { System.out.println("Area of Shape"); }<br/>
}<br/>
class Circle extends Shape {<br/>
&nbsp;&nbsp;void area() { System.out.println("Area of Circle"); }<br/>
}<br/>
public class Main {<br/>
&nbsp;&nbsp;public static void main(String[] args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Shape s = new Circle();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;s.area();<br/>
&nbsp;&nbsp;}<br/>
}
</font>"""
    Story.append(Paragraph(code_ans, styles['QuestionText']))

    doc.build(Story, onFirstPage=add_footer, onLaterPages=add_footer)

if __name__ == "__main__":
    create_exam_pdf()
