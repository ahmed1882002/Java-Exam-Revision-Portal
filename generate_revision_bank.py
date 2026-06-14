import os
import sys
import random
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

# Custom Canvas for dynamic page numbering "Page X of Y" and header/footer
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            if self._pageNumber > 1:  # Skip cover page
                self.draw_page_elements(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_elements(self, page_count):
        self.saveState()
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#1A365D"))  # Deep Navy
        
        # Header text
        self.drawString(54, 795, "JAVA PROGRAMMING — COMPREHENSIVE REVISION QUESTION BANK")
        self.setFont("Helvetica", 8)
        self.drawRightString(541, 795, "Borg Al-Arab Technological University")
        
        # Header line
        self.setStrokeColor(colors.HexColor("#BDC3C7"))  # Light gray
        self.setLineWidth(0.75)
        self.line(54, 787, 541, 787)
        
        # Footer line
        self.line(54, 55, 541, 55)
        self.drawString(54, 40, "IT Dept. (2nd Year) — Java Revision | Created by Eng. Ahmed Elfaky")
        
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(541, 40, page_text)
        self.restoreState()

def create_revision_pdf(output_path):
    # Dynamic path increment if files are locked
    dir_name = os.path.dirname(output_path)
    base_name = os.path.basename(output_path)
    name_part, ext_part = os.path.splitext(base_name)
    
    import re
    name_part = re.sub(r'_v\d+$', '', name_part)
    
    counter = 1
    current_path = output_path
    while True:
        try:
            if counter == 1:
                current_path = os.path.join(dir_name, f"{name_part}{ext_part}")
            else:
                current_path = os.path.join(dir_name, f"{name_part}_v{counter}{ext_part}")
            
            if os.path.exists(current_path):
                with open(current_path, 'a'):
                    pass
            break
        except PermissionError:
            counter += 1
            
    output_path = current_path
    print(f"Target file determined: {output_path}")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=72,
        bottomMargin=72
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor("#2C3E50"),
        spaceAfter=6
    )

    h1_style = ParagraphStyle(
        'CustomH1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor("#1A365D"),
        spaceBefore=12,
        spaceAfter=8,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'CustomH2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14.5,
        textColor=colors.HexColor("#2C3E50"),
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    code_style = ParagraphStyle(
        'CustomCode',
        fontName='Courier',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor("#1A365D"),
        spaceBefore=1,
        spaceAfter=1
    )

    tf_style = ParagraphStyle(
        'TFStyle',
        parent=body_style,
        leftIndent=20,
        firstLineIndent=-20,
        spaceAfter=5
    )

    mcq_style = ParagraphStyle(
        'MCQStyle',
        parent=body_style,
        leftIndent=20,
        firstLineIndent=-20,
        spaceAfter=2
    )

    mcq_opt_style = ParagraphStyle(
        'MCQOptStyle',
        parent=body_style,
        leftIndent=20,
        spaceAfter=5
    )

    def make_code_block(code_text):
        escaped_code = (
            code_text.replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('\n', '<br/>')
            .replace(' ', '&nbsp;')
            .replace('\t', '&nbsp;&nbsp;&nbsp;&nbsp;')
        )
        p = Paragraph(escaped_code, code_style)
        t = Table([[p]], colWidths=[487])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F8F9FA")),
            ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#E2E8F0")),
            ('PADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('TOPPADDING', (0,0), (-1,-1), 6),
        ]))
        return t

    story = []

    # ==========================================
    # COVER PAGE
    # ==========================================
    story.append(Spacer(1, 10))
    
    header_text = """
    <para align="center">
    <b>BORG AL-ARAB TECHNOLOGICAL UNIVERSITY</b><br/>
    <font size="10" color="#5A6A80">FACULTY OF INDUSTRY AND ENERGY TECHNOLOGY</font><br/>
    <font size="10" color="#5A6A80">INFORMATION TECHNOLOGY DEPARTMENT</font><br/>
    <br/><br/>
    <font size="20" color="#1A365D"><b>JAVA PROGRAMMING (IT - 2nd Year)</b></font><br/>
    <font size="13" color="#2C3E50"><b>Comprehensive Final Revision Question Bank</b></font><br/>
    <font size="11" color="#7F8C8D"><b>80 MCQs + 80 True/False + Outputs + Corrections + Coding Tasks</b></font><br/>
    <br/><br/>
    <font size="10" color="#2C3E50"><b>Course Code:</b> IT-204 | <b>Semester:</b> Second Term 2025/2026</font><br/>
    <font size="10" color="#2C3E50"><b>Lecturers:</b> Dr. Radwa Rady &amp; Dr. Ghada Fathy</font><br/>
    <br/>
    <font size="9.5" color="#1A365D"><b>Created by Eng. Ahmed Elfaky</b></font>
    </para>
    """
    p_header = Paragraph(header_text, ParagraphStyle('HeaderStyle', fontName='Helvetica', fontSize=12, leading=16, alignment=TA_CENTER))
    t_header = Table([[p_header]], colWidths=[487])
    t_header.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 2, colors.HexColor("#1A365D")),
        ('PADDING', (0,0), (-1,-1), 16),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F7FAFC")),
    ]))
    story.append(t_header)
    story.append(Spacer(1, 20))

    # Revision/Exam Instructions Block
    instructions_text = """
    <para align="justify">
    <b>STUDENT REVISION &amp; EXAM GUIDANCE NOTES:</b><br/><br/>
    • <b>Exam Format:</b> The final exam consists of <b>6 questions</b>: True/False, Multiple Choice (MCQ), Predict the Output (2 sub-questions), Correct the Code, and Programming Tasks (2 coding questions).<br/><br/>
    • <b>70% Weight Rule:</b> Approximately <b>70% of the exam</b> will come directly from the revision sheets (Pre-Midterm, Final Revision, and OOP Revision) and class activities. Ensure you practice these thoroughly.<br/><br/>
    • <b>30% Weight Rule:</b> The remaining <b>30% of the exam</b> covers MCQs and True/False questions based on the lecture contents and general course topics.<br/><br/>
    • <b>Correct the Code Question:</b> As instructed by the lecturers, you must <b>draw a line (underline) under the error</b> in the provided code snippet, and then <b>write the corrected line</b> in the answer space. <i>Note: Even if you are unsure of the correct syntax, underline the error to receive partial credit.</i><br/><br/>
    • <b>Randomized Layout:</b> Questions and options are completely shuffled and randomized. There are no predictable patterns in the answer key, mimicking a real exam compiled by the department lecturers.<br/><br/>
    • <b>Coding Questions:</b> Coding tasks are highly aligned with the laboratory sheets (Tutorials 1-5 and 7). Review your lab assignments closely.
    </para>
    """
    p_instr = Paragraph(instructions_text, ParagraphStyle('InstrStyle', fontName='Helvetica', fontSize=9, leading=13.5, textColor=colors.HexColor("#2C3E50")))
    t_instr = Table([[p_instr]], colWidths=[487])
    t_instr.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#D69E2E")), 
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#FFFDF5")), 
        ('PADDING', (0,0), (-1,-1), 12),
    ]))
    story.append(t_instr)
    
    story.append(Spacer(1, 20))
    p_footer = Paragraph("<para align=\"center\"><font size=\"9\" color=\"#7F8C8D\">Borg Al-Arab Technological University • 2026<br/>Created by Eng. Ahmed Elfaky</font></para>", body_style)
    story.append(p_footer)
    story.append(PageBreak())

    # ==========================================
    # DATA DEFINITIONS
    # ==========================================
    
    # 80 True / False Questions: Shuffled programmatically
    tf_questions = [
        # --- TRUE STATEMENTS (40) ---
        ("Java is a platform-independent language because it compiles code into bytecode, which runs on the Java Virtual Machine (JVM).", True, "Widening casting (e.g., int to double) is safe and occurs automatically in Java."),
        ("The JDK (Java Development Kit) contains the JRE (Java Runtime Environment) and development tools like the compiler.", True, "The JDK is the full development bundle containing JRE (runtime) and tools like javac."),
        ("Java is case-sensitive, meaning the identifier 'MyVariable' is different from 'myvariable'.", True, "Java is strictly case-sensitive for all class names, variables, and keywords."),
        ("The main method signature in Java must always be declared as public static void main(String[] args).", True, "This is the exact signature recognized by the JVM to launch an application."),
        ("Java uses a garbage collector to automatically manage memory and delete unused objects.", True, "Garbage collection is automatic in Java, releasing heap memory by cleaning unreferenced objects."),
        ("The double data type is a 64-bit double-precision floating-point number.", True, "double is the default floating-point type in Java and occupies 8 bytes (64 bits)."),
        ("The byte data type in Java can store values from -128 to 127.", True, "byte is an 8-bit signed integer with a range of -128 to 127."),
        ("A float literal must be suffixed with 'f' or 'F' (e.g., 3.14f) to prevent compilation errors.", True, "Floating-point literals are treated as double by default. Assigning them to float requires the 'f' suffix."),
        ("Widening casting (converting a smaller type to a larger size type, e.g., int to double) occurs automatically in Java.", True, "Widening casting is safe, so the compiler performs it automatically."),
        ("Narrowing casting (e.g., double to int) must be done manually using parentheses containing the target type.", True, "Narrowing casting causes a loss of precision, requiring manual casting (e.g., (int) value)."),
        ("The expression (10 > 5 && 3 < 2) evaluates to false.", True, "10 > 5 is true, but 3 < 2 is false. True AND False yields False."),
        ("The ternary operator (?:) acts as a shorthand for simple if-else statements.", True, "The ternary operator evaluates condition ? option1 : option2, acting as a short if-else."),
        ("To read a single word from the console, the next() method of Scanner is used.", True, "next() reads input tokens separated by whitespace delimiters."),
        ("The nextLine() method of Scanner reads the input until the end of the line.", True, "nextLine() reads everything up to the next line separator character."),
        ("A Scanner object must be created by passing System.in to its constructor to read from the console.", True, "System.in represents the standard keyboard input stream."),
        ("In a switch-case statement, the break statement is optional but omitting it causes execution to 'fall through' to the next case.", True, "Without break, execution executes subsequent case blocks sequentially (fall-through)."),
        ("A while loop checks the condition before executing the loop body.", True, "The while loop is a pre-test loop; if the condition is false initially, the body never runs."),
        ("A do-while loop executes the loop body at least once, even if the condition is false initially.", True, "The do-while loop is a post-test loop; it runs the body once before checking the condition."),
        ("An infinite loop will occur if the condition of a while loop is always true.", True, "If the condition never becomes false, the loop will run endlessly unless broken."),
        ("The break statement inside a loop immediately terminates the loop.", True, "break causes immediate exit from the innermost loop block."),
        ("The continue statement skips the remaining code in the current iteration and jumps to the next iteration of the loop.", True, "continue stops the current run and branches back to the update/condition check."),
        ("Nested loops are loops placed inside another loop.", True, "This is the definition of nested loops (e.g., outer and inner loops)."),
        ("A do-while loop ends with a semicolon after the condition check.", True, "Syntax: do { ... } while(condition); (requires semicolon)."),
        ("The for-each loop is specifically designed to iterate through arrays and collections.", True, "for-each (enhanced for loop) simplifies array/collection traversal sequentially."),
        ("Once an array is created in Java, its capacity cannot be dynamically resized.", True, "Java primitive arrays are static and fixed in size upon creation."),
        ("An array of objects has its elements initialized to null by default.", True, "Object reference elements default to null."),
        ("An ArrayIndexOutOfBoundsException occurs if you try to access arr[5] in an array of size 5.", True, "Indexes range from 0 to N-1 (4). Accessing index 5 is out of bounds."),
        ("Array elements are stored in contiguous memory locations.", True, "Arrays allocate a single contiguous block of memory for all elements."),
        ("An array of size 10 has valid indexes ranging from 0 to 9.", True, "An array of size 10 has valid indexes ranging from 0 to N-1 (9)."),
        ("An array is a reference type, not a primitive type.", True, "All arrays are objects in Java, meaning they are reference types allocated on the heap."),
        ("A method signature consists of the method name and its parameter list.", True, "Signature includes method name, parameter types, count, and order."),
        ("Method overloading allows multiple methods to have the same name but different parameter lists.", True, "This is the definition of method overloading."),
        ("A recursive method must always have a base case to terminate execution and prevent StackOverflowError.", True, "The base case stops the recursive process; without it, stack overflow occurs."),
        ("Variable arguments (varargs) in a method must be the last parameter in the parameter list.", True, "To prevent ambiguity, the varargs parameter (type... name) must be the final parameter."),
        ("In recursion, the method calls itself directly or indirectly.", True, "A recursive method calls itself to compute smaller subproblems."),
        ("Method parameters in Java are passed by value.", True, "Java is strictly pass-by-value. It passes copies of parameters or copies of object references."),
        ("Encapsulation is achieved by making class variables private and exposing them via public getters and setters.", True, "Encapsulation hides fields and exposes them only through controlled public methods."),
        ("A class constructor must have the exact same name as the class and cannot specify a return type, not even void.", True, "Constructors must match the class name and have no return type declaration."),
        ("Static variables are shared among all instances of a class.", True, "A static variable is class-level; there is only one copy shared by all objects."),
        ("An object is an instance of a class.", True, "The class is the template, and the object is a concrete instance of that class."),

        # --- FALSE STATEMENTS (40) ---
        ("In Java, source code files must be saved with the .class extension before compilation.", False, "Source code files are saved with .java extension. Compiled files have .class extension."),
        ("A subclass inherits the properties and methods of its superclass using the 'implements' keyword.", False, "A subclass inherits from a superclass using the 'extends' keyword. 'implements' is used for interfaces."),
        ("You can create an object (instantiate) directly from an abstract class or an interface.", False, "Abstract classes and interfaces cannot be directly instantiated using the 'new' keyword."),
        ("In Java, array indexes begin at 1.", False, "Array and ArrayList indexes always begin at 0 in Java."),
        ("A switch statement must always have a 'default' case to compile successfully.", False, "The default case in a switch statement is optional and is not required for compilation."),
        ("Every Java statement must end with a colon (:).", False, "Every executable Java statement must end with a semicolon (;), not a colon."),
        ("Java supports multiple inheritance of classes directly using the extends keyword.", False, "Java classes can only inherit from one superclass to avoid the diamond problem of multiple inheritance."),
        ("In Java, String is a primitive data type.", False, "String is a class (reference type) inside java.lang."),
        ("The default value of a boolean instance variable in a class is true.", False, "Uninitialized class instance booleans default to false."),
        ("A local variable declared inside a method is initialized to its default type value automatically.", False, "Local variables do not receive default values; they must be explicitly initialized before use."),
        ("Variables declared with the final keyword can have their values reassigned multiple times.", False, "final variables act as constants; once assigned, their value cannot be changed."),
        ("The char data type stores single characters and is enclosed in double quotes.", False, "char literals use single quotes (e.g., 'A'). Double quotes are used for String literals."),
        ("A boolean variable can store any non-zero integer value representing true.", False, "In Java, boolean variables can only be true or false. They cannot be converted from integers."),
        ("The expression 5 / 2 evaluates to 2.5 in Java.", False, "Since both operands are integers, integer division is performed, yielding 2.0 (or 2)."),
        ("The modulus operator (%) returns the quotient of a division.", False, "The modulus operator returns the remainder of the division, not the quotient."),
        ("The prefix increment operator (++x) increments the value of x after it is used in the expression.", False, "Prefix increment (++x) increments first, then uses the value. Postfix (x++) uses it first, then increments."),
        ("The logical AND operator in Java is represented by a single ampersand (&) for short-circuit evaluation.", False, "Short-circuit logical AND is represented by double ampersands (&&). Single ampersand (&) is bitwise AND."),
        ("The assignment operator (=) is the same as the comparison operator (==).", False, "= is used to assign values to variables. == is used to compare values for equality."),
        ("You can cast a boolean value to an int in Java.", False, "Java does not support casting between boolean and numeric data types."),
        ("The Scanner class is located inside the java.lang package and does not require an import statement.", False, "Scanner is inside the java.util package and must be imported explicitly."),
        ("The scanner.nextInt() method will automatically skip non-integer inputs without throwing exceptions.", False, "nextInt() throws an InputMismatchException if the user inputs non-integer data."),
        ("The switch statement in Java can accept float or double values as its control expression.", False, "The switch statement does not accept double, float, or boolean values."),
        ("An if statement must always have an associated else block.", False, "An if statement can stand alone to execute code conditionally."),
        ("The default case in a switch statement must always be placed at the very end of the switch block.", False, "default can be placed anywhere in the switch, though putting it last is standard practice."),
        ("The variable declared in the initialization of a for loop is accessible outside the loop body.", False, "Variables declared in the initialization block are scoped strictly to the loop block."),
        ("To get the number of elements in an array, you use the length() method.", False, "Arrays use the length property (arr.length). length() is a method of the String class."),
        ("It is possible to store elements of different data types in a single primitive array.", False, "Java arrays are homogeneous; they can only store elements of the same declared type."),
        ("You can declare an array as int arr[10] = new int[];.", False, "This is invalid syntax. The correct syntax is: int[] arr = new int[10];"),
        ("A method declared with a void return type cannot contain a return statement.", False, "A void method can use 'return;' (without a value) to exit early."),
        ("Overloaded methods must have different return types to compile.", False, "Overloaded methods are identified by parameters. Return types alone are not checked for overloading."),
        ("Local variables declared inside a method are visible to all other methods of the same class.", False, "Local variables are scoped strictly to the method/block where declared."),
        ("You can call a non-static method directly from static main without creating an object instance.", False, "Static methods cannot directly access non-static members. An object must be created first."),
        ("If a class has a parameterized constructor, the compiler will still automatically generate a default no-argument constructor.", False, "Declaring any constructor removes the automatic default no-arg constructor."),
        ("A static method can access non-static instance variables directly.", False, "Static methods cannot directly access instance fields; they need a concrete object reference."),
        ("Constructor overloading is not allowed in Java.", False, "Constructors can be overloaded like any other method by varying parameter lists."),
        ("The this() constructor call can be placed on any line inside a constructor block.", False, "The this() call must be the absolute first statement inside the constructor."),
        ("ArrayList elements can store primitive data types directly (e.g., ArrayList<int>).", False, "ArrayLists only store objects, requiring wrapper class Integer."),
        ("To find the number of elements in an ArrayList, you use the length property.", False, "size() returns the number of elements in the ArrayList collection. length is for arrays."),
        ("The LocalDate class from java.time has a public constructor allowing 'new LocalDate()'.", False, "LocalDate constructor is private. You must instantiate using LocalDate.now() or LocalDate.of()."),
        ("ArrayList belongs to the java.lang package and does not require an import.", False, "ArrayList belongs to java.util and must be imported explicitly.")
    ]

    # 80 Multiple Choice Questions raw data
    mcqs_raw = [
        # Intro
        ("Which component is responsible for running Java bytecode?", "JVM (Java Virtual Machine)", "JDK (Java Development Kit)", "JRE (Java Runtime Environment)", "Javac (Java Compiler)", "The JVM is the engine that executes compiled Java bytecode class files."),
        ("Which tool compiles Java source code (.java) into bytecode (.class)?", "javac", "java", "jar", "javadoc", "javac is the Java Compiler executable."),
        ("What is the correct file extension for a compiled Java class file?", ".class", ".java", ".txt", ".obj", ".class contains compiled JVM bytecode."),
        ("Which of the following is a valid identifier in Java?", "_myVar", "2var", "class", "my-var", "Identifiers cannot start with numbers (A), contain hyphens (D), or use keywords (C)."),
        ("What is the purpose of the main method in Java?", "Entry point for program execution", "To import packages", "To declare variables", "To define class methods", "The main method is the execution entry point called by the JVM."),
        ("Which of the following is NOT a primitive data type in Java?", "String", "byte", "boolean", "short", "String is a class (reference type) inside java.lang."),
        ("What happens during narrowing casting in Java?", "It must be done manually by placing the type in parentheses.", "It happens automatically.", "It is not allowed.", "It converts a String to an int.", "Narrowing casting converts a larger type to smaller (e.g., double to int) and must be explicit: (int) value."),
        ("Which method is used to retrieve an element from a specific index in an ArrayList?", "get()", "retrieve()", "set()", "fetch()", "The get(index) method returns the element at that index."),
        ("How do you find out the number of elements in an ArrayList named 'list'?", "list.size()", "list.length", "list.length()", "list.getSize()", "size() returns active elements count. length is for arrays, length() is for String."),
        ("Which keyword is used to refer to the current object in a method or constructor?", "this", "super", "static", "final", "this is a reference to the active object instance."),
        ("What is the process of hiding internal details and showing only the essential functionality?", "Abstraction", "Inheritance", "Polymorphism", "Encapsulation", "Abstraction focuses on what an object does rather than how it does it."),
        ("Which keyword is used by a class to use an interface?", "implements", "extends", "inherits", "imports", "A class implements an interface, and extends another class."),
        ("Method Overriding is an example of:", "Run-time Polymorphism", "Compile-time Polymorphism", "Encapsulation", "None of the above", "Overriding is resolved dynamically at runtime (Runtime Polymorphism)."),
        ("If you want to sort an ArrayList alphabetically or numerically, which class provides the sort() method?", "Collections", "Arrays", "ArrayList", "Sorter", "Collections.sort() sorts lists in ascending order."),
        ("Which statement is true about an Interface in Java?", "Its methods are abstract by default.", "It can have instance variables.", "It can have constructors.", "A class can only implement one interface.", "Interface methods are public and abstract by default (without body)."),
        ("What is the size of the float data type in Java?", "32 bits", "8 bits", "16 bits", "64 bits", "float is 32-bit single-precision. double is 64-bit."),
        ("What is the default value of an uninitialized instance boolean variable in a class?", "false", "true", "null", "0", "Instance booleans default to false in Java."),
        ("Which data type has the largest value range in Java?", "double", "long", "int", "float", "double holds 64-bit floating point numbers, offering the widest range."),
        ("What is the valid range of values for a byte variable?", "-128 to 127", "-32768 to 32767", "0 to 255", "-2147483648 to 2147483647", "byte is an 8-bit signed integer with a range of -128 to 127."),
        ("Which of the following represents narrowing type casting?", "int i = (int) 5.5;", "double d = 5;", "float f = 10L;", "double d = 'a';", "double (8 bytes) to int (4 bytes) is narrowing and needs explicit (int) cast."),
        ("What is the value of result after: int result = 12 + 3 * 2;?", "18", "30", "15", "24", "Multiplication first: 3 * 2 = 6. Then 12 + 6 = 18."),
        ("What is the result of the mathematical expression: 17 % 5?", "2", "3", "1", "0", "17 / 5 = 3 with remainder 2. Modulus (%) returns the remainder."),
        ("Which operator performs a logical short-circuit AND operation?", "&&", "&", "|", "||", "&& only evaluates the right operand if the left is true."),
        ("What will be the output of: System.out.println(10 > 5 ? \"Yes\" : \"No\");?", "Yes", "No", "10", "Compile Error", "10 > 5 is true, so the first option ('Yes') is printed."),
        ("What is the value of x after: int x = 5; x += 3 * 2;?", "11", "16", "10", "13", "Multiplication first: 3 * 2 = 6. Then x = 5 + 6 = 11."),
        ("What is the output of: System.out.println(5 / 2.0);?", "2.5", "2", "2.0", "3", "Since 2.0 is double, double division occurs yielding 2.5."),
        ("Which operator is used to compare if two values are equal?", "==", "=", "equals", "===", "== evaluates equality. = is assignment."),
        ("Which assignment statement is invalid?", "float f = 3.14;", "double d = 3.14f;", "int i = (int) 3.14;", "char c = 'A';", "Double literal 3.14 cannot be assigned directly to float variable without 'f' suffix."),
        ("What will: System.out.println('A' + 1); print? (ASCII of 'A' is 65)", "66", "A1", "B", "651", "char is promoted to int (65). 65 + 1 = 66."),
        ("Which package must be imported to use the Scanner class?", "java.util", "java.io", "java.lang", "java.time", "Scanner is in the java.util utility package."),
        ("Which method is used to read a single word of string input from the user using a Scanner?", "next()", "nextLine()", "read()", "nextWord()", "next() reads input up to the first space delimiter."),
        ("How do you instantiate a Scanner object to read from the keyboard?", "Scanner s = new Scanner(System.in);", "Scanner s = new Scanner();", "Scanner s = Scanner.open();", "Scanner s = new Scanner(Keyboard);", "System.in represents the keyboard console stream."),
        ("Which method reads a double value from the user using a Scanner object?", "nextDouble()", "nextFloat()", "readDouble()", "getDouble()", "nextDouble() reads double input tokens."),
        ("What exception is thrown when Scanner input does not match the expected type?", "InputMismatchException", "NumberFormatException", "NullPointerException", "IOException", "Thrown by Scanner nextInt(), nextDouble() if input type doesn't match."),
        ("Which statement is true about the switch statement in Java?", "It supports byte, short, char, and int.", "It works with boolean.", "It does not support String.", "It can evaluate float.", "switch supports integer types, char, and String. It doesn't support float, double, or boolean."),
        ("What is the purpose of the break statement in a switch case?", "To prevent execution fall-through.", "To terminate program.", "To throw exception.", "To restart execution.", "break exits the switch case to prevent fall-through execution."),
        ("What is the default block in a switch statement used for?", "It executes if all cases fail to match.", "It is mandatory.", "It restarts execution.", "It acts as entry point.", "default handles cases that don't match any case constant."),
        ("Can you nest if-else statements inside a switch statement?", "Yes, it is fully supported.", "No.", "Only in default case.", "Only without break statements.", "Java supports nesting control structures to any depth."),
        ("What is the value of y after: int x = 3; int y = (x > 3) ? 10 : 20;?", "20", "10", "3", "0", "3 > 3 is false, so y is assigned the second option: 20."),
        ("Which loop executes its body at least once, even if the condition is initially false?", "do-while loop", "while loop", "for loop", "for-each loop", "do-while checks condition at the bottom, guaranteeing one run."),
        ("What is the output of: for(int i=0; i<3; i++) { System.out.print(i); }?", "012", "123", "0123", "0 1 2", "Runs for i=0, 1, 2. Ends when i becomes 3."),
        ("Which statement skips the rest of the current iteration and jumps to the loop's next iteration check?", "continue", "break", "exit", "skip", "continue skips to the loop update/condition statement."),
        ("What is the correct syntax for an infinite while loop?", "while(true)", "while(1)", "while(loop)", "while()", "In Java, while condition must be boolean, hence while(true)."),
        ("In a for loop, which part executes only once at the beginning?", "Initialization", "Condition check", "Update statement", "Iteration statement", "Initialization executes once when entering the loop."),
        ("Which statement is true about nested loops?", "Inner loop executes fully for each outer iteration.", "Outer loop executes fully for each inner iteration.", "They cannot have variables.", "Inner loop must use same variable.", "The inner loop runs completely for each loop iteration of outer loop."),
        ("What will: int x = 0; while(x < 3) { x++; } System.out.println(x); print?", "3", "2", "4", "0", "Increments from 0 -> 1 -> 2 -> 3. Stops when x=3."),
        ("What ends a do-while loop block?", "A semicolon after while condition", "A closing brace only", "A break", "A return", "do { } while(cond); requires a terminating semicolon."),
        ("Which loop is best suited when the exact number of iterations is known beforehand?", "for loop", "while loop", "do-while loop", "infinite loop", "for loops are ideal for fixed count loops."),
        ("What is the output of: for(int i=0; i<5; i++) { if(i==2) break; System.out.print(i); }?", "01", "012", "0134", "01234", "Loop breaks when i=2. So only 0 and 1 print."),
        ("What is the default value of elements in a newly allocated double array?", "0.0", "0", "null", "undefined", "double array elements are initialized to 0.0 by default."),
        ("How do you declare and instantiate an array of 5 integers in Java?", "int[] arr = new int[5];", "int arr[5] = new int[];", "int[] arr = int[5];", "int arr = new int(5);", "Correct array instantiation syntax."),
        ("What is the index of the last element in an array named 'data' of length N?", "N - 1", "N", "0", "N + 1", "Arrays are 0-indexed; last index is N - 1."),
        ("Which property is used to get the number of elements in an array?", "length", "length()", "size", "size()", "length is a public final field on arrays."),
        ("What happens if you try to access an index outside the range of an array?", "ArrayIndexOutOfBoundsException at runtime", "Compiler error", "Returns null", "Program runs with no output", "Accessing invalid indexes throws this runtime exception."),
        ("How can you initialize array elements directly at the time of declaration?", "Both A and B", "int[] arr = {1, 2, 3};", "int[] arr = new int[]{1, 2, 3};", "int[] arr = (1, 2, 3);", "Both syntax methods are valid to initialize arrays."),
        ("Are array elements stored in contiguous memory locations?", "Yes", "No", "Only double arrays", "Only object arrays", "Array elements occupy a single contiguous block of memory slots."),
        ("Which is a valid array declaration statement?", "Both A and B (though A is preferred as int[] arr)", "int arr[] = new int[10];", "int arr[10] = new int[];", "int arr = new int[10];", "Both bracket placements are valid in Java declarations."),
        ("What is the default value of elements in a newly created String array?", "null", '""', '"null"', "undefined", "Object reference elements default to null."),
        ("How do you access the third element in an array named 'vals'?", "vals[2]", "vals(2)", "vals[3]", "vals.get(2)", "Third element is at index 2 (vals[2])."),
        ("Which of the following is NOT part of a method signature?", "Return type", "Parameter types", "Return type is NOT part of the signature (it is name + parameters)", "Parameter order", "Method signature excludes return type; it includes name and parameter list."),
        ("Which keyword is used to return a value from a method?", "return", "break", "void", "back", "return exits the method and returns the value."),
        ("What is method overloading?", "Methods with same name but different signatures.", "Methods with same signatures but different return types.", "Methods with different names.", "Too many parameters.", "Overloaded methods must vary in parameter count, type or order."),
        ("What is a recursive method in Java?", "Method that calls itself", "Method calling another class", "Method with nested loop", "Static method", "Recursion occurs when a method calls itself directly or indirectly."),
        ("Which syntax represents a variable argument (varargs) parameter in a method?", "int... numbers", "int[] numbers", "int numbers...", "varargs int numbers", "Type followed by triple dots (...) indicates varargs."),
        ("If a method is declared static, how can it be called?", "Using class name directly without an object.", "By creating instance first.", "Only inside static methods.", "It cannot be called.", "Static methods belong to class and are called via ClassName.methodName()."),
        ("What happens if a recursive method has no base case?", "It runs infinitely and throws StackOverflowError.", "Compiler error.", "Terminates after 100 runs.", "Returns null.", "Infinite calls exhaust stack space throwing StackOverflowError."),
        ("What parameters are passed to a method in Java?", "Pass-by-value always", "Pass-by-reference always", "Pass-by-pointer", "Mixed pass-by-ref/val", "Java is strictly pass-by-value."),
        ("Where must local variables be declared?", "Inside methods or code blocks", "Outside classes", "In static blocks only", "In constructor parameters only", "Local variables exist within the scope of the declaring block/method."),
        ("Can you declare a method inside another method in Java?", "No, nesting methods is not allowed.", "Yes.", "Only static methods.", "Only recursive methods.", "Java does not support nested method declarations."),
        ("Which OOP pillar focuses on exposing only necessary details while hiding implementation?", "Abstraction", "Inheritance", "Encapsulation", "Polymorphism", "Abstraction hides details and shows features."),
        ("What is the return type of a class constructor in Java?", "None (no return type specified, not even void)", "void", "The class type", "Object", "Constructors are declared without any return type, not even void."),
        ("If a class contains a constructor with parameters, how can a no-arg constructor be created?", "Define it explicitly in the class.", "Provided automatically.", "Impossible to have both.", "Use static constructors.", "Defining any constructor removes the automatic default no-arg constructor."),
        ("Which keyword is used to declare variables that are shared across all objects of a class?", "static", "final", "share", "private", "static variables belong to class and are shared across instances."),
        ("How do you instantiate an object of a class named 'Car'?", "Car myCar = new Car();", "Car myCar = Car.new();", "myCar = Car();", "Car myCar;", "Correct instantiation using new keyword."),
        ("What is the primary role of a constructor in Java?", "Initialize objects.", "Compile class.", "Destroy objects.", "Call garbage collection.", "Constructors initialize fields of a new object."),
        ("Can class constructors be overloaded?", "Yes, by varying parameter lists.", "No.", "Only if return types differ.", "Only if one is static.", "Constructors can be overloaded by varying parameter lists."),
        ("What is encapsulation?", "Making class fields private and providing public getters/setters.", "Inheritance of variables.", "Running code on the JVM.", "Writing code in multiple classes.", "Encapsulation binds data and code, hiding fields using private access."),
        ("A class acts as a ________ for creating objects.", "blueprint/template", "variable", "method", "package", "Class is the blueprint from which objects are constructed."),
        ("Which of the following belongs to a class rather than object instances?", "Static methods and variables", "Instance variables", "Getters and Setters", "Local variables", "Static members belong to class level."),
        ("What does the 'this' keyword refer to?", "Current object instance", "Parent class", "Current class template", "Static class context", "this represents a reference to the active object instance."),
        ("Which is the correct way to invoke a constructor from another constructor within the same class?", "this()", "this.constructor()", "new constructor()", "call()", "this() triggers constructor chaining inside the class."),
        ("ArrayList class belongs to which package?", "java.util", "java.lang", "java.io", "java.time", "ArrayList is located in the java.util collection utility package."),
        ("Which method returns the number of elements in an ArrayList named 'list'?", "list.size()", "list.length", "list.length()", "list.size", "size() returns elements count in Collections."),
        ("How do you define an ArrayList that stores integers?", "ArrayList<Integer> list = new ArrayList<>();", "ArrayList<int> list;", "ArrayList list = new int[];", "list = new ArrayList<int>();", "Use wrapper class Integer inside angle brackets."),
        ("Which method is used to remove all elements from an ArrayList?", "clear()", "removeAll()", "delete()", "reset()", "clear() removes all elements from the collection."),
        ("Which method replaces the element at index 2 with a new string in ArrayList 'list'?", "list.set(2, \"new\");", "list.add(2, \"new\");", "list.replace(2, \"new\");", "list.insert(2, \"new\");", "set(index, element) overwrites the element at index."),
        ("Which static method returns the current date in LocalDate?", "LocalDate.now()", "LocalDate.today()", "new LocalDate()", "LocalDate.current()", "now() returns current system date."),
        ("Which class is used to format LocalDate objects into specific patterns?", "DateTimeFormatter", "DateFormatter", "DateFormat", "SimpleDateFormat", "DateTimeFormatter is the modern formatter class."),
        ("If you divide 9 by 2, what is the output in double: double r = 9 / 2; System.out.println(r);?", "4.0", "4.5", "4", "Compile Error", "Integer division evaluates first to 4, which is cast to 4.0.")
    ]

    # ==========================================
    # RANDOMIZATION ENGINE (mimics realistic exam)
    # ==========================================
    # Set seed for reproducible builds of the PDF, but completely random layout
    random.seed(12345)

    # 1. Shuffle True/False Questions
    random.shuffle(tf_questions)

    # 2. Shuffle and process MCQs
    random.shuffle(mcqs_raw)
    mcq_questions_processed = []
    mcq_answers_processed = []

    for i, raw_item in enumerate(mcqs_raw):
        q = raw_item[0]
        correct = raw_item[1]
        
        # Gather all wrong options
        wrongs = list(raw_item[2:5])
        
        # Combine options
        opts = [correct] + wrongs
        
        # Shuffle options randomly
        random.shuffle(opts)
        
        # Find new index of the correct option
        correct_idx = opts.index(correct)
        ans_letter = ["A", "B", "C", "D"][correct_idx]
        
        # Format option labels
        formatted_opts = [
            f"A. {opts[0]}",
            f"B. {opts[1]}",
            f"C. {opts[2]}",
            f"D. {opts[3]}"
        ]
        
        mcq_questions_processed.append({
            "q": q,
            "opts": formatted_opts
        })
        
        mcq_answers_processed.append((
            f"{i+1}. {ans_letter} ({correct})",
            f"Correct option is {ans_letter}. Explanation: {raw_item[-1]}"
        ))

    # Predict Output Questions
    po_questions_data = [
        ('Loops and Breaks',
         'public class LoopExample {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) {\n            if (i == 3) {\n                break;\n            }\n            sum += i;\n        }\n        System.out.println("Sum = " + sum);\n    }\n}',
         'Sum = 3',
         'The loop starts with i=1 (sum = 0 + 1 = 1). Next, i=2 (sum = 1 + 2 = 3). When i=3, the break statement is triggered, instantly terminating the loop. The print statement output is Sum = 3.'),

        ('Method Overloading',
         'class Helper {\n    static void show(int x) {\n        System.out.println("int: " + x);\n    }\n    static void show(double x) {\n        System.out.println("double: " + x);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Helper.show(5);\n        Helper.show(5.0);\n        Helper.show((double) 5);\n    }\n}',
         'int: 5\ndouble: 5.0\ndouble: 5.0',
         'Helper.show(5) invokes show(int). Helper.show(5.0) invokes show(double). Helper.show((double)5) invokes show(double).'),

        ('Recursion',
         'public class RecursionExample {\n    public static int mystery(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n * mystery(n - 2);\n    }\n    public static void main(String[] args) {\n        System.out.println(mystery(5));\n    }\n}',
         '15',
         'mystery(5) = 5 * mystery(3) = 5 * 3 * mystery(1) = 5 * 3 * 1 = 15.'),

        ('Static vs. Instance Variable Scope',
         'class Counter {\n    static int count = 0;\n    int id = 0;\n    Counter() {\n        count++;\n        id++;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println("c1.id: " + c1.id + ", count: " + Counter.count);\n        System.out.println("c2.id: " + c2.id + ", count: " + Counter.count);\n    }\n}',
         'c1.id: 1, count: 2\nc2.id: 1, count: 2',
         'count is static (shared, count becomes 2). id is instance (unique per object, becomes 1).'),

        ('Constructor Chaining using this()',
         'class Item {\n    String name;\n    int price;\n    Item() {\n        this("Unknown", 100);\n        System.out.println("No-arg constructor called");\n    }\n    Item(String name, int price) {\n        this.name = name;\n        this.price = price;\n        System.out.println("Parameterized constructor called");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item item = new Item();\n    }\n}',
         'Parameterized constructor called\nNo-arg constructor called',
         'this("Unknown", 100) calls the parameterized constructor first, then returns to print the no-arg message.'),

        ('ArrayList Manipulation',
         'import java.util.ArrayList;\npublic class ArrayListDemo {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("Apple");\n        list.add("Banana");\n        list.add("Orange");\n        list.set(1, "Grape");\n        list.remove(0);\n        System.out.println(list);\n    }\n}',
         '[Grape, Orange]',
         "Initial: [Apple, Banana, Orange]. set(1, 'Grape') -> [Apple, Grape, Orange]. remove(0) -> [Grape, Orange]."),

        ('Integer Division and Casting',
         'public class DivisionDemo {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 4;\n        double r1 = a / b;\n        double r2 = (double) a / b;\n        double r3 = (double) (a / b);\n        System.out.println("r1: " + r1 + ", r2: " + r2 + ", r3: " + r3);\n    }\n}',
         'r1: 3.0, r2: 3.75, r3: 3.0',
         'r1 performs integer division (3), stored as double (3.0). r2 performs double division (3.75). r3 converts integer division result to double (3.0).'),

        ('LocalDate Manipulation',
         'import java.time.LocalDate;\npublic class DateDemo {\n    public static void main(String[] args) {\n        LocalDate date = LocalDate.of(2026, 6, 14);\n        LocalDate nextWeek = date.plusDays(7);\n        System.out.println("Date: " + date + ", Next Week: " + nextWeek);\n    }\n}',
         'Date: 2026-06-14, Next Week: 2026-06-21',
         'LocalDate is immutable. plusDays(7) returns a new instance representing 7 days later.'),

        ('Switch Case Fall-Through',
         'public class SwitchFallthrough {\n    public static void main(String[] args) {\n        int day = 3;\n        switch (day) {\n            case 1: System.out.print("Sun ");\n            case 2: System.out.print("Mon ");\n            case 3: System.out.print("Tue ");\n            case 4: System.out.print("Wed "); break;\n            default: System.out.print("Invalid");\n        }\n    }\n}',
         'Tue Wed ',
         'Starts at case 3. Because there is no break statement, it falls through to print case 4 and breaks.'),

        ('Inheritance & Runtime Polymorphism',
         'class Animal {\n    void sound() { System.out.print("Animal "); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.print("Bark "); }\n}\npublic class PolyDemo {\n    public static void main(String[] args) {\n        Animal a1 = new Animal();\n        Animal a2 = new Dog();\n        a1.sound();\n        a2.sound();\n    }\n}',
         'Animal Bark ',
         'a1.sound() calls parent sound. a2.sound() calls overridden child sound at runtime.'),

        ('String Concatenation and Immutability',
         'public class StringDemo {\n    public static void main(String[] args) {\n        String s = "Java";\n        s.concat(" Programming");\n        System.out.println(s);\n    }\n}',
         'Java',
         "Strings are immutable in Java. Calling s.concat() returns a new String but does not modify the reference 's' itself because the result is not assigned back to s."),

        ('Nested Loop with Labels',
         'public class LoopDemo {\n    public static void main(String[] args) {\n        outer: for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i == 2 && j == 2) {\n                    break outer;\n                }\n                System.out.print(i + "" + j + " ");\n            }\n        }\n    }\n}',
         '11 12 13 21 ',
         "The break outer; statement immediately terminates the labeled outer loop. Thus, when i=2 and j=2, the loops exit entirely, leaving '11 12 13 21 ' as the output."),

        ('Boolean Array default values',
         'public class ArrayDemo {\n    public static void main(String[] args) {\n        boolean[] flags = new boolean[3];\n        System.out.println(flags[1]);\n    }\n}',
         'false',
         'Primitive boolean arrays default to false in Java upon instantiation.'),

        ('Constructor Chaining with super()',
         'class Parent {\n    Parent() {\n        System.out.print("Parent ");\n    }\n}\nclass Child extends Parent {\n    Child() {\n        this("Default");\n        System.out.print("Child-NoArg ");\n    }\n    Child(String name) {\n        super();\n        System.out.print("Child-Param ");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Child();\n    }\n}',
         'Parent Child-Param Child-NoArg ',
         'new Child() invokes Child no-arg constructor. this("Default") delegates to Child(String), which calls super() parent constructor first (prints Parent), then prints Child-Param, and returns to print Child-NoArg.'),

        ('Static Method Hiding (Not Overriding)',
         'class Parent {\n    static void display() {\n        System.out.print("ParentDisplay ");\n    }\n}\nclass Child extends Parent {\n    static void display() {\n        System.out.print("ChildDisplay ");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.display();\n    }\n}',
         'ParentDisplay ',
         'Static methods are bound at compile-time based on the reference type (Parent), not the runtime instance type (Child). This is method hiding, not polymorphism.'),

        ('Local Parameter Shadowing instance fields',
         'public class ShadowDemo {\n    int x = 10;\n    void test(int x) {\n        x = x + 5;\n        System.out.print(this.x + " " + x);\n    }\n    public static void main(String[] args) {\n        new ShadowDemo().test(20);\n    }\n}',
         '10 25',
         "The parameter 'x' shadows the instance variable. this.x refers to 10, whereas local variable x is incremented by 5 to 25."),

        ('Postfix vs Prefix operator precedence',
         'public class OperatorDemo {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a++ + ++a;\n        System.out.println("a=" + a + ", b=" + b);\n    }\n}',
         'a=7, b=12',
         'a++ evaluates as 5 (a becomes 6). Then ++a increments first, evaluating as 7 (a becomes 7). Total b = 5 + 7 = 12.'),

        ('Exception try-catch-finally returns',
         'public class FinallyDemo {\n    public static int test() {\n        try {\n            return 1;\n        } catch (Exception e) {\n            return 2;\n        } finally {\n            System.out.print("Finally ");\n        }\n    }\n    public static void main(String[] args) {\n        System.out.print(test());\n    }\n}',
         'Finally 1',
         "The finally block executes right before control returns from try. It prints 'Finally ' and then the returned value '1' is printed in main."),

        ('ArrayList set vs add index shift',
         'import java.util.ArrayList;\npublic class ListDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(10);\n        list.add(20);\n        list.set(1, 30);\n        list.add(1, 40);\n        System.out.println(list);\n    }\n}',
         '[10, 40, 30]',
         'Initially [10, 20]. list.set(1, 30) replaces 20 with 30 -> [10, 30]. list.add(1, 40) inserts 40 at index 1 shifting 30 -> [10, 40, 30].'),

        ('Recursion Accumulator Call',
         'public class RecursionDemo {\n    public static int calc(int n) {\n        if (n <= 0) return 0;\n        return n + calc(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(calc(4));\n    }\n}',
         '10',
         'calc(4) evaluates to 4 + 3 + 2 + 1 + 0 = 10.'),

        ('Math round, ceil and floor',
         'public class MathDemo {\n    public static void main(String[] args) {\n        double a = -1.5;\n        System.out.print(Math.floor(a) + " " + Math.ceil(a) + " " + Math.round(a));\n    }\n}',
         '-2.0 -1.0 -1',
         'Math.floor(-1.5) rounds down to -2.0. Math.ceil(-1.5) rounds up to -1.0. Math.round(-1.5) rounds to nearest integer towards positive infinity, which is -1.'),

        ('Static and Instance Initializer Blocks',
         'class Parent {\n    static {\n        System.out.print("Parent-Static ");\n    }\n    {\n        System.out.print("Parent-Instance ");\n    }\n    Parent() {\n        System.out.print("Parent-Constructor ");\n    }\n}\npublic class InitDemo {\n    public static void main(String[] args) {\n        new Parent();\n    }\n}',
         'Parent-Static Parent-Instance Parent-Constructor ',
         'Static blocks run once when the class is loaded. Instance blocks run before the constructor body runs. Constructor runs last.'),

        ('String Interning and Reference Equality',
         'public class StringInternDemo {\n    public static void main(String[] args) {\n        String s1 = new String("Java");\n        String s2 = s1.intern();\n        String s3 = "Java";\n        System.out.println((s1 == s2) + " " + (s2 == s3));\n    }\n}',
         'false true',
         's1 refers to a heap object. s1.intern() returns the canonical representation from the string pool, which is the same reference as the literal s3. Thus, s1==s2 is false, but s2==s3 is true.'),

        ('Overloading with Widening vs Boxed wrapper',
         'public class OverloadDemo {\n    static void printVal(double d) {\n        System.out.print("double ");\n    }\n    static void printVal(Integer i) {\n        System.out.print("Integer ");\n    }\n    public static void main(String[] args) {\n        int x = 10;\n        printVal(x);\n    }\n}',
         'double ',
         'Java prefers widening (int -> double) over autoboxing (int -> Integer) for compatibility with older versions of Java.'),

        ('Object Parameter Pass-by-Value Reference Change',
         'class Person {\n    String name;\n    Person(String name) { this.name = name; }\n}\npublic class PassRefDemo {\n    static void modify(Person p, String newName) {\n        p.name = newName;\n        p = new Person("Default");\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Ahmed");\n        modify(p, "Faky");\n        System.out.println(p.name);\n    }\n}',
         'Faky',
         "Java is pass-by-value. The method receives a copy of the reference. Modifying the object fields changes the original object, but re-assigning 'p' inside 'modify' only changes the local copy of the reference."),

        ('Two-Dimensional Array Length properties',
         'public class GridDemo {\n    public static void main(String[] args) {\n        int[][] grid = new int[3][5];\n        System.out.println(grid.length + " " + grid[0].length);\n    }\n}',
         '3 5',
         'grid.length returns the number of rows (3). grid[0].length returns the number of columns in the first row (5).'),

        ('Unsigned vs Signed Bitwise Shift operations',
         'public class ShiftDemo {\n    public static void main(String[] args) {\n        int val = -8;\n        System.out.println((val >> 1) == (val >>> 1));\n    }\n}',
         'false',
         '>> preserves the sign bit (sign-extends), so -8 >> 1 is -4. >>> shifts in zeros (zero-extends), producing a large positive number. They are not equal.'),

        ('Finally block return overriding try block return',
         'public class FinallyOverrideDemo {\n    public static int getValue() {\n        try {\n            return 5;\n        } finally {\n            return 10;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(getValue());\n    }\n}',
         '10',
         'A return statement in a finally block overrides any return statement in the try or catch block.'),

        ('StringBuilder modification vs String re-assignment',
         'public class StringBuildDemo {\n    public static void main(String[] args) {\n        String s = "A";\n        s += "B";\n        StringBuilder sb = new StringBuilder("C");\n        sb.append("D");\n        System.out.println(s + " " + sb);\n    }\n}',
         'AB CD',
         "s += 'B' creates a new String 'AB'. sb.append('D') modifies the original StringBuilder object to 'CD' in place."),

        ('Enum ordinal and custom override toString',
         'enum Color {\n    RED, GREEN, BLUE;\n    @Override\n    public String toString() {\n        return name().toLowerCase();\n    }\n}\npublic class EnumDemo {\n    public static void main(String[] args) {\n        Color c = Color.GREEN;\n        System.out.println(c.ordinal() + " " + c);\n    }\n}',
         '1 green',
         "c.ordinal() returns the index of the enum constant starting at 0 (GREEN is 1). The print statement implicitly calls toString(), which returns 'green' in lowercase."),

        ('Short-circuit logical AND vs non-short-circuit',
         'public class ShortCircuitDemo {\n    public static void main(String[] args) {\n        int x = 0, y = 0;\n        if ((x++ > 0) && (y++ > 0)) {\n            x += 10;\n        }\n        System.out.println("x=" + x + ", y=" + y);\n    }\n}',
         'x=1, y=0',
         'Because x++ > 0 evaluates to 0 > 0 (false), the short-circuit && operator skips the evaluation of the right-hand operand (y++ > 0). Thus, y remains 0 and x is incremented once to 1.'),

        ('Abstract class constructor invocation',
         'abstract class Base {\n    Base() {\n        System.out.print("Base ");\n    }\n}\nclass Derived extends Base {\n    Derived() {\n        System.out.print("Derived ");\n    }\n}\npublic class AbstractDemo {\n    public static void main(String[] args) {\n        new Derived();\n    }\n}',
         'Base Derived ',
         "Derived constructor implicitly calls super() which invokes the abstract parent class constructor first, printing 'Base ' followed by 'Derived '."),

        ('Array Initializer type inference',
         'public class ArrayInitDemo {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        int[] copy = arr;\n        copy[0] = 99;\n        System.out.println(arr[0]);\n    }\n}',
         '99',
         'Array assignment int[] copy = arr; copies the reference, meaning both variables point to the same array object on the heap. Modifying copy[0] alters arr[0].'),

        ('Static method inheritance and access',
         'class A {\n    static void hello() {\n        System.out.print("A ");\n    }\n}\nclass B extends A {}\npublic class StaticInheritDemo {\n    public static void main(String[] args) {\n        B.hello();\n    }\n}',
         'A ',
         "Static methods are inherited by subclasses in Java. Calling B.hello() successfully resolves to A.hello() and outputs 'A '."),

        ('Finally block runs even with Exception thrown',
         'public class TryCatchFinallyDemo {\n    public static void main(String[] args) {\n        try {\n            int a = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.print("Catch ");\n        } finally {\n            System.out.print("Finally ");\n        }\n    }\n}',
         'Catch Finally ',
         "The exception is caught by the ArithmeticException block, printing 'Catch ', then the finally block executes printing 'Finally '.")
    ]

    cc_questions_data = [
        ('Scanner Setup',
         'import java.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner reader = new Scanner();\n        int x = reader.nextInt();\n    }\n}',
         'import java.util.Scanner;\nScanner reader = new Scanner(System.in);',
         'Scanner belongs to java.util, not java. Scanner constructor needs System.in.'),

        ('Static vs. Non-Static Context',
         'public class Test {\n    void sayHello() {\n        System.out.println("Hello");\n    }\n    public static void main(String[] args) {\n        sayHello();\n    }\n}',
         'Test t = new Test();\nt.sayHello();',
         'Cannot call non-static method directly from static main without object instance.'),

        ('Constructor Return Type',
         'class Student {\n    String name;\n    public void Student(String n) {\n        name = n;\n    }\n}',
         'public Student(String n) {',
         'Constructors must not specify return type (not even void).'),

        ('Narrowing Casting',
         'public class Main {\n    public static void main(String[] args) {\n        double temperature = 36.6;\n        int temp = temperature;\n        System.out.println(temp);\n    }\n}',
         'int temp = (int) temperature;',
         'Narrowing casting double to int requires manual cast (int) to compile.'),

        ('Array Index Loop Bound',
         'public class Main {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int i = 0; i <= numbers.length; i++) {\n            System.out.println(numbers[i]);\n        }\n    }\n}',
         'for (int i = 0; i < numbers.length; i++) {',
         'Loop condition must use < instead of <= to prevent IndexOutOfBoundsException.'),

        ('Constructor Chaining order',
         'class Product {\n    String name;\n    double price;\n    Product(String name) {\n        this.name = name;\n    }\n    Product(String name, double price) {\n        this.price = price;\n        this(name);\n    }\n}',
         'Product(String name, double price) {\n    this(name);\n    this.price = price;\n}',
         'this(name) call must be the very first statement inside the constructor block.'),

        ('ArrayList Primitive Type Usage',
         'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<int> list = new ArrayList<int>();\n        list.add(10);\n    }\n}',
         'ArrayList<Integer> list = new ArrayList<Integer>();',
         'Generics do not support primitives. Use wrapper class Integer.'),

        ('LocalDate Initialization',
         'import java.time.LocalDate;\npublic class Main {\n    public static void main(String[] args) {\n        LocalDate today = new LocalDate();\n        System.out.println(today);\n    }\n}',
         'LocalDate today = LocalDate.now();',
         'LocalDate constructor is private. Use static factory method LocalDate.now().'),

        ('Instantiating an Abstract Class',
         'abstract class Shape {\n    abstract void draw();\n}\n// In Main:\nShape s = new Shape();',
         'Shape s = new Circle(); // Circle must extend Shape',
         'Abstract classes cannot be directly instantiated. You must instantiate a concrete subclass.'),

        ('Class Inheritance Keyword',
         'class Vehicle { }\nclass Car implements Vehicle { }',
         'class Car extends Vehicle { }',
         "Class inheritance uses 'extends'. 'implements' is for interfaces."),

        ('Weaker Access Privilege in Overriding',
         'class Parent {\n    public void show() {}\n}\nclass Child extends Parent {\n    void show() {} // Compiler error here\n}',
         'public void show() {',
         'A subclass overriding method cannot have a weaker access privilege than the superclass method. Since Parent.show() is public, Child.show() must also be public.'),

        ('Missing Return Statement in Value Method',
         'public class Calculator {\n    int add(int a, int b) {\n        int sum = a + b;\n        // Missing statement here\n    }\n}',
         'return sum;',
         'Methods that declare a non-void return type (like int) must explicitly return a value of that type using a return statement.'),

        ('Exception Catch Blocks Order Rules',
         'public class ExceptionDemo {\n    public static void main(String[] args) {\n        try {\n            int x = 5 / 0;\n        } catch (Exception e) {\n            System.out.println("Error");\n        } catch (ArithmeticException e) { // Compiler error\n            System.out.println("Math error");\n        }\n    }\n}',
         'Swap the catch blocks: catch ArithmeticException first, then Exception.',
         'Subclass exceptions (ArithmeticException) must be caught before their parent class exceptions (Exception) to prevent unreachable code compile errors.'),

        ('Final Instance Variable Reassignment',
         'public class FinalDemo {\n    final int LIMIT = 100;\n    void changeLimit() {\n        LIMIT = 200; // Compiler error here\n    }\n}',
         "Remove the assignment, or remove 'final' keyword from LIMIT declaration.",
         'Variables declared with the final keyword act as constants; once initialized, their values cannot be modified.'),

        ('Abstract Method in Concrete Class',
         'public class AbstractDemo {\n    abstract void run(); // Compiler error here\n}',
         'public abstract class AbstractDemo {',
         'If a class contains one or more abstract methods, the class itself must be explicitly declared as abstract using the abstract keyword.'),

        ('Body in Standard Interface Method',
         'interface Printable {\n    void print() {\n        System.out.println("Print"); // Compiler error\n    }\n}',
         'default void print() {',
         "Standard interface methods cannot contain a body in Java unless they are declared with the 'default' or 'static' modifiers."),

        ('String Value Comparison using Operator',
         'public class StringComp {\n    boolean isUser(String name) {\n        return name == "Ahmed"; // Logic bug\n    }\n}',
         'return name.equals("Ahmed");',
         "Strings are objects. The '==' operator compares references (memory addresses). Use the '.equals()' method to compare the actual character contents of strings."),

        ('ArrayList Element Access Syntax',
         'import java.util.ArrayList;\npublic class ArrayAccess {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("Java");\n        String item = list[0]; // Compiler error\n    }\n}',
         'String item = list.get(0);',
         'ArrayList elements cannot be accessed using the square bracket array syntax. Use the get(index) method instead.'),

        ('Incompatible Types in Class Casting',
         'class Animal {}\nclass Dog extends Animal {}\npublic class CastDemo {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Dog d = a; // Compiler error\n    }\n}',
         'Dog d = (Dog) a; // Or instantiating a new Dog',
         'A parent reference (Animal) cannot be assigned directly to a subclass reference (Dog) without an explicit downcast, which would compile but throw ClassCastException at runtime if the object is not a Dog.'),

        ('Local Variable Initialisation Scope',
         'public class ScopeDemo {\n    public static void main(String[] args) {\n        int total;\n        System.out.println(total); // Compiler error\n    }\n}',
         'int total = 0;',
         'Local variables declared inside methods are not initialized to default values by the compiler and must be explicitly initialized before reading them.')
    ]

    # Coding Tasks
    coding_tasks = [
        ("Calculator using Switch-Case Statement", 
         "Write a Java program called <b>SimpleCalculator.java</b> that reads two double numbers and an operator character (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) from the user. Print the computed result. If the user attempts to divide by zero, print <code>'Error: Division by zero'</code>. Use a <code>switch</code> statement to handle the operator input."),
        
        ("Array Operations (Min/Max/Average)", 
         "Write a Java program called <b>ArrayStats.java</b> that creates an array of 8 integers and reads their values from the user. Write logic using loops to find and print:<br/>"
         "1. The minimum value in the array.<br/>"
         "2. The maximum value in the array.<br/>"
         "3. The average value of the numbers in the array (returned as a double)."),
         
        ("Recursive Fibonacci Sequence", 
         "Write a Java program called <b>FibonacciRecursion.java</b> containing a recursive method named <code>fib(int n)</code> that calculates and returns the n-th Fibonacci number. In the <code>main</code> method, read the value of <code>n</code> from the user using <code>Scanner</code>, call the recursive method, and display the result. (Recall: <code>fib(0) = 0</code>, <code>fib(1) = 1</code>, and <code>fib(n) = fib(n-1) + fib(n-2)</code>)."),
         
        ("Object-Oriented Design & Encapsulation", 
         "Define a class called <b>Book</b> with private attributes: <code>title</code> (String), <code>author</code> (String), and <code>price</code> (double). Write:<br/>"
         "1. A parameterized constructor to initialize all three fields.<br/>"
         "2. A no-argument constructor that sets fields to default values (<code>'Unknown'</code>, <code>'None'</code>, <code>0.0</code>).<br/>"
         "3. Public getter and setter methods for each field. <b>In the setter for price, ensure that price cannot be negative</b>. If a negative price is entered, default it to <code>0.0</code>.<br/>"
         "4. In a test class, create instances of <code>Book</code> using both constructors, modify fields using setters, and display their details using getters."),
         
        ("ArrayList Sorting and Filtering", 
         "Write a Java program called <b>ArrayListFilter.java</b> that instantiates an <code>ArrayList</code> of integers. Read 6 integers from the user and append them to the list. Use a loop to scan the list and remove all odd numbers. Sort the list in ascending order using Collections class and print the filtered list using a for-each loop."),
         
        ("Working with the LocalDate API", 
         "Write a Java program called <b>DateDifference.java</b> that:<br/>"
         "1. Prints the current system date in the format <code>dd-MM-yyyy</code> using the <code>LocalDate</code> and <code>DateTimeFormatter</code> classes.<br/>"
         "2. Reads another date (year, month, day) from the user using <code>Scanner</code>.<br/>"
         "3. Checks and prints whether the entered date is <i>before</i>, <i>after</i>, or <i>equal to</i> the current system date."),

        ("Polymorphism with Shape and Circle",
         "Create a superclass called <b>Shape</b> with a method <code>area()</code>. Create a subclass called <b>Circle</b> that extends <code>Shape</code> and overrides the <code>area()</code> method to print <code>'Area of Circle'</code>. In a <code>main</code> method, demonstrate Run-time polymorphism by creating a <code>Circle</code> object using a <code>Shape</code> reference.")
    ]

    # Coding Answers
    code_ans1 = """import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        
        double result = 0;
        boolean validOperation = true;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero");
                    validOperation = false;
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                System.out.println("Error: Invalid operator.");
                validOperation = false;
        }
        
        if (validOperation) {
            System.out.println("Result = " + result);
        }
        scanner.close();
    }
}"""

    code_ans2 = """import java.util.Scanner;

public class ArrayStats {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[8];
        
        System.out.println("Please enter 8 integers:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }
        
        int min = numbers[0];
        int max = numbers[0];
        int sum = 0;
        
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) min = numbers[i];
            if (numbers[i] > max) max = numbers[i];
            sum += numbers[i];
        }
        
        double average = (double) sum / numbers.length;
        System.out.println("Minimum Value = " + min);
        System.out.println("Maximum Value = " + max);
        System.out.println("Average Value = " + average);
        scanner.close();
    }
}"""

    code_ans3 = """import java.util.Scanner;

public class FibonacciRecursion {
    public static int fib(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        return fib(n - 1) + fib(n - 2);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the value of n (non-negative): ");
        int n = scanner.nextInt();
        
        if (n < 0) {
            System.out.println("Invalid input. n must be non-negative.");
        } else {
            System.out.println("Fibonacci number at position " + n + " is: " + fib(n));
        }
        scanner.close();
    }
}"""

    code_ans4 = """class Book {
    private String title;
    private String author;
    private double price;
    
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        setPrice(price);
    }
    
    public Book() {
        this.title = "Unknown";
        this.author = "None";
        this.price = 0.0;
    }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    
    public double getPrice() { return price; }
    public void setPrice(double price) {
        if (price < 0) {
            this.price = 0.0;
        } else {
            this.price = price;
        }
    }
}

public class BookTest {
    public static void main(String[] args) {
        Book book1 = new Book("Java Programming", "Dr. Radwa Rady", 250.0);
        Book book2 = new Book();
        System.out.println("Book 1: " + book1.getTitle() + " | Price: " + book1.getPrice());
        book2.setPrice(-50.0);
        System.out.println("Book 2 Price after negative set: " + book2.getPrice());
    }
}"""

    code_ans5 = """import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class ArrayListFilter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> list = new ArrayList<>();
        
        System.out.println("Enter 6 integers:");
        for (int i = 0; i < 6; i++) {
            list.add(scanner.nextInt());
        }
        
        // Filter out odd numbers traversing backwards
        for (int i = list.size() - 1; i >= 0; i--) {
            if (list.get(i) % 2 != 0) {
                list.remove(i);
            }
        }
        
        // Sort list
        Collections.sort(list);
        
        System.out.println("Filtered & Sorted List (Even only):");
        for(Integer val : list) {
            System.out.println(val);
        }
        scanner.close();
    }
}"""

    code_ans6 = """import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class DateDifference {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        System.out.println("Current Date: " + today.format(formatter));
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter year: ");
        int year = scanner.nextInt();
        System.out.print("Enter month: ");
        int month = scanner.nextInt();
        System.out.print("Enter day: ");
        int day = scanner.nextInt();
        
        LocalDate userDate = LocalDate.of(year, month, day);
        
        if (userDate.isBefore(today)) {
            System.out.println(userDate + " is BEFORE current date.");
        } else if (userDate.isAfter(today)) {
            System.out.println(userDate + " is AFTER current date.");
        } else {
            System.out.println("Both dates are EQUAL.");
        }
        scanner.close();
    }
}"""

    code_ans7 = """class Shape {
    void area() {
        System.out.println("Area of Shape");
    }
}

class Circle extends Shape {
    @Override
    void area() {
        System.out.println("Area of Circle");
    }
}

public class Main {
    public static void main(String[] args) {
        // Run-time polymorphism: Shape reference pointing to Circle object
        Shape s = new Circle();
        s.area(); // Invokes overridden method in Circle
    }
}"""

    # ==========================================
    # WRITE STORY
    # ==========================================
    
    # Part A: True/False Questions
    story.append(Paragraph("PART A: TRUE OR FALSE QUESTIONS (80 QUESTIONS)", h1_style))
    story.append(Paragraph("<i>Directions: Write <b>T</b> if the statement is True, and <b>F</b> if the statement is False in the brackets provided.</i>", body_style))
    story.append(Spacer(1, 5))
    
    for i, (q, _, _) in enumerate(tf_questions, 1):
        q_text = f"<b>{i}.</b> {q} <font color=\"#7F8C8D\">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</font>"
        story.append(Paragraph(q_text, tf_style))
        if i % 30 == 0:
            story.append(Spacer(1, 1))

    story.append(PageBreak())

    # Part B: MCQs
    story.append(Paragraph("PART B: MULTIPLE CHOICE QUESTIONS (80 QUESTIONS)", h1_style))
    story.append(Paragraph("<i>Directions: Circle or write the letter of the correct option in the space provided.</i>", body_style))
    story.append(Spacer(1, 5))
    
    for i, item in enumerate(mcq_questions_processed, 1):
        story.append(Paragraph(f"<b>{i}.</b> {item['q']}", mcq_style))
        opts_text = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ".join(item['opts'])
        story.append(Paragraph(opts_text, mcq_opt_style))
        if i % 25 == 0:
            story.append(Spacer(1, 1))

    story.append(PageBreak())

    # Part C: Predict Output
    story.append(Paragraph("PART C: PREDICT THE OUTPUT", h1_style))
    story.append(Paragraph("<i>Directions: Analyze the following Java code snippets and write their exact printed output in the space provided.</i>", body_style))
    story.append(Spacer(1, 8))
    
    for i, (title, code, _, _) in enumerate(po_questions_data, 1):
        story.append(Paragraph(f"<b>Question {i}: {title}</b>", h2_style))
        story.append(make_code_block(code))
        story.append(Spacer(1, 4))
        story.append(Paragraph("<b>Expected Output:</b> __________________________________________________", body_style))
        story.append(Spacer(1, 12))

    story.append(PageBreak())

    # Part D: Correct Code
    story.append(Paragraph("PART D: CORRECT THE CODE", h1_style))
    story.append(Paragraph("<i>Directions: In each of the following code snippets, there are compile-time or logical errors. <b>Draw a line (underline) directly under the erroneous code</b> in the snippet, and then <b>write the fully corrected line</b> in the space provided.</i>", body_style))
    story.append(Spacer(1, 8))
    
    for i, (title, code, _, _) in enumerate(cc_questions_data, 1):
        story.append(Paragraph(f"<b>Question {i}: {title}</b>", h2_style))
        story.append(make_code_block(code))
        story.append(Spacer(1, 4))
        story.append(Paragraph("<b>Corrected Line(s):</b><br/>__________________________________________________________________", body_style))
        story.append(Spacer(1, 12))

    story.append(PageBreak())

    # Part E: Coding Tasks
    story.append(Paragraph("PART E: PROGRAMMING & CODE WRITING TASKS", h1_style))
    story.append(Paragraph("<i>Directions: Write a complete, syntactically correct Java program for each of the following tasks.</i>", body_style))
    story.append(Spacer(1, 8))
    
    for i, (title, desc) in enumerate(coding_tasks, 1):
        story.append(Paragraph(f"<b>Task {i}: {title}</b>", h2_style))
        story.append(Paragraph(desc, body_style))
        story.append(Spacer(1, 10))

    story.append(PageBreak())

    # ==========================================
    # PART F: DETAILED MODEL ANSWERS (ANSWER KEY)
    # ==========================================
    story.append(Paragraph("PART F: DETAILED MODEL ANSWERS (ANSWER KEY)", h1_style))
    story.append(Paragraph("<i>This section provides complete answers, logical explanations, and fully functional Java code for all the revision questions.</i>", body_style))
    story.append(Spacer(1, 8))

    # T/F Answers
    story.append(Paragraph("Part A: True or False Answer Key", h2_style))
    for i, (q, ans, exp) in enumerate(tf_questions, 1):
        ans_str = "T" if ans else "F"
        story.append(Paragraph(f"<b>{i}. {ans_str}</b> — {exp}", body_style))

    story.append(PageBreak())

    # MCQ Answers
    story.append(Paragraph("Part B: Multiple Choice Answer Key", h2_style))
    for i, (ans, exp) in enumerate(mcq_answers_processed, 1):
        story.append(Paragraph(f"<b>{ans}</b> — {exp}", body_style))

    story.append(PageBreak())

    # Predict Output Answers
    story.append(Paragraph("Part C: Predict the Output Answers", h2_style))
    for i, (title, code, ans, exp) in enumerate(po_questions_data, 1):
        story.append(Paragraph(f"<b>Question {i}: {title}</b>", h2_style))
        story.append(Paragraph(f"<b>Expected Output:</b>", body_style))
        story.append(make_code_block(ans))
        story.append(Paragraph(f"<b>Explanation:</b> {exp}", body_style))
        story.append(Spacer(1, 6))

    story.append(PageBreak())

    # Correct Code Answers
    story.append(Paragraph("Part D: Correct the Code Answers", h2_style))
    for i, (title, code, corr, exp) in enumerate(cc_questions_data, 1):
        story.append(Paragraph(f"<b>Question {i}: {title}</b>", h2_style))
        story.append(Paragraph("<b>Corrected Code:</b>", body_style))
        story.append(make_code_block(corr))
        story.append(Paragraph(f"<b>Explanation:</b> {exp}", body_style))
        story.append(Spacer(1, 6))

    story.append(PageBreak())

    # Coding Answers
    story.append(Paragraph("Part E: Programming & Code Writing Answers", h2_style))
    
    story.append(Paragraph("<b>Task 1 Code: SimpleCalculator.java</b>", h2_style))
    story.append(make_code_block(code_ans1))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Task 2 Code: ArrayStats.java</b>", h2_style))
    story.append(make_code_block(code_ans2))
    story.append(PageBreak())

    story.append(Paragraph("<b>Task 3 Code: FibonacciRecursion.java</b>", h2_style))
    story.append(make_code_block(code_ans3))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Task 4 Code: Book.java and BookTest.java</b>", h2_style))
    story.append(make_code_block(code_ans4))
    story.append(PageBreak())

    story.append(Paragraph("<b>Task 5 Code: ArrayListFilter.java</b>", h2_style))
    story.append(make_code_block(code_ans5))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Task 6 Code: DateDifference.java</b>", h2_style))
    story.append(make_code_block(code_ans6))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Task 7 Code: Polymorphism Shape &amp; Circle</b>", h2_style))
    story.append(make_code_block(code_ans7))

    # Build the document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF Generation complete. Output saved to: {output_path}")

if __name__ == "__main__":
    output_pdf = r"d:\Revision 2S\Java_Final_Revision_Question_Bank.pdf"
    create_revision_pdf(output_pdf)
