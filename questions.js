const javaQuestions = {
  "tf": [
    {
      "id": 1,
      "q": "Java is a platform-independent language because it compiles code into bytecode, which runs on the Java Virtual Machine (JVM).",
      "q_ar": "Java هي لغة مستقلة عن النظام الأساسي لأنها تقوم بتجميع التعليمات البرمجية في كود بايت، والذي يعمل على Java Virtual Machine (JVM).",
      "ans": true,
      "exp": "Widening casting (e.g., int to double) is safe and occurs automatically in Java."
    },
    {
      "id": 2,
      "q": "The JDK (Java Development Kit) contains the JRE (Java Runtime Environment) and development tools like the compiler.",
      "q_ar": "تحتوي JDK (Java Development Kit) على JRE (Java Runtime Environment) وأدوات التطوير مثل المترجم.",
      "ans": true,
      "exp": "The JDK is the full development bundle containing JRE (runtime) and tools like javac."
    },
    {
      "id": 3,
      "q": "Java is case-sensitive, meaning the identifier 'MyVariable' is different from 'myvariable'.",
      "q_ar": "Java حساسة لحالة الأحرف، مما يعني أن المعرف \"MyVariable\" يختلف عن \"myvariable\".",
      "ans": true,
      "exp": "Java is strictly case-sensitive for all class names, variables, and keywords."
    },
    {
      "id": 4,
      "q": "The main method signature in Java must always be declared as public static void main(String[] args).",
      "q_ar": "يجب دائمًا الإعلان عن توقيع الطريقة الرئيسية في Java باعتباره public static void main(String[] args).",
      "ans": true,
      "exp": "This is the exact signature recognized by the JVM to launch an application."
    },
    {
      "id": 5,
      "q": "Java uses a garbage collector to automatically manage memory and delete unused objects.",
      "q_ar": "تستخدم Java أداة تجميع البيانات المهملة لإدارة الذاكرة تلقائيًا وحذف الكائنات غير المستخدمة.",
      "ans": true,
      "exp": "Garbage collection is automatic in Java, releasing heap memory by cleaning unreferenced objects."
    },
    {
      "id": 6,
      "q": "The double data type is a 64-bit double-precision floating-point number.",
      "q_ar": "نوع البيانات المزدوج هو رقم فاصلة عائمة مزدوج الدقة 64 بت.",
      "ans": true,
      "exp": "double is the default floating-point type in Java and occupies 8 bytes (64 bits)."
    },
    {
      "id": 7,
      "q": "The byte data type in Java can store values from -128 to 127.",
      "q_ar": "يمكن لنوع البيانات بايت في Java تخزين القيم من -128 إلى 127.",
      "ans": true,
      "exp": "byte is an 8-bit signed integer with a range of -128 to 127."
    },
    {
      "id": 8,
      "q": "A float literal must be suffixed with 'f' or 'F' (e.g., 3.14f) to prevent compilation errors.",
      "q_ar": "يجب إضافة اللاحقة الحرفية العائمة بـ \"f\" أو \"F\" (على سبيل المثال، 3.14f) لمنع أخطاء الترجمة.",
      "ans": true,
      "exp": "Floating-point literals are treated as double by default. Assigning them to float requires the 'f' suffix."
    },
    {
      "id": 9,
      "q": "Widening casting (converting a smaller type to a larger size type, e.g., int to double) occurs automatically in Java.",
      "q_ar": "يحدث توسيع الصب (تحويل نوع أصغر إلى نوع أكبر حجمًا، على سبيل المثال، int إلى double) تلقائيًا في Java.",
      "ans": true,
      "exp": "Widening casting is safe, so the compiler performs it automatically."
    },
    {
      "id": 10,
      "q": "Narrowing casting (e.g., double to int) must be done manually using parentheses containing the target type.",
      "q_ar": "يجب أن يتم تضييق الصب (على سبيل المثال، مزدوج إلى int) يدويًا باستخدام الأقواس التي تحتوي على نوع الهدف.",
      "ans": true,
      "exp": "Narrowing casting causes a loss of precision, requiring manual casting (e.g., (int) value)."
    },
    {
      "id": 11,
      "q": "The expression (10 > 5 && 3 < 2) evaluates to false.",
      "q_ar": "تم تقييم التعبير (10 > 5 && 3 < 2) إلى خطأ.",
      "ans": true,
      "exp": "10 > 5 is true, but 3 < 2 is false. True AND False yields False."
    },
    {
      "id": 12,
      "q": "The ternary operator (?:) acts as a shorthand for simple if-else statements.",
      "q_ar": "يعمل العامل الثلاثي (؟:) بمثابة اختصار لعبارات if-else البسيطة.",
      "ans": true,
      "exp": "The ternary operator evaluates condition ? option1 : option2, acting as a short if-else."
    },
    {
      "id": 13,
      "q": "To read a single word from the console, the next() method of Scanner is used.",
      "q_ar": "لقراءة كلمة واحدة من وحدة التحكم، يتم استخدام الطريقة التالية () الخاصة بـ Scanner.",
      "ans": true,
      "exp": "next() reads input tokens separated by whitespace delimiters."
    },
    {
      "id": 14,
      "q": "The nextLine() method of Scanner reads the input until the end of the line.",
      "q_ar": "تقوم طريقة nextLine () الخاصة بالماسح الضوئي بقراءة الإدخال حتى نهاية السطر.",
      "ans": true,
      "exp": "nextLine() reads everything up to the next line separator character."
    },
    {
      "id": 15,
      "q": "A Scanner object must be created by passing System.in to its constructor to read from the console.",
      "q_ar": "يجب إنشاء كائن الماسح الضوئي عن طريق تمرير System.in إلى مُنشئه للقراءة من وحدة التحكم.",
      "ans": true,
      "exp": "System.in represents the standard keyboard input stream."
    },
    {
      "id": 16,
      "q": "In a switch-case statement, the break statement is optional but omitting it causes execution to 'fall through' to the next case.",
      "q_ar": "في عبارة تبديل الحالة، تكون عبارة Break اختيارية ولكن حذفها يؤدي إلى \"سقوط\" التنفيذ إلى الحالة التالية.",
      "ans": true,
      "exp": "Without break, execution executes subsequent case blocks sequentially (fall-through)."
    },
    {
      "id": 17,
      "q": "A while loop checks the condition before executing the loop body.",
      "q_ar": "تقوم حلقة while بالتحقق من الحالة قبل تنفيذ نص الحلقة.",
      "ans": true,
      "exp": "The while loop is a pre-test loop; if the condition is false initially, the body never runs."
    },
    {
      "id": 18,
      "q": "A do-while loop executes the loop body at least once, even if the condition is false initially.",
      "q_ar": "تقوم حلقة do-while بتنفيذ نص الحلقة مرة واحدة على الأقل، حتى لو كان الشرط خاطئًا في البداية.",
      "ans": true,
      "exp": "The do-while loop is a post-test loop; it runs the body once before checking the condition."
    },
    {
      "id": 19,
      "q": "An infinite loop will occur if the condition of a while loop is always true.",
      "q_ar": "ستحدث حلقة لا نهائية إذا كان شرط الحلقة while صحيحًا دائمًا.",
      "ans": true,
      "exp": "If the condition never becomes false, the loop will run endlessly unless broken."
    },
    {
      "id": 20,
      "q": "The break statement inside a loop immediately terminates the loop.",
      "q_ar": "عبارة Break داخل الحلقة تنهي الحلقة على الفور.",
      "ans": true,
      "exp": "break causes immediate exit from the innermost loop block."
    },
    {
      "id": 21,
      "q": "The continue statement skips the remaining code in the current iteration and jumps to the next iteration of the loop.",
      "q_ar": "تتخطى عبارة continue الكود المتبقي في التكرار الحالي وتنتقل إلى التكرار التالي للحلقة.",
      "ans": true,
      "exp": "continue stops the current run and branches back to the update/condition check."
    },
    {
      "id": 22,
      "q": "Nested loops are loops placed inside another loop.",
      "q_ar": "الحلقات المتداخلة هي حلقات موضوعة داخل حلقة أخرى.",
      "ans": true,
      "exp": "This is the definition of nested loops (e.g., outer and inner loops)."
    },
    {
      "id": 23,
      "q": "A do-while loop ends with a semicolon after the condition check.",
      "q_ar": "تنتهي حلقة do-while بفاصلة منقوطة بعد التحقق من الحالة.",
      "ans": true,
      "exp": "Syntax: do { ... } while(condition); (requires semicolon)."
    },
    {
      "id": 24,
      "q": "The for-each loop is specifically designed to iterate through arrays and collections.",
      "q_ar": "تم تصميم حلقة for-each خصيصًا للتكرار عبر المصفوفات والمجموعات.",
      "ans": true,
      "exp": "for-each (enhanced for loop) simplifies array/collection traversal sequentially."
    },
    {
      "id": 25,
      "q": "Once an array is created in Java, its capacity cannot be dynamically resized.",
      "q_ar": "بمجرد إنشاء مصفوفة في Java، لا يمكن تغيير حجمها ديناميكيًا.",
      "ans": true,
      "exp": "Java primitive arrays are static and fixed in size upon creation."
    },
    {
      "id": 26,
      "q": "An array of objects has its elements initialized to null by default.",
      "q_ar": "تتم تهيئة مجموعة من الكائنات لعناصرها لتكون خالية بشكل افتراضي.",
      "ans": true,
      "exp": "Object reference elements default to null."
    },
    {
      "id": 27,
      "q": "An ArrayIndexOutOfBoundsException occurs if you try to access arr[5] in an array of size 5.",
      "q_ar": "يحدث ArrayIndexOutOfBoundsException إذا حاولت الوصول إلى arr[5] في مصفوفة بحجم 5.",
      "ans": true,
      "exp": "Indexes range from 0 to N-1 (4). Accessing index 5 is out of bounds."
    },
    {
      "id": 28,
      "q": "Array elements are stored in contiguous memory locations.",
      "q_ar": "يتم تخزين عناصر المصفوفة في مواقع ذاكرة متجاورة.",
      "ans": true,
      "exp": "Arrays allocate a single contiguous block of memory for all elements."
    },
    {
      "id": 29,
      "q": "An array of size 10 has valid indexes ranging from 0 to 9.",
      "q_ar": "تحتوي المصفوفة ذات الحجم 10 على فهارس صالحة تتراوح من 0 إلى 9.",
      "ans": true,
      "exp": "An array of size 10 has valid indexes ranging from 0 to N-1 (9)."
    },
    {
      "id": 30,
      "q": "An array is a reference type, not a primitive type.",
      "q_ar": "المصفوفة هي نوع مرجعي، وليست نوعًا بدائيًا.",
      "ans": true,
      "exp": "All arrays are objects in Java, meaning they are reference types allocated on the heap."
    },
    {
      "id": 31,
      "q": "A method signature consists of the method name and its parameter list.",
      "q_ar": "يتكون توقيع الطريقة من اسم الطريقة وقائمة المعلمات الخاصة بها.",
      "ans": true,
      "exp": "Signature includes method name, parameter types, count, and order."
    },
    {
      "id": 32,
      "q": "Method overloading allows multiple methods to have the same name but different parameter lists.",
      "q_ar": "يسمح التحميل الزائد للأسلوب لطرق متعددة بأن يكون لها نفس الاسم ولكن بقوائم معلمات مختلفة.",
      "ans": true,
      "exp": "This is the definition of method overloading."
    },
    {
      "id": 33,
      "q": "A recursive method must always have a base case to terminate execution and prevent StackOverflowError.",
      "q_ar": "يجب أن تحتوي الطريقة العودية دائمًا على حالة أساسية لإنهاء التنفيذ ومنع StackOverflowError.",
      "ans": true,
      "exp": "The base case stops the recursive process; without it, stack overflow occurs."
    },
    {
      "id": 34,
      "q": "Variable arguments (varargs) in a method must be the last parameter in the parameter list.",
      "q_ar": "يجب أن تكون الوسائط المتغيرة (varargs) في الطريقة هي المعلمة الأخيرة في قائمة المعلمات.",
      "ans": true,
      "exp": "To prevent ambiguity, the varargs parameter (type... name) must be the final parameter."
    },
    {
      "id": 35,
      "q": "In recursion, the method calls itself directly or indirectly.",
      "q_ar": "في العودية، تستدعي الطريقة نفسها بشكل مباشر أو غير مباشر.",
      "ans": true,
      "exp": "A recursive method calls itself to compute smaller subproblems."
    },
    {
      "id": 36,
      "q": "Method parameters in Java are passed by value.",
      "q_ar": "يتم تمرير معلمات الطريقة في Java حسب القيمة.",
      "ans": true,
      "exp": "Java is strictly pass-by-value. It passes copies of parameters or copies of object references."
    },
    {
      "id": 37,
      "q": "Encapsulation is achieved by making class variables private and exposing them via public getters and setters.",
      "q_ar": "يتم تحقيق التغليف عن طريق جعل متغيرات الفصل خاصة وكشفها عبر الحروف العامة والمحددات.",
      "ans": true,
      "exp": "Encapsulation hides fields and exposes them only through controlled public methods."
    },
    {
      "id": 38,
      "q": "A class constructor must have the exact same name as the class and cannot specify a return type, not even void.",
      "q_ar": "يجب أن يكون لمنشئ الفئة نفس اسم الفئة تمامًا ولا يمكنه تحديد نوع الإرجاع، ولا حتى باطلاً.",
      "ans": true,
      "exp": "Constructors must match the class name and have no return type declaration."
    },
    {
      "id": 39,
      "q": "Static variables are shared among all instances of a class.",
      "q_ar": "تتم مشاركة المتغيرات الثابتة بين جميع مثيلات الفصل.",
      "ans": true,
      "exp": "A static variable is class-level; there is only one copy shared by all objects."
    },
    {
      "id": 40,
      "q": "An object is an instance of a class.",
      "q_ar": "الكائن هو مثيل لفئة.",
      "ans": true,
      "exp": "The class is the template, and the object is a concrete instance of that class."
    },
    {
      "id": 41,
      "q": "In Java, source code files must be saved with the .class extension before compilation.",
      "q_ar": "في Java، يجب حفظ ملفات التعليمات البرمجية المصدر بامتداد .class قبل الترجمة.",
      "ans": false,
      "exp": "Source code files are saved with .java extension. Compiled files have .class extension."
    },
    {
      "id": 42,
      "q": "A subclass inherits the properties and methods of its superclass using the 'implements' keyword.",
      "q_ar": "ترث الفئة الفرعية خصائص وأساليب فئتها الفائقة باستخدام الكلمة الأساسية \"تنفذ\".",
      "ans": false,
      "exp": "A subclass inherits from a superclass using the 'extends' keyword. 'implements' is used for interfaces."
    },
    {
      "id": 43,
      "q": "You can create an object (instantiate) directly from an abstract class or an interface.",
      "q_ar": "يمكنك إنشاء كائن (إنشاء مثيل) مباشرة من فئة مجردة أو واجهة.",
      "ans": false,
      "exp": "Abstract classes and interfaces cannot be directly instantiated using the 'new' keyword."
    },
    {
      "id": 44,
      "q": "In Java, array indexes begin at 1.",
      "q_ar": "في Java، تبدأ فهارس المصفوفة عند 1.",
      "ans": false,
      "exp": "Array and ArrayList indexes always begin at 0 in Java."
    },
    {
      "id": 45,
      "q": "A switch statement must always have a 'default' case to compile successfully.",
      "q_ar": "يجب أن تحتوي عبارة التبديل دائمًا على حالة \"افتراضية\" لتجميعها بنجاح.",
      "ans": false,
      "exp": "The default case in a switch statement is optional and is not required for compilation."
    },
    {
      "id": 46,
      "q": "Every Java statement must end with a colon (:).",
      "q_ar": "يجب أن تنتهي كل عبارة Java بنقطتين (:).",
      "ans": false,
      "exp": "Every executable Java statement must end with a semicolon (;), not a colon."
    },
    {
      "id": 47,
      "q": "Java supports multiple inheritance of classes directly using the extends keyword.",
      "q_ar": "تدعم Java الوراثة المتعددة للفئات مباشرةً باستخدام الكلمة الأساسية الممتدة.",
      "ans": false,
      "exp": "Java classes can only inherit from one superclass to avoid the diamond problem of multiple inheritance."
    },
    {
      "id": 48,
      "q": "In Java, String is a primitive data type.",
      "q_ar": "في Java، السلسلة هي نوع بيانات بدائي.",
      "ans": false,
      "exp": "String is a class (reference type) inside java.lang."
    },
    {
      "id": 49,
      "q": "The default value of a boolean instance variable in a class is true.",
      "q_ar": "القيمة الافتراضية لمتغير المثيل المنطقي في الفصل الدراسي صحيحة.",
      "ans": false,
      "exp": "Uninitialized class instance booleans default to false."
    },
    {
      "id": 50,
      "q": "A local variable declared inside a method is initialized to its default type value automatically.",
      "q_ar": "تتم تهيئة المتغير المحلي المعلن داخل إحدى الطرق إلى قيمة النوع الافتراضية الخاصة به تلقائيًا.",
      "ans": false,
      "exp": "Local variables do not receive default values; they must be explicitly initialized before use."
    },
    {
      "id": 51,
      "q": "Variables declared with the final keyword can have their values reassigned multiple times.",
      "q_ar": "يمكن إعادة تعيين قيم المتغيرات المعلنة باستخدام الكلمة الأساسية النهائية عدة مرات.",
      "ans": false,
      "exp": "final variables act as constants; once assigned, their value cannot be changed."
    },
    {
      "id": 52,
      "q": "The char data type stores single characters and is enclosed in double quotes.",
      "q_ar": "يقوم نوع البيانات char بتخزين أحرف مفردة ويتم وضعه بين علامتي اقتباس مزدوجتين.",
      "ans": false,
      "exp": "char literals use single quotes (e.g., 'A'). Double quotes are used for String literals."
    },
    {
      "id": 53,
      "q": "A boolean variable can store any non-zero integer value representing true.",
      "q_ar": "يمكن للمتغير المنطقي تخزين أي قيمة عددية غير صفرية تمثل صحيحًا.",
      "ans": false,
      "exp": "In Java, boolean variables can only be true or false. They cannot be converted from integers."
    },
    {
      "id": 54,
      "q": "The expression 5 / 2 evaluates to 2.5 in Java.",
      "q_ar": "يتم تقييم التعبير 5/2 إلى 2.5 في Java.",
      "ans": false,
      "exp": "Since both operands are integers, integer division is performed, yielding 2.0 (or 2)."
    },
    {
      "id": 55,
      "q": "The modulus operator (%) returns the quotient of a division.",
      "q_ar": "يقوم عامل المعامل (%) بإرجاع حاصل القسمة.",
      "ans": false,
      "exp": "The modulus operator returns the remainder of the division, not the quotient."
    },
    {
      "id": 56,
      "q": "The prefix increment operator (++x) increments the value of x after it is used in the expression.",
      "q_ar": "يعمل عامل زيادة البادئة (++x) على زيادة قيمة x بعد استخدامه في التعبير.",
      "ans": false,
      "exp": "Prefix increment (++x) increments first, then uses the value. Postfix (x++) uses it first, then increments."
    },
    {
      "id": 57,
      "q": "The logical AND operator in Java is represented by a single ampersand (&) for short-circuit evaluation.",
      "q_ar": "يتم تمثيل عامل التشغيل AND المنطقي في Java بعلامة عطف واحدة (&) لتقييم الدائرة القصيرة.",
      "ans": false,
      "exp": "Short-circuit logical AND is represented by double ampersands (&&). Single ampersand (&) is bitwise AND."
    },
    {
      "id": 58,
      "q": "The assignment operator (=) is the same as the comparison operator (==).",
      "q_ar": "عامل التخصيص (=) هو نفس عامل المقارنة (==).",
      "ans": false,
      "exp": "= is used to assign values to variables. == is used to compare values for equality."
    },
    {
      "id": 59,
      "q": "You can cast a boolean value to an int in Java.",
      "q_ar": "يمكنك إرسال قيمة منطقية إلى int في Java.",
      "ans": false,
      "exp": "Java does not support casting between boolean and numeric data types."
    },
    {
      "id": 60,
      "q": "The Scanner class is located inside the java.lang package and does not require an import statement.",
      "q_ar": "توجد فئة Scanner داخل حزمة java.lang ولا تتطلب عبارة استيراد.",
      "ans": false,
      "exp": "Scanner is inside the java.util package and must be imported explicitly."
    },
    {
      "id": 61,
      "q": "The scanner.nextInt() method will automatically skip non-integer inputs without throwing exceptions.",
      "q_ar": "سيقوم التابع scan.nextInt()‎ بتخطي المدخلات غير الصحيحة تلقائيًا دون طرح استثناءات.",
      "ans": false,
      "exp": "nextInt() throws an InputMismatchException if the user inputs non-integer data."
    },
    {
      "id": 62,
      "q": "The switch statement in Java can accept float or double values as its control expression.",
      "q_ar": "يمكن أن تقبل عبارة التبديل في Java القيم العائمة أو المزدوجة كتعبير تحكم خاص بها.",
      "ans": false,
      "exp": "The switch statement does not accept double, float, or boolean values."
    },
    {
      "id": 63,
      "q": "An if statement must always have an associated else block.",
      "q_ar": "يجب أن تحتوي عبارة if دائمًا على كتلة else مرتبطة بها.",
      "ans": false,
      "exp": "An if statement can stand alone to execute code conditionally."
    },
    {
      "id": 64,
      "q": "The default case in a switch statement must always be placed at the very end of the switch block.",
      "q_ar": "يجب دائمًا وضع الحالة الافتراضية في بيان التبديل في نهاية كتلة التبديل.",
      "ans": false,
      "exp": "default can be placed anywhere in the switch, though putting it last is standard practice."
    },
    {
      "id": 65,
      "q": "The variable declared in the initialization of a for loop is accessible outside the loop body.",
      "q_ar": "يمكن الوصول إلى المتغير المعلن في تهيئة حلقة for خارج نص الحلقة.",
      "ans": false,
      "exp": "Variables declared in the initialization block are scoped strictly to the loop block."
    },
    {
      "id": 66,
      "q": "To get the number of elements in an array, you use the length() method.",
      "q_ar": "للحصول على عدد العناصر في المصفوفة، يمكنك استخدام الأسلوب length().",
      "ans": false,
      "exp": "Arrays use the length property (arr.length). length() is a method of the String class."
    },
    {
      "id": 67,
      "q": "It is possible to store elements of different data types in a single primitive array.",
      "q_ar": "من الممكن تخزين عناصر من أنواع بيانات مختلفة في مصفوفة بدائية واحدة.",
      "ans": false,
      "exp": "Java arrays are homogeneous; they can only store elements of the same declared type."
    },
    {
      "id": 68,
      "q": "You can declare an array as int arr[10] = new int[];.",
      "q_ar": "يمكنك تعريف المصفوفة كـ int arr[10] = new int[];.",
      "ans": false,
      "exp": "This is invalid syntax. The correct syntax is: int[] arr = new int[10];"
    },
    {
      "id": 69,
      "q": "A method declared with a void return type cannot contain a return statement.",
      "q_ar": "الطريقة المعلنة بنوع إرجاع فارغ لا يمكن أن تحتوي على عبارة إرجاع.",
      "ans": false,
      "exp": "A void method can use 'return;' (without a value) to exit early."
    },
    {
      "id": 70,
      "q": "Overloaded methods must have different return types to compile.",
      "q_ar": "يجب أن تحتوي الأساليب المحملة بشكل زائد على أنواع إرجاع مختلفة لتجميعها.",
      "ans": false,
      "exp": "Overloaded methods are identified by parameters. Return types alone are not checked for overloading."
    },
    {
      "id": 71,
      "q": "Local variables declared inside a method are visible to all other methods of the same class.",
      "q_ar": "تكون المتغيرات المحلية المعلنة داخل إحدى الطرق مرئية لجميع الطرق الأخرى من نفس الفئة.",
      "ans": false,
      "exp": "Local variables are scoped strictly to the method/block where declared."
    },
    {
      "id": 72,
      "q": "You can call a non-static method directly from static main without creating an object instance.",
      "q_ar": "يمكنك استدعاء طريقة غير ثابتة مباشرة من static main دون إنشاء مثيل كائن.",
      "ans": false,
      "exp": "Static methods cannot directly access non-static members. An object must be created first."
    },
    {
      "id": 73,
      "q": "If a class has a parameterized constructor, the compiler will still automatically generate a default no-argument constructor.",
      "q_ar": "إذا كان للفئة مُنشئ ذو معلمات، فسيظل المترجم يقوم تلقائيًا بإنشاء مُنشئ افتراضي بدون وسيطات.",
      "ans": false,
      "exp": "Declaring any constructor removes the automatic default no-arg constructor."
    },
    {
      "id": 74,
      "q": "A static method can access non-static instance variables directly.",
      "q_ar": "يمكن للطريقة الثابتة الوصول إلى متغيرات المثيلات غير الثابتة مباشرةً.",
      "ans": false,
      "exp": "Static methods cannot directly access instance fields; they need a concrete object reference."
    },
    {
      "id": 75,
      "q": "Constructor overloading is not allowed in Java.",
      "q_ar": "لا يُسمح بالتحميل الزائد للمنشئ في Java.",
      "ans": false,
      "exp": "Constructors can be overloaded like any other method by varying parameter lists."
    },
    {
      "id": 76,
      "q": "The this() constructor call can be placed on any line inside a constructor block.",
      "q_ar": "يمكن وضع استدعاء المنشئ this() على أي سطر داخل كتلة المنشئ.",
      "ans": false,
      "exp": "The this() call must be the absolute first statement inside the constructor."
    },
    {
      "id": 77,
      "q": "ArrayList elements can store primitive data types directly (e.g., ArrayList<int>).",
      "q_ar": "يمكن لعناصر ArrayList تخزين أنواع البيانات البدائية مباشرة (على سبيل المثال، ArrayList).",
      "ans": false,
      "exp": "ArrayLists only store objects, requiring wrapper class Integer."
    },
    {
      "id": 78,
      "q": "To find the number of elements in an ArrayList, you use the length property.",
      "q_ar": "للعثور على عدد العناصر في ArrayList، يمكنك استخدام خاصية الطول.",
      "ans": false,
      "exp": "size() returns the number of elements in the ArrayList collection. length is for arrays."
    },
    {
      "id": 79,
      "q": "The LocalDate class from java.time has a public constructor allowing 'new LocalDate()'.",
      "q_ar": "تحتوي فئة LocalDate من java.time على مُنشئ عام يسمح بـ \"New LocalDate()\".",
      "ans": false,
      "exp": "LocalDate constructor is private. You must instantiate using LocalDate.now() or LocalDate.of()."
    },
    {
      "id": 80,
      "q": "ArrayList belongs to the java.lang package and does not require an import.",
      "q_ar": "ينتمي ArrayList إلى حزمة java.lang ولا يتطلب استيرادًا.",
      "ans": false,
      "exp": "ArrayList belongs to java.util and must be imported explicitly."
    }
  ],
  "mcq": [
    {
      "id": 1,
      "q": "Which component is responsible for running Java bytecode?",
      "q_ar": "ما هو المكون المسؤول عن تشغيل Java bytecode؟",
      "correct": "JVM (Java Virtual Machine)",
      "opts": [
        "JVM (Java Virtual Machine)",
        "JDK (Java Development Kit)",
        "JRE (Java Runtime Environment)",
        "Javac (Java Compiler)"
      ],
      "exp": "The JVM is the engine that executes compiled Java bytecode class files."
    },
    {
      "id": 2,
      "q": "Which tool compiles Java source code (.java) into bytecode (.class)?",
      "q_ar": "ما هي الأداة التي تجمع كود مصدر Java (.java) إلى كود بايت (.class)؟",
      "correct": "javac",
      "opts": [
        "javac",
        "java",
        "jar",
        "javadoc"
      ],
      "exp": "javac is the Java Compiler executable."
    },
    {
      "id": 3,
      "q": "What is the correct file extension for a compiled Java class file?",
      "q_ar": "ما هو امتداد الملف الصحيح لملف فئة Java المترجم؟",
      "correct": ".class",
      "opts": [
        ".class",
        ".java",
        ".txt",
        ".obj"
      ],
      "exp": ".class contains compiled JVM bytecode."
    },
    {
      "id": 4,
      "q": "Which of the following is a valid identifier in Java?",
      "q_ar": "أي مما يلي يعد معرفًا صالحًا في Java؟",
      "correct": "_myVar",
      "opts": [
        "_myVar",
        "2var",
        "class",
        "my-var"
      ],
      "exp": "Identifiers cannot start with numbers (A), contain hyphens (D), or use keywords (C)."
    },
    {
      "id": 5,
      "q": "What is the purpose of the main method in Java?",
      "q_ar": "ما هو الغرض من الطريقة الرئيسية في جافا؟",
      "correct": "Entry point for program execution",
      "opts": [
        "Entry point for program execution",
        "To import packages",
        "To declare variables",
        "To define class methods"
      ],
      "exp": "The main method is the execution entry point called by the JVM."
    },
    {
      "id": 6,
      "q": "Which of the following is NOT a primitive data type in Java?",
      "q_ar": "أي مما يلي ليس من أنواع البيانات البدائية في Java؟",
      "correct": "String",
      "opts": [
        "String",
        "byte",
        "boolean",
        "short"
      ],
      "exp": "String is a class (reference type) inside java.lang."
    },
    {
      "id": 7,
      "q": "What happens during narrowing casting in Java?",
      "q_ar": "ماذا يحدث أثناء تضييق الصب في جاوة؟",
      "correct": "It must be done manually by placing the type in parentheses.",
      "opts": [
        "It must be done manually by placing the type in parentheses.",
        "It happens automatically.",
        "It is not allowed.",
        "It converts a String to an int."
      ],
      "exp": "Narrowing casting converts a larger type to smaller (e.g., double to int) and must be explicit: (int) value."
    },
    {
      "id": 8,
      "q": "Which method is used to retrieve an element from a specific index in an ArrayList?",
      "q_ar": "ما الطريقة المستخدمة لاسترداد عنصر من فهرس محدد في ArrayList؟",
      "correct": "get()",
      "opts": [
        "get()",
        "retrieve()",
        "set()",
        "fetch()"
      ],
      "exp": "The get(index) method returns the element at that index."
    },
    {
      "id": 9,
      "q": "How do you find out the number of elements in an ArrayList named 'list'?",
      "q_ar": "كيف يمكنك معرفة عدد العناصر في ArrayList المسماة \"قائمة\"؟",
      "correct": "list.size()",
      "opts": [
        "list.size()",
        "list.length",
        "list.length()",
        "list.getSize()"
      ],
      "exp": "size() returns active elements count. length is for arrays, length() is for String."
    },
    {
      "id": 10,
      "q": "Which keyword is used to refer to the current object in a method or constructor?",
      "q_ar": "ما هي الكلمة الأساسية المستخدمة للإشارة إلى الكائن الحالي في طريقة أو مُنشئ؟",
      "correct": "this",
      "opts": [
        "this",
        "super",
        "static",
        "final"
      ],
      "exp": "this is a reference to the active object instance."
    },
    {
      "id": 11,
      "q": "What is the process of hiding internal details and showing only the essential functionality?",
      "q_ar": "ما هي عملية إخفاء التفاصيل الداخلية وإظهار الوظائف الأساسية فقط؟",
      "correct": "Abstraction",
      "opts": [
        "Abstraction",
        "Inheritance",
        "Polymorphism",
        "Encapsulation"
      ],
      "exp": "Abstraction focuses on what an object does rather than how it does it."
    },
    {
      "id": 12,
      "q": "Which keyword is used by a class to use an interface?",
      "q_ar": "ما هي الكلمة الأساسية التي يستخدمها الفصل لاستخدام الواجهة؟",
      "correct": "implements",
      "opts": [
        "implements",
        "extends",
        "inherits",
        "imports"
      ],
      "exp": "A class implements an interface, and extends another class."
    },
    {
      "id": 13,
      "q": "Method Overriding is an example of:",
      "q_ar": "يعد تجاوز الطريقة مثالاً على:",
      "correct": "Run-time Polymorphism",
      "opts": [
        "Run-time Polymorphism",
        "Compile-time Polymorphism",
        "Encapsulation",
        "None of the above"
      ],
      "exp": "Overriding is resolved dynamically at runtime (Runtime Polymorphism)."
    },
    {
      "id": 14,
      "q": "If you want to sort an ArrayList alphabetically or numerically, which class provides the sort() method?",
      "q_ar": "إذا كنت تريد فرز ArrayList أبجديًا أو رقميًا، فما هي الفئة التي توفر طريقة الفرز ()؟",
      "correct": "Collections",
      "opts": [
        "Collections",
        "Arrays",
        "ArrayList",
        "Sorter"
      ],
      "exp": "Collections.sort() sorts lists in ascending order."
    },
    {
      "id": 15,
      "q": "Which statement is true about an Interface in Java?",
      "q_ar": "ما العبارة الصحيحة بشأن الواجهة في Java؟",
      "correct": "Its methods are abstract by default.",
      "opts": [
        "Its methods are abstract by default.",
        "It can have instance variables.",
        "It can have constructors.",
        "A class can only implement one interface."
      ],
      "exp": "Interface methods are public and abstract by default (without body)."
    },
    {
      "id": 16,
      "q": "What is the size of the float data type in Java?",
      "q_ar": "ما هو حجم نوع البيانات العائمة في Java؟",
      "correct": "32 bits",
      "opts": [
        "32 bits",
        "8 bits",
        "16 bits",
        "64 bits"
      ],
      "exp": "float is 32-bit single-precision. double is 64-bit."
    },
    {
      "id": 17,
      "q": "What is the default value of an uninitialized instance boolean variable in a class?",
      "q_ar": "ما هي القيمة الافتراضية لمتغير منطقي غير مهيأ في الفصل؟",
      "correct": "false",
      "opts": [
        "false",
        "true",
        "null",
        "0"
      ],
      "exp": "Instance booleans default to false in Java."
    },
    {
      "id": 18,
      "q": "Which data type has the largest value range in Java?",
      "q_ar": "ما نوع البيانات الذي يحتوي على أكبر نطاق قيمة في Java؟",
      "correct": "double",
      "opts": [
        "double",
        "long",
        "int",
        "float"
      ],
      "exp": "double holds 64-bit floating point numbers, offering the widest range."
    },
    {
      "id": 19,
      "q": "What is the valid range of values for a byte variable?",
      "q_ar": "ما هو النطاق الصالح للقيم لمتغير البايت؟",
      "correct": "-128 to 127",
      "opts": [
        "-128 to 127",
        "-32768 to 32767",
        "0 to 255",
        "-2147483648 to 2147483647"
      ],
      "exp": "byte is an 8-bit signed integer with a range of -128 to 127."
    },
    {
      "id": 20,
      "q": "Which of the following represents narrowing type casting?",
      "q_ar": "أي مما يلي يمثل صب النوع الضيق؟",
      "correct": "int i = (int) 5.5;",
      "opts": [
        "int i = (int) 5.5;",
        "double d = 5;",
        "float f = 10L;",
        "double d = 'a';"
      ],
      "exp": "double (8 bytes) to int (4 bytes) is narrowing and needs explicit (int) cast."
    },
    {
      "id": 21,
      "q": "What is the value of result after: int result = 12 + 3 * 2;?",
      "q_ar": "ما هي قيمة النتيجة بعد: int result = 12 + 3 * 2;؟",
      "correct": "18",
      "opts": [
        "18",
        "30",
        "15",
        "24"
      ],
      "exp": "Multiplication first: 3 * 2 = 6. Then 12 + 6 = 18."
    },
    {
      "id": 22,
      "q": "What is the result of the mathematical expression: 17 % 5?",
      "q_ar": "ما نتيجة التعبير الرياضي: 17% 5؟",
      "correct": "2",
      "opts": [
        "2",
        "3",
        "1",
        "0"
      ],
      "exp": "17 / 5 = 3 with remainder 2. Modulus (%) returns the remainder."
    },
    {
      "id": 23,
      "q": "Which operator performs a logical short-circuit AND operation?",
      "q_ar": "من هو المشغل الذي يقوم بإجراء ماس كهربائى منطقي وتشغيل؟",
      "correct": "&&",
      "opts": [
        "&&",
        "&",
        "|",
        "||"
      ],
      "exp": "&& only evaluates the right operand if the left is true."
    },
    {
      "id": 24,
      "q": "What will be the output of: System.out.println(10 > 5 ? \"Yes\" : \"No\");?",
      "q_ar": "ماذا سيكون ناتج: System.out.println(10 > 5؟ \"Yes\" : \"No\");؟",
      "correct": "Yes",
      "opts": [
        "Yes",
        "No",
        "10",
        "Compile Error"
      ],
      "exp": "10 > 5 is true, so the first option ('Yes') is printed."
    },
    {
      "id": 25,
      "q": "What is the value of x after: int x = 5; x += 3 * 2;?",
      "q_ar": "ما هي قيمة x بعد: int x = 5; س += 3 * 2؛؟",
      "correct": "11",
      "opts": [
        "11",
        "16",
        "10",
        "13"
      ],
      "exp": "Multiplication first: 3 * 2 = 6. Then x = 5 + 6 = 11."
    },
    {
      "id": 26,
      "q": "What is the output of: System.out.println(5 / 2.0);?",
      "q_ar": "ما هو إخراج: System.out.println(5 / 2.0)؛؟",
      "correct": "2.5",
      "opts": [
        "2.5",
        "2",
        "2.0",
        "3"
      ],
      "exp": "Since 2.0 is double, double division occurs yielding 2.5."
    },
    {
      "id": 27,
      "q": "Which operator is used to compare if two values are equal?",
      "q_ar": "ما العامل الذي يُستخدم للمقارنة إذا كانت القيمتان متساويتان؟",
      "correct": "==",
      "opts": [
        "==",
        "=",
        "equals",
        "==="
      ],
      "exp": "== evaluates equality. = is assignment."
    },
    {
      "id": 28,
      "q": "Which assignment statement is invalid?",
      "q_ar": "ما هو بيان المهمة غير صالح؟",
      "correct": "float f = 3.14;",
      "opts": [
        "float f = 3.14;",
        "double d = 3.14f;",
        "int i = (int) 3.14;",
        "char c = 'A';"
      ],
      "exp": "Double literal 3.14 cannot be assigned directly to float variable without 'f' suffix."
    },
    {
      "id": 29,
      "q": "What will: System.out.println('A' + 1); print? (ASCII of 'A' is 65)",
      "q_ar": "ماذا سيفعل: System.out.println('A' + 1); مطبعة؟ (ASCII من 'A' هو 65)",
      "correct": "66",
      "opts": [
        "66",
        "A1",
        "B",
        "651"
      ],
      "exp": "char is promoted to int (65). 65 + 1 = 66."
    },
    {
      "id": 30,
      "q": "Which package must be imported to use the Scanner class?",
      "q_ar": "ما هي الحزمة التي يجب استيرادها لاستخدام فئة الماسح الضوئي؟",
      "correct": "java.util",
      "opts": [
        "java.util",
        "java.io",
        "java.lang",
        "java.time"
      ],
      "exp": "Scanner is in the java.util utility package."
    },
    {
      "id": 31,
      "q": "Which method is used to read a single word of string input from the user using a Scanner?",
      "q_ar": "ما الطريقة المستخدمة لقراءة كلمة واحدة من سلسلة الإدخال من المستخدم باستخدام الماسح الضوئي؟",
      "correct": "next()",
      "opts": [
        "next()",
        "nextLine()",
        "read()",
        "nextWord()"
      ],
      "exp": "next() reads input up to the first space delimiter."
    },
    {
      "id": 32,
      "q": "How do you instantiate a Scanner object to read from the keyboard?",
      "q_ar": "كيف يمكنك إنشاء كائن الماسح الضوئي للقراءة من لوحة المفاتيح؟",
      "correct": "Scanner s = new Scanner(System.in);",
      "opts": [
        "Scanner s = new Scanner(System.in);",
        "Scanner s = new Scanner();",
        "Scanner s = Scanner.open();",
        "Scanner s = new Scanner(Keyboard);"
      ],
      "exp": "System.in represents the keyboard console stream."
    },
    {
      "id": 33,
      "q": "Which method reads a double value from the user using a Scanner object?",
      "q_ar": "ما الطريقة التي تقرأ قيمة مزدوجة من المستخدم باستخدام كائن الماسح الضوئي؟",
      "correct": "nextDouble()",
      "opts": [
        "nextDouble()",
        "nextFloat()",
        "readDouble()",
        "getDouble()"
      ],
      "exp": "nextDouble() reads double input tokens."
    },
    {
      "id": 34,
      "q": "What exception is thrown when Scanner input does not match the expected type?",
      "q_ar": "ما هو الاستثناء الذي يتم طرحه عندما لا يتطابق إدخال الماسح الضوئي مع النوع المتوقع؟",
      "correct": "InputMismatchException",
      "opts": [
        "InputMismatchException",
        "NumberFormatException",
        "NullPointerException",
        "IOException"
      ],
      "exp": "Thrown by Scanner nextInt(), nextDouble() if input type doesn't match."
    },
    {
      "id": 35,
      "q": "Which statement is true about the switch statement in Java?",
      "q_ar": "ما العبارة الصحيحة فيما يتعلق ببيان التبديل في Java؟",
      "correct": "It supports byte, short, char, and int.",
      "opts": [
        "It supports byte, short, char, and int.",
        "It works with boolean.",
        "It does not support String.",
        "It can evaluate float."
      ],
      "exp": "switch supports integer types, char, and String. It doesn't support float, double, or boolean."
    },
    {
      "id": 36,
      "q": "What is the purpose of the break statement in a switch case?",
      "q_ar": "ما هو الغرض من بيان الاستراحة في حالة التبديل؟",
      "correct": "To prevent execution fall-through.",
      "opts": [
        "To prevent execution fall-through.",
        "To terminate program.",
        "To throw exception.",
        "To restart execution."
      ],
      "exp": "break exits the switch case to prevent fall-through execution."
    },
    {
      "id": 37,
      "q": "What is the default block in a switch statement used for?",
      "q_ar": "ما هي الكتلة الافتراضية في بيان التبديل المستخدمة؟",
      "correct": "It executes if all cases fail to match.",
      "opts": [
        "It executes if all cases fail to match.",
        "It is mandatory.",
        "It restarts execution.",
        "It acts as entry point."
      ],
      "exp": "default handles cases that don't match any case constant."
    },
    {
      "id": 38,
      "q": "Can you nest if-else statements inside a switch statement?",
      "q_ar": "هل يمكنك دمج عبارات if-else داخل عبارة التبديل؟",
      "correct": "Yes, it is fully supported.",
      "opts": [
        "Yes, it is fully supported.",
        "No.",
        "Only in default case.",
        "Only without break statements."
      ],
      "exp": "Java supports nesting control structures to any depth."
    },
    {
      "id": 39,
      "q": "What is the value of y after: int x = 3; int y = (x > 3) ? 10 : 20;?",
      "q_ar": "ما هي قيمة y بعد: int x = 3; إنت ص = (س > 3) ؟ 10 : 20;؟",
      "correct": "20",
      "opts": [
        "20",
        "10",
        "3",
        "0"
      ],
      "exp": "3 > 3 is false, so y is assigned the second option: 20."
    },
    {
      "id": 40,
      "q": "Which loop executes its body at least once, even if the condition is initially false?",
      "q_ar": "ما هي الحلقة التي تنفذ جسمها مرة واحدة على الأقل، حتى لو كان الشرط خاطئًا في البداية؟",
      "correct": "do-while loop",
      "opts": [
        "do-while loop",
        "while loop",
        "for loop",
        "for-each loop"
      ],
      "exp": "do-while checks condition at the bottom, guaranteeing one run."
    },
    {
      "id": 41,
      "q": "What is the output of: for(int i=0; i<3; i++) { System.out.print(i); }?",
      "q_ar": "ما هو ناتج: for(int i=0; i<3; i++) { System.out.print(i); }؟",
      "correct": "012",
      "opts": [
        "012",
        "123",
        "0123",
        "0 1 2"
      ],
      "exp": "Runs for i=0, 1, 2. Ends when i becomes 3."
    },
    {
      "id": 42,
      "q": "Which statement skips the rest of the current iteration and jumps to the loop's next iteration check?",
      "q_ar": "ما العبارة التي تتخطى بقية التكرار الحالي وتنتقل إلى التحقق من التكرار التالي للحلقة؟",
      "correct": "continue",
      "opts": [
        "continue",
        "break",
        "exit",
        "skip"
      ],
      "exp": "continue skips to the loop update/condition statement."
    },
    {
      "id": 43,
      "q": "What is the correct syntax for an infinite while loop?",
      "q_ar": "ما هو بناء الجملة الصحيح للحلقة اللانهائية؟",
      "correct": "while(true)",
      "opts": [
        "while(true)",
        "while(1)",
        "while(loop)",
        "while()"
      ],
      "exp": "In Java, while condition must be boolean, hence while(true)."
    },
    {
      "id": 44,
      "q": "In a for loop, which part executes only once at the beginning?",
      "q_ar": "في حلقة for، أي جزء يتم تنفيذه مرة واحدة فقط في البداية؟",
      "correct": "Initialization",
      "opts": [
        "Initialization",
        "Condition check",
        "Update statement",
        "Iteration statement"
      ],
      "exp": "Initialization executes once when entering the loop."
    },
    {
      "id": 45,
      "q": "Which statement is true about nested loops?",
      "q_ar": "ما العبارة الصحيحة فيما يتعلق بالحلقات المتداخلة؟",
      "correct": "Inner loop executes fully for each outer iteration.",
      "opts": [
        "Inner loop executes fully for each outer iteration.",
        "Outer loop executes fully for each inner iteration.",
        "They cannot have variables.",
        "Inner loop must use same variable."
      ],
      "exp": "The inner loop runs completely for each loop iteration of outer loop."
    },
    {
      "id": 46,
      "q": "What will: int x = 0; while(x < 3) { x++; } System.out.println(x); print?",
      "q_ar": "ماذا سوف: int x = 0; بينما(x < 3) { x++; } System.out.println(x); مطبعة؟",
      "correct": "3",
      "opts": [
        "3",
        "2",
        "4",
        "0"
      ],
      "exp": "Increments from 0 -> 1 -> 2 -> 3. Stops when x=3."
    },
    {
      "id": 47,
      "q": "What ends a do-while loop block?",
      "q_ar": "ما الذي ينهي كتلة حلقة do-while؟",
      "correct": "A semicolon after while condition",
      "opts": [
        "A semicolon after while condition",
        "A closing brace only",
        "A break",
        "A return"
      ],
      "exp": "do { } while(cond); requires a terminating semicolon."
    },
    {
      "id": 48,
      "q": "Which loop is best suited when the exact number of iterations is known beforehand?",
      "q_ar": "ما هي الحلقة الأفضل عندما يكون العدد الدقيق للتكرارات معروفًا مسبقًا؟",
      "correct": "for loop",
      "opts": [
        "for loop",
        "while loop",
        "do-while loop",
        "infinite loop"
      ],
      "exp": "for loops are ideal for fixed count loops."
    },
    {
      "id": 49,
      "q": "What is the output of: for(int i=0; i<5; i++) { if(i==2) break; System.out.print(i); }?",
      "q_ar": "ما هو ناتج: for(int i=0; i<5; i++) { if(i==2)break; System.out.print(i); }؟",
      "correct": "01",
      "opts": [
        "01",
        "012",
        "0134",
        "01234"
      ],
      "exp": "Loop breaks when i=2. So only 0 and 1 print."
    },
    {
      "id": 50,
      "q": "What is the default value of elements in a newly allocated double array?",
      "q_ar": "ما هي القيمة الافتراضية للعناصر في المصفوفة المزدوجة المخصصة حديثًا؟",
      "correct": "0.0",
      "opts": [
        "0.0",
        "0",
        "null",
        "undefined"
      ],
      "exp": "double array elements are initialized to 0.0 by default."
    },
    {
      "id": 51,
      "q": "How do you declare and instantiate an array of 5 integers in Java?",
      "q_ar": "كيف يمكنك الإعلان عن مجموعة من 5 أعداد صحيحة في Java وإنشاء مثيل لها؟",
      "correct": "int[] arr = new int[5];",
      "opts": [
        "int[] arr = new int[5];",
        "int arr[5] = new int[];",
        "int[] arr = int[5];",
        "int arr = new int(5);"
      ],
      "exp": "Correct array instantiation syntax."
    },
    {
      "id": 52,
      "q": "What is the index of the last element in an array named 'data' of length N?",
      "q_ar": "ما هو فهرس العنصر الأخير في مصفوفة تسمى \"بيانات\" بطول N؟",
      "correct": "N - 1",
      "opts": [
        "N - 1",
        "N",
        "0",
        "N + 1"
      ],
      "exp": "Arrays are 0-indexed; last index is N - 1."
    },
    {
      "id": 53,
      "q": "Which property is used to get the number of elements in an array?",
      "q_ar": "ما الخاصية المستخدمة لمعرفة عدد العناصر في المصفوفة؟",
      "correct": "length",
      "opts": [
        "length",
        "length()",
        "size",
        "size()"
      ],
      "exp": "length is a public final field on arrays."
    },
    {
      "id": 54,
      "q": "What happens if you try to access an index outside the range of an array?",
      "q_ar": "ماذا يحدث إذا حاولت الوصول إلى فهرس خارج نطاق المصفوفة؟",
      "correct": "ArrayIndexOutOfBoundsException at runtime",
      "opts": [
        "ArrayIndexOutOfBoundsException at runtime",
        "Compiler error",
        "Returns null",
        "Program runs with no output"
      ],
      "exp": "Accessing invalid indexes throws this runtime exception."
    },
    {
      "id": 55,
      "q": "How can you initialize array elements directly at the time of declaration?",
      "q_ar": "كيف يمكنك تهيئة عناصر المصفوفة مباشرة في وقت الإعلان؟",
      "correct": "Both A and B",
      "opts": [
        "Both A and B",
        "int[] arr = {1, 2, 3};",
        "int[] arr = new int[]{1, 2, 3};",
        "int[] arr = (1, 2, 3);"
      ],
      "exp": "Both syntax methods are valid to initialize arrays."
    },
    {
      "id": 56,
      "q": "Are array elements stored in contiguous memory locations?",
      "q_ar": "هل يتم تخزين عناصر المصفوفة في مواقع ذاكرة متجاورة؟",
      "correct": "Yes",
      "opts": [
        "Yes",
        "No",
        "Only double arrays",
        "Only object arrays"
      ],
      "exp": "Array elements occupy a single contiguous block of memory slots."
    },
    {
      "id": 57,
      "q": "Which is a valid array declaration statement?",
      "q_ar": "ما هو بيان إعلان صفيف صالح؟",
      "correct": "Both A and B (though A is preferred as int[] arr)",
      "opts": [
        "Both A and B (though A is preferred as int[] arr)",
        "int arr[] = new int[10];",
        "int arr[10] = new int[];",
        "int arr = new int[10];"
      ],
      "exp": "Both bracket placements are valid in Java declarations."
    },
    {
      "id": 58,
      "q": "What is the default value of elements in a newly created String array?",
      "q_ar": "ما هي القيمة الافتراضية للعناصر في مصفوفة سلسلة تم إنشاؤها حديثًا؟",
      "correct": "null",
      "opts": [
        "null",
        "\"\"",
        "\"null\"",
        "undefined"
      ],
      "exp": "Object reference elements default to null."
    },
    {
      "id": 59,
      "q": "How do you access the third element in an array named 'vals'?",
      "q_ar": "كيف يمكنك الوصول إلى العنصر الثالث في مصفوفة تسمى \"vals\"؟",
      "correct": "vals[2]",
      "opts": [
        "vals[2]",
        "vals(2)",
        "vals[3]",
        "vals.get(2)"
      ],
      "exp": "Third element is at index 2 (vals[2])."
    },
    {
      "id": 60,
      "q": "Which of the following is NOT part of a method signature?",
      "q_ar": "أي مما يلي ليس جزءًا من توقيع الطريقة؟",
      "correct": "Return type",
      "opts": [
        "Return type",
        "Parameter types",
        "Return type is NOT part of the signature (it is name + parameters)",
        "Parameter order"
      ],
      "exp": "Method signature excludes return type; it includes name and parameter list."
    },
    {
      "id": 61,
      "q": "Which keyword is used to return a value from a method?",
      "q_ar": "ما هي الكلمة الأساسية المستخدمة لإرجاع قيمة من إحدى الطرق؟",
      "correct": "return",
      "opts": [
        "return",
        "break",
        "void",
        "back"
      ],
      "exp": "return exits the method and returns the value."
    },
    {
      "id": 62,
      "q": "What is method overloading?",
      "q_ar": "ما هي طريقة التحميل الزائد؟",
      "correct": "Methods with same name but different signatures.",
      "opts": [
        "Methods with same name but different signatures.",
        "Methods with same signatures but different return types.",
        "Methods with different names.",
        "Too many parameters."
      ],
      "exp": "Overloaded methods must vary in parameter count, type or order."
    },
    {
      "id": 63,
      "q": "What is a recursive method in Java?",
      "q_ar": "ما هي الطريقة العودية في جافا؟",
      "correct": "Method that calls itself",
      "opts": [
        "Method that calls itself",
        "Method calling another class",
        "Method with nested loop",
        "Static method"
      ],
      "exp": "Recursion occurs when a method calls itself directly or indirectly."
    },
    {
      "id": 64,
      "q": "Which syntax represents a variable argument (varargs) parameter in a method?",
      "q_ar": "ما هو بناء الجملة الذي يمثل معلمة وسيطة متغيرة (varargs) في الطريقة؟",
      "correct": "int... numbers",
      "opts": [
        "int... numbers",
        "int[] numbers",
        "int numbers...",
        "varargs int numbers"
      ],
      "exp": "Type followed by triple dots (...) indicates varargs."
    },
    {
      "id": 65,
      "q": "If a method is declared static, how can it be called?",
      "q_ar": "إذا تم الإعلان عن طريقة ثابتة، فكيف يمكن استدعاؤها؟",
      "correct": "Using class name directly without an object.",
      "opts": [
        "Using class name directly without an object.",
        "By creating instance first.",
        "Only inside static methods.",
        "It cannot be called."
      ],
      "exp": "Static methods belong to class and are called via ClassName.methodName()."
    },
    {
      "id": 66,
      "q": "What happens if a recursive method has no base case?",
      "q_ar": "ماذا يحدث إذا لم يكن للطريقة العودية حالة أساسية؟",
      "correct": "It runs infinitely and throws StackOverflowError.",
      "opts": [
        "It runs infinitely and throws StackOverflowError.",
        "Compiler error.",
        "Terminates after 100 runs.",
        "Returns null."
      ],
      "exp": "Infinite calls exhaust stack space throwing StackOverflowError."
    },
    {
      "id": 67,
      "q": "What parameters are passed to a method in Java?",
      "q_ar": "ما المعلمات التي يتم تمريرها إلى طريقة في Java؟",
      "correct": "Pass-by-value always",
      "opts": [
        "Pass-by-value always",
        "Pass-by-reference always",
        "Pass-by-pointer",
        "Mixed pass-by-ref/val"
      ],
      "exp": "Java is strictly pass-by-value."
    },
    {
      "id": 68,
      "q": "Where must local variables be declared?",
      "q_ar": "أين يجب الإعلان عن المتغيرات المحلية؟",
      "correct": "Inside methods or code blocks",
      "opts": [
        "Inside methods or code blocks",
        "Outside classes",
        "In static blocks only",
        "In constructor parameters only"
      ],
      "exp": "Local variables exist within the scope of the declaring block/method."
    },
    {
      "id": 69,
      "q": "Can you declare a method inside another method in Java?",
      "q_ar": "هل يمكنك الإعلان عن طريقة داخل طريقة أخرى في Java؟",
      "correct": "No, nesting methods is not allowed.",
      "opts": [
        "No, nesting methods is not allowed.",
        "Yes.",
        "Only static methods.",
        "Only recursive methods."
      ],
      "exp": "Java does not support nested method declarations."
    },
    {
      "id": 70,
      "q": "Which OOP pillar focuses on exposing only necessary details while hiding implementation?",
      "q_ar": "ما هي ركيزة OOP التي تركز على كشف التفاصيل الضرورية فقط مع إخفاء التنفيذ؟",
      "correct": "Abstraction",
      "opts": [
        "Abstraction",
        "Inheritance",
        "Encapsulation",
        "Polymorphism"
      ],
      "exp": "Abstraction hides details and shows features."
    },
    {
      "id": 71,
      "q": "What is the return type of a class constructor in Java?",
      "q_ar": "ما هو نوع الإرجاع لمنشئ الفصل في Java؟",
      "correct": "None (no return type specified, not even void)",
      "opts": [
        "None (no return type specified, not even void)",
        "void",
        "The class type",
        "Object"
      ],
      "exp": "Constructors are declared without any return type, not even void."
    },
    {
      "id": 72,
      "q": "If a class contains a constructor with parameters, how can a no-arg constructor be created?",
      "q_ar": "إذا كان الفصل يحتوي على مُنشئ بمعلمات، فكيف يمكن إنشاء مُنشئ بدون وسيطات؟",
      "correct": "Define it explicitly in the class.",
      "opts": [
        "Define it explicitly in the class.",
        "Provided automatically.",
        "Impossible to have both.",
        "Use static constructors."
      ],
      "exp": "Defining any constructor removes the automatic default no-arg constructor."
    },
    {
      "id": 73,
      "q": "Which keyword is used to declare variables that are shared across all objects of a class?",
      "q_ar": "ما هي الكلمة الأساسية المستخدمة للإعلان عن المتغيرات المشتركة عبر جميع كائنات الفصل؟",
      "correct": "static",
      "opts": [
        "static",
        "final",
        "share",
        "private"
      ],
      "exp": "static variables belong to class and are shared across instances."
    },
    {
      "id": 74,
      "q": "How do you instantiate an object of a class named 'Car'?",
      "q_ar": "كيف يمكنك إنشاء كائن من فئة تسمى \"سيارة\"؟",
      "correct": "Car myCar = new Car();",
      "opts": [
        "Car myCar = new Car();",
        "Car myCar = Car.new();",
        "myCar = Car();",
        "Car myCar;"
      ],
      "exp": "Correct instantiation using new keyword."
    },
    {
      "id": 75,
      "q": "What is the primary role of a constructor in Java?",
      "q_ar": "ما هو الدور الأساسي للمنشئ في Java؟",
      "correct": "Initialize objects.",
      "opts": [
        "Initialize objects.",
        "Compile class.",
        "Destroy objects.",
        "Call garbage collection."
      ],
      "exp": "Constructors initialize fields of a new object."
    },
    {
      "id": 76,
      "q": "Can class constructors be overloaded?",
      "q_ar": "هل يمكن تحميل مُنشئي الفصل بشكل زائد؟",
      "correct": "Yes, by varying parameter lists.",
      "opts": [
        "Yes, by varying parameter lists.",
        "No.",
        "Only if return types differ.",
        "Only if one is static."
      ],
      "exp": "Constructors can be overloaded by varying parameter lists."
    },
    {
      "id": 77,
      "q": "What is encapsulation?",
      "q_ar": "ما هو التغليف؟",
      "correct": "Making class fields private and providing public getters/setters.",
      "opts": [
        "Making class fields private and providing public getters/setters.",
        "Inheritance of variables.",
        "Running code on the JVM.",
        "Writing code in multiple classes."
      ],
      "exp": "Encapsulation binds data and code, hiding fields using private access."
    },
    {
      "id": 78,
      "q": "A class acts as a ________ for creating objects.",
      "q_ar": "تعمل الفئة بمثابة ________ لإنشاء الكائنات.",
      "correct": "blueprint/template",
      "opts": [
        "blueprint/template",
        "variable",
        "method",
        "package"
      ],
      "exp": "Class is the blueprint from which objects are constructed."
    },
    {
      "id": 79,
      "q": "Which of the following belongs to a class rather than object instances?",
      "q_ar": "أي مما يلي ينتمي إلى فئة بدلاً من مثيلات الكائن؟",
      "correct": "Static methods and variables",
      "opts": [
        "Static methods and variables",
        "Instance variables",
        "Getters and Setters",
        "Local variables"
      ],
      "exp": "Static members belong to class level."
    },
    {
      "id": 80,
      "q": "What does the 'this' keyword refer to?",
      "q_ar": "ما الذي تشير إليه الكلمة الرئيسية \"هذا\"؟",
      "correct": "Current object instance",
      "opts": [
        "Current object instance",
        "Parent class",
        "Current class template",
        "Static class context"
      ],
      "exp": "this represents a reference to the active object instance."
    },
    {
      "id": 81,
      "q": "Which is the correct way to invoke a constructor from another constructor within the same class?",
      "q_ar": "ما هي الطريقة الصحيحة لاستدعاء مُنشئ من مُنشئ آخر داخل نفس الفئة؟",
      "correct": "this()",
      "opts": [
        "this()",
        "this.constructor()",
        "new constructor()",
        "call()"
      ],
      "exp": "this() triggers constructor chaining inside the class."
    },
    {
      "id": 82,
      "q": "ArrayList class belongs to which package?",
      "q_ar": "تنتمي فئة ArrayList إلى أي حزمة؟",
      "correct": "java.util",
      "opts": [
        "java.util",
        "java.lang",
        "java.io",
        "java.time"
      ],
      "exp": "ArrayList is located in the java.util collection utility package."
    },
    {
      "id": 83,
      "q": "Which method returns the number of elements in an ArrayList named 'list'?",
      "q_ar": "ما الطريقة التي تُرجع عدد العناصر في ArrayList المسماة \"list\"؟",
      "correct": "list.size()",
      "opts": [
        "list.size()",
        "list.length",
        "list.length()",
        "list.size"
      ],
      "exp": "size() returns elements count in Collections."
    },
    {
      "id": 84,
      "q": "How do you define an ArrayList that stores integers?",
      "q_ar": "كيف يمكنك تحديد ArrayList الذي يخزن الأعداد الصحيحة؟",
      "correct": "ArrayList<Integer> list = new ArrayList<>();",
      "opts": [
        "ArrayList<Integer> list = new ArrayList<>();",
        "ArrayList<int> list;",
        "ArrayList list = new int[];",
        "list = new ArrayList<int>();"
      ],
      "exp": "Use wrapper class Integer inside angle brackets."
    },
    {
      "id": 85,
      "q": "Which method is used to remove all elements from an ArrayList?",
      "q_ar": "ما الطريقة المستخدمة لإزالة كافة العناصر من ArrayList؟",
      "correct": "clear()",
      "opts": [
        "clear()",
        "removeAll()",
        "delete()",
        "reset()"
      ],
      "exp": "clear() removes all elements from the collection."
    },
    {
      "id": 86,
      "q": "Which method replaces the element at index 2 with a new string in ArrayList 'list'?",
      "q_ar": "ما الطريقة التي تستبدل العنصر الموجود في الفهرس 2 بسلسلة جديدة في \"قائمة\" ArrayList؟",
      "correct": "list.set(2, \"new\");",
      "opts": [
        "list.set(2, \"new\");",
        "list.add(2, \"new\");",
        "list.replace(2, \"new\");",
        "list.insert(2, \"new\");"
      ],
      "exp": "set(index, element) overwrites the element at index."
    },
    {
      "id": 87,
      "q": "Which static method returns the current date in LocalDate?",
      "q_ar": "ما هي الطريقة الثابتة التي تُرجع التاريخ الحالي في LocalDate؟",
      "correct": "LocalDate.now()",
      "opts": [
        "LocalDate.now()",
        "LocalDate.today()",
        "new LocalDate()",
        "LocalDate.current()"
      ],
      "exp": "now() returns current system date."
    },
    {
      "id": 88,
      "q": "Which class is used to format LocalDate objects into specific patterns?",
      "q_ar": "ما هي الفئة المستخدمة لتنسيق كائنات LocalDate في أنماط محددة؟",
      "correct": "DateTimeFormatter",
      "opts": [
        "DateTimeFormatter",
        "DateFormatter",
        "DateFormat",
        "SimpleDateFormat"
      ],
      "exp": "DateTimeFormatter is the modern formatter class."
    },
    {
      "id": 89,
      "q": "If you divide 9 by 2, what is the output in double: double r = 9 / 2; System.out.println(r);?",
      "q_ar": "إذا قسمت 9 على 2، فما هو الناتج مزدوجًا: double r = 9 / 2؛ System.out.println(ص);؟",
      "correct": "4.0",
      "opts": [
        "4.0",
        "4.5",
        "4",
        "Compile Error"
      ],
      "exp": "Integer division evaluates first to 4, which is cast to 4.0."
    }
  ],
  "po": [
    {
      "id": 1,
      "title": "Loops and Breaks",
      "title_ar": "الحلقات والفواصل",
      "code": "public class LoopExample {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) {\n            if (i == 3) {\n                break;\n            }\n            sum += i;\n        }\n        System.out.println(\"Sum = \" + sum);\n    }\n}",
      "ans": "Sum = 3",
      "exp": "The loop starts with i=1 (sum = 0 + 1 = 1). Next, i=2 (sum = 1 + 2 = 3). When i=3, the break statement is triggered, instantly terminating the loop. The print statement output is Sum = 3."
    },
    {
      "id": 2,
      "title": "Method Overloading",
      "title_ar": "طريقة التحميل الزائد",
      "code": "class Helper {\n    static void show(int x) {\n        System.out.println(\"int: \" + x);\n    }\n    static void show(double x) {\n        System.out.println(\"double: \" + x);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Helper.show(5);\n        Helper.show(5.0);\n        Helper.show((double) 5);\n    }\n}",
      "ans": "int: 5\ndouble: 5.0\ndouble: 5.0",
      "exp": "Helper.show(5) invokes show(int). Helper.show(5.0) invokes show(double). Helper.show((double)5) invokes show(double)."
    },
    {
      "id": 3,
      "title": "Recursion",
      "title_ar": "العودية",
      "code": "public class RecursionExample {\n    public static int mystery(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n * mystery(n - 2);\n    }\n    public static void main(String[] args) {\n        System.out.println(mystery(5));\n    }\n}",
      "ans": "15",
      "exp": "mystery(5) = 5 * mystery(3) = 5 * 3 * mystery(1) = 5 * 3 * 1 = 15."
    },
    {
      "id": 4,
      "title": "Static vs. Instance Variable Scope",
      "title_ar": "النطاق الثابت مقابل النطاق المتغير للمثيل",
      "code": "class Counter {\n    static int count = 0;\n    int id = 0;\n    Counter() {\n        count++;\n        id++;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println(\"c1.id: \" + c1.id + \", count: \" + Counter.count);\n        System.out.println(\"c2.id: \" + c2.id + \", count: \" + Counter.count);\n    }\n}",
      "ans": "c1.id: 1, count: 2\nc2.id: 1, count: 2",
      "exp": "count is static (shared, count becomes 2). id is instance (unique per object, becomes 1)."
    },
    {
      "id": 5,
      "title": "Constructor Chaining using this()",
      "title_ar": "تسلسل المنشئ باستخدام هذا ()",
      "code": "class Item {\n    String name;\n    int price;\n    Item() {\n        this(\"Unknown\", 100);\n        System.out.println(\"No-arg constructor called\");\n    }\n    Item(String name, int price) {\n        this.name = name;\n        this.price = price;\n        System.out.println(\"Parameterized constructor called\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item item = new Item();\n    }\n}",
      "ans": "Parameterized constructor called\nNo-arg constructor called",
      "exp": "this(\"Unknown\", 100) calls the parameterized constructor first, then returns to print the no-arg message."
    },
    {
      "id": 6,
      "title": "ArrayList Manipulation",
      "title_ar": "التلاعب بقائمة المصفوفات",
      "code": "import java.util.ArrayList;\npublic class ArrayListDemo {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        list.add(\"Orange\");\n        list.set(1, \"Grape\");\n        list.remove(0);\n        System.out.println(list);\n    }\n}",
      "ans": "[Grape, Orange]",
      "exp": "Initial: [Apple, Banana, Orange]. set(1, 'Grape') -> [Apple, Grape, Orange]. remove(0) -> [Grape, Orange]."
    },
    {
      "id": 7,
      "title": "Integer Division and Casting",
      "title_ar": "قسمة الأعداد الصحيحة والصب",
      "code": "public class DivisionDemo {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 4;\n        double r1 = a / b;\n        double r2 = (double) a / b;\n        double r3 = (double) (a / b);\n        System.out.println(\"r1: \" + r1 + \", r2: \" + r2 + \", r3: \" + r3);\n    }\n}",
      "ans": "r1: 3.0, r2: 3.75, r3: 3.0",
      "exp": "r1 performs integer division (3), stored as double (3.0). r2 performs double division (3.75). r3 converts integer division result to double (3.0)."
    },
    {
      "id": 8,
      "title": "LocalDate Manipulation",
      "title_ar": "التلاعب بالتاريخ المحلي",
      "code": "import java.time.LocalDate;\npublic class DateDemo {\n    public static void main(String[] args) {\n        LocalDate date = LocalDate.of(2026, 6, 14);\n        LocalDate nextWeek = date.plusDays(7);\n        System.out.println(\"Date: \" + date + \", Next Week: \" + nextWeek);\n    }\n}",
      "ans": "Date: 2026-06-14, Next Week: 2026-06-21",
      "exp": "LocalDate is immutable. plusDays(7) returns a new instance representing 7 days later."
    },
    {
      "id": 9,
      "title": "Switch Case Fall-Through",
      "title_ar": "تبديل حالة السقوط",
      "code": "public class SwitchFallthrough {\n    public static void main(String[] args) {\n        int day = 3;\n        switch (day) {\n            case 1: System.out.print(\"Sun \");\n            case 2: System.out.print(\"Mon \");\n            case 3: System.out.print(\"Tue \");\n            case 4: System.out.print(\"Wed \"); break;\n            default: System.out.print(\"Invalid\");\n        }\n    }\n}",
      "ans": "Tue Wed ",
      "exp": "Starts at case 3. Because there is no break statement, it falls through to print case 4 and breaks."
    },
    {
      "id": 10,
      "title": "Inheritance & Runtime Polymorphism",
      "title_ar": "الميراث وتعدد الأشكال في وقت التشغيل",
      "code": "class Animal {\n    void sound() { System.out.print(\"Animal \"); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.print(\"Bark \"); }\n}\npublic class PolyDemo {\n    public static void main(String[] args) {\n        Animal a1 = new Animal();\n        Animal a2 = new Dog();\n        a1.sound();\n        a2.sound();\n    }\n}",
      "ans": "Animal Bark ",
      "exp": "a1.sound() calls parent sound. a2.sound() calls overridden child sound at runtime."
    },
    {
      "id": 11,
      "title": "String Concatenation and Immutability",
      "title_ar": "تسلسل السلسلة والثبات",
      "code": "public class StringDemo {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        s.concat(\" Programming\");\n        System.out.println(s);\n    }\n}",
      "ans": "Java",
      "exp": "Strings are immutable in Java. Calling s.concat() returns a new String but does not modify the reference 's' itself because the result is not assigned back to s."
    },
    {
      "id": 12,
      "title": "Nested Loop with Labels",
      "title_ar": "حلقة متداخلة مع التسميات",
      "code": "public class LoopDemo {\n    public static void main(String[] args) {\n        outer: for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i == 2 && j == 2) {\n                    break outer;\n                }\n                System.out.print(i + \"\" + j + \" \");\n            }\n        }\n    }\n}",
      "ans": "11 12 13 21 ",
      "exp": "The break outer; statement immediately terminates the labeled outer loop. Thus, when i=2 and j=2, the loops exit entirely, leaving '11 12 13 21 ' as the output."
    },
    {
      "id": 13,
      "title": "Boolean Array default values",
      "title_ar": "القيم الافتراضية للصفيف المنطقي",
      "code": "public class ArrayDemo {\n    public static void main(String[] args) {\n        boolean[] flags = new boolean[3];\n        System.out.println(flags[1]);\n    }\n}",
      "ans": "false",
      "exp": "Primitive boolean arrays default to false in Java upon instantiation."
    },
    {
      "id": 14,
      "title": "Constructor Chaining with super()",
      "title_ar": "تسلسل المنشئ باستخدام super()",
      "code": "class Parent {\n    Parent() {\n        System.out.print(\"Parent \");\n    }\n}\nclass Child extends Parent {\n    Child() {\n        this(\"Default\");\n        System.out.print(\"Child-NoArg \");\n    }\n    Child(String name) {\n        super();\n        System.out.print(\"Child-Param \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
      "ans": "Parent Child-Param Child-NoArg ",
      "exp": "new Child() invokes Child no-arg constructor. this(\"Default\") delegates to Child(String), which calls super() parent constructor first (prints Parent), then prints Child-Param, and returns to print Child-NoArg."
    },
    {
      "id": 15,
      "title": "Static Method Hiding (Not Overriding)",
      "title_ar": "إخفاء الطريقة الثابتة (عدم التجاوز)",
      "code": "class Parent {\n    static void display() {\n        System.out.print(\"ParentDisplay \");\n    }\n}\nclass Child extends Parent {\n    static void display() {\n        System.out.print(\"ChildDisplay \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.display();\n    }\n}",
      "ans": "ParentDisplay ",
      "exp": "Static methods are bound at compile-time based on the reference type (Parent), not the runtime instance type (Child). This is method hiding, not polymorphism."
    },
    {
      "id": 16,
      "title": "Local Parameter Shadowing instance fields",
      "title_ar": "حقول مثيل تظليل المعلمة المحلية",
      "code": "public class ShadowDemo {\n    int x = 10;\n    void test(int x) {\n        x = x + 5;\n        System.out.print(this.x + \" \" + x);\n    }\n    public static void main(String[] args) {\n        new ShadowDemo().test(20);\n    }\n}",
      "ans": "10 25",
      "exp": "The parameter 'x' shadows the instance variable. this.x refers to 10, whereas local variable x is incremented by 5 to 25."
    },
    {
      "id": 17,
      "title": "Postfix vs Prefix operator precedence",
      "title_ar": "أسبقية عامل Postfix مقابل Prefix",
      "code": "public class OperatorDemo {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a++ + ++a;\n        System.out.println(\"a=\" + a + \", b=\" + b);\n    }\n}",
      "ans": "a=7, b=12",
      "exp": "a++ evaluates as 5 (a becomes 6). Then ++a increments first, evaluating as 7 (a becomes 7). Total b = 5 + 7 = 12."
    },
    {
      "id": 18,
      "title": "Exception try-catch-finally returns",
      "title_ar": "يعود استثناء محاولة الالتقاط أخيرًا",
      "code": "public class FinallyDemo {\n    public static int test() {\n        try {\n            return 1;\n        } catch (Exception e) {\n            return 2;\n        } finally {\n            System.out.print(\"Finally \");\n        }\n    }\n    public static void main(String[] args) {\n        System.out.print(test());\n    }\n}",
      "ans": "Finally 1",
      "exp": "The finally block executes right before control returns from try. It prints 'Finally ' and then the returned value '1' is printed in main."
    },
    {
      "id": 19,
      "title": "ArrayList set vs add index shift",
      "title_ar": "مجموعة ArrayList مقابل إضافة مؤشر التحول",
      "code": "import java.util.ArrayList;\npublic class ListDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(10);\n        list.add(20);\n        list.set(1, 30);\n        list.add(1, 40);\n        System.out.println(list);\n    }\n}",
      "ans": "[10, 40, 30]",
      "exp": "Initially [10, 20]. list.set(1, 30) replaces 20 with 30 -> [10, 30]. list.add(1, 40) inserts 40 at index 1 shifting 30 -> [10, 40, 30]."
    },
    {
      "id": 20,
      "title": "Recursion Accumulator Call",
      "title_ar": "استدعاء تراكم العودية",
      "code": "public class RecursionDemo {\n    public static int calc(int n) {\n        if (n <= 0) return 0;\n        return n + calc(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(calc(4));\n    }\n}",
      "ans": "10",
      "exp": "calc(4) evaluates to 4 + 3 + 2 + 1 + 0 = 10."
    },
    {
      "id": 21,
      "title": "Math round, ceil and floor",
      "title_ar": "جولة الرياضيات، السقف والأرضية",
      "code": "public class MathDemo {\n    public static void main(String[] args) {\n        double a = -1.5;\n        System.out.print(Math.floor(a) + \" \" + Math.ceil(a) + \" \" + Math.round(a));\n    }\n}",
      "ans": "-2.0 -1.0 -1",
      "exp": "Math.floor(-1.5) rounds down to -2.0. Math.ceil(-1.5) rounds up to -1.0. Math.round(-1.5) rounds to nearest integer towards positive infinity, which is -1."
    },
    {
      "id": 22,
      "title": "Static and Instance Initializer Blocks",
      "title_ar": "كتل التهيئة الثابتة والمثيلة",
      "code": "class Parent {\n    static {\n        System.out.print(\"Parent-Static \");\n    }\n    {\n        System.out.print(\"Parent-Instance \");\n    }\n    Parent() {\n        System.out.print(\"Parent-Constructor \");\n    }\n}\npublic class InitDemo {\n    public static void main(String[] args) {\n        new Parent();\n    }\n}",
      "ans": "Parent-Static Parent-Instance Parent-Constructor ",
      "exp": "Static blocks run once when the class is loaded. Instance blocks run before the constructor body runs. Constructor runs last."
    },
    {
      "id": 23,
      "title": "String Interning and Reference Equality",
      "title_ar": "سلسلة التدريب والمساواة المرجعية",
      "code": "public class StringInternDemo {\n    public static void main(String[] args) {\n        String s1 = new String(\"Java\");\n        String s2 = s1.intern();\n        String s3 = \"Java\";\n        System.out.println((s1 == s2) + \" \" + (s2 == s3));\n    }\n}",
      "ans": "false true",
      "exp": "s1 refers to a heap object. s1.intern() returns the canonical representation from the string pool, which is the same reference as the literal s3. Thus, s1==s2 is false, but s2==s3 is true."
    },
    {
      "id": 24,
      "title": "Overloading with Widening vs Boxed wrapper",
      "title_ar": "التحميل الزائد مع التوسيع مقابل الغلاف المعبأ",
      "code": "public class OverloadDemo {\n    static void printVal(double d) {\n        System.out.print(\"double \");\n    }\n    static void printVal(Integer i) {\n        System.out.print(\"Integer \");\n    }\n    public static void main(String[] args) {\n        int x = 10;\n        printVal(x);\n    }\n}",
      "ans": "double ",
      "exp": "Java prefers widening (int -> double) over autoboxing (int -> Integer) for compatibility with older versions of Java."
    },
    {
      "id": 25,
      "title": "Object Parameter Pass-by-Value Reference Change",
      "title_ar": "تغيير مرجع تمرير القيمة لمعلمة الكائن",
      "code": "class Person {\n    String name;\n    Person(String name) { this.name = name; }\n}\npublic class PassRefDemo {\n    static void modify(Person p, String newName) {\n        p.name = newName;\n        p = new Person(\"Default\");\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Ahmed\");\n        modify(p, \"Faky\");\n        System.out.println(p.name);\n    }\n}",
      "ans": "Faky",
      "exp": "Java is pass-by-value. The method receives a copy of the reference. Modifying the object fields changes the original object, but re-assigning 'p' inside 'modify' only changes the local copy of the reference."
    },
    {
      "id": 26,
      "title": "Two-Dimensional Array Length properties",
      "title_ar": "خصائص طول المصفوفة ثنائية الأبعاد",
      "code": "public class GridDemo {\n    public static void main(String[] args) {\n        int[][] grid = new int[3][5];\n        System.out.println(grid.length + \" \" + grid[0].length);\n    }\n}",
      "ans": "3 5",
      "exp": "grid.length returns the number of rows (3). grid[0].length returns the number of columns in the first row (5)."
    },
    {
      "id": 27,
      "title": "Unsigned vs Signed Bitwise Shift operations",
      "title_ar": "عمليات التحويل غير الموقعة مقابل عمليات Bitwise Shift الموقعة",
      "code": "public class ShiftDemo {\n    public static void main(String[] args) {\n        int val = -8;\n        System.out.println((val >> 1) == (val >>> 1));\n    }\n}",
      "ans": "false",
      "exp": ">> preserves the sign bit (sign-extends), so -8 >> 1 is -4. >>> shifts in zeros (zero-extends), producing a large positive number. They are not equal."
    },
    {
      "id": 28,
      "title": "Finally block return overriding try block return",
      "title_ar": "أخيرًا، تجاوز حظر العودة حاول منع العودة",
      "code": "public class FinallyOverrideDemo {\n    public static int getValue() {\n        try {\n            return 5;\n        } finally {\n            return 10;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(getValue());\n    }\n}",
      "ans": "10",
      "exp": "A return statement in a finally block overrides any return statement in the try or catch block."
    },
    {
      "id": 29,
      "title": "StringBuilder modification vs String re-assignment",
      "title_ar": "تعديل StringBuilder مقابل إعادة تعيين السلسلة",
      "code": "public class StringBuildDemo {\n    public static void main(String[] args) {\n        String s = \"A\";\n        s += \"B\";\n        StringBuilder sb = new StringBuilder(\"C\");\n        sb.append(\"D\");\n        System.out.println(s + \" \" + sb);\n    }\n}",
      "ans": "AB CD",
      "exp": "s += 'B' creates a new String 'AB'. sb.append('D') modifies the original StringBuilder object to 'CD' in place."
    },
    {
      "id": 30,
      "title": "Enum ordinal and custom override toString",
      "title_ar": "التعداد الترتيبي والمخصص لتجاوز toString",
      "code": "enum Color {\n    RED, GREEN, BLUE;\n    @Override\n    public String toString() {\n        return name().toLowerCase();\n    }\n}\npublic class EnumDemo {\n    public static void main(String[] args) {\n        Color c = Color.GREEN;\n        System.out.println(c.ordinal() + \" \" + c);\n    }\n}",
      "ans": "1 green",
      "exp": "c.ordinal() returns the index of the enum constant starting at 0 (GREEN is 1). The print statement implicitly calls toString(), which returns 'green' in lowercase."
    },
    {
      "id": 31,
      "title": "Short-circuit logical AND vs non-short-circuit",
      "title_ar": "ماس كهربائى منطقي و مقابل غير ماس كهربائى",
      "code": "public class ShortCircuitDemo {\n    public static void main(String[] args) {\n        int x = 0, y = 0;\n        if ((x++ > 0) && (y++ > 0)) {\n            x += 10;\n        }\n        System.out.println(\"x=\" + x + \", y=\" + y);\n    }\n}",
      "ans": "x=1, y=0",
      "exp": "Because x++ > 0 evaluates to 0 > 0 (false), the short-circuit && operator skips the evaluation of the right-hand operand (y++ > 0). Thus, y remains 0 and x is incremented once to 1."
    },
    {
      "id": 32,
      "title": "Abstract class constructor invocation",
      "title_ar": "استدعاء منشئ فئة مجردة",
      "code": "abstract class Base {\n    Base() {\n        System.out.print(\"Base \");\n    }\n}\nclass Derived extends Base {\n    Derived() {\n        System.out.print(\"Derived \");\n    }\n}\npublic class AbstractDemo {\n    public static void main(String[] args) {\n        new Derived();\n    }\n}",
      "ans": "Base Derived ",
      "exp": "Derived constructor implicitly calls super() which invokes the abstract parent class constructor first, printing 'Base ' followed by 'Derived '."
    },
    {
      "id": 33,
      "title": "Array Initializer type inference",
      "title_ar": "استنتاج نوع مُهيئ الصفيف",
      "code": "public class ArrayInitDemo {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        int[] copy = arr;\n        copy[0] = 99;\n        System.out.println(arr[0]);\n    }\n}",
      "ans": "99",
      "exp": "Array assignment int[] copy = arr; copies the reference, meaning both variables point to the same array object on the heap. Modifying copy[0] alters arr[0]."
    },
    {
      "id": 34,
      "title": "Static method inheritance and access",
      "title_ar": "وراثة الطريقة الثابتة والوصول",
      "code": "class A {\n    static void hello() {\n        System.out.print(\"A \");\n    }\n}\nclass B extends A {}\npublic class StaticInheritDemo {\n    public static void main(String[] args) {\n        B.hello();\n    }\n}",
      "ans": "A ",
      "exp": "Static methods are inherited by subclasses in Java. Calling B.hello() successfully resolves to A.hello() and outputs 'A '."
    },
    {
      "id": 35,
      "title": "Finally block runs even with Exception thrown",
      "title_ar": "أخيرًا، يتم تشغيل الكتلة حتى مع طرح الاستثناء",
      "code": "public class TryCatchFinallyDemo {\n    public static void main(String[] args) {\n        try {\n            int a = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.print(\"Catch \");\n        } finally {\n            System.out.print(\"Finally \");\n        }\n    }\n}",
      "ans": "Catch Finally ",
      "exp": "The exception is caught by the ArithmeticException block, printing 'Catch ', then the finally block executes printing 'Finally '."
    }
  ],
  "cc": [
    {
      "id": 1,
      "title": "Scanner Setup",
      "title_ar": "إعداد الماسح الضوئي",
      "code": "import java.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner reader = new Scanner();\n        int x = reader.nextInt();\n    }\n}",
      "ans": "import java.util.Scanner;\nScanner reader = new Scanner(System.in);",
      "exp": "Scanner belongs to java.util, not java. Scanner constructor needs System.in."
    },
    {
      "id": 2,
      "title": "Static vs. Non-Static Context",
      "title_ar": "السياق الثابت مقابل السياق غير الثابت",
      "code": "public class Test {\n    void sayHello() {\n        System.out.println(\"Hello\");\n    }\n    public static void main(String[] args) {\n        sayHello();\n    }\n}",
      "ans": "Test t = new Test();\nt.sayHello();",
      "exp": "Cannot call non-static method directly from static main without object instance."
    },
    {
      "id": 3,
      "title": "Constructor Return Type",
      "title_ar": "نوع إرجاع المنشئ",
      "code": "class Student {\n    String name;\n    public void Student(String n) {\n        name = n;\n    }\n}",
      "ans": "public Student(String n) {",
      "exp": "Constructors must not specify return type (not even void)."
    },
    {
      "id": 4,
      "title": "Narrowing Casting",
      "title_ar": "تضييق الصب",
      "code": "public class Main {\n    public static void main(String[] args) {\n        double temperature = 36.6;\n        int temp = temperature;\n        System.out.println(temp);\n    }\n}",
      "ans": "int temp = (int) temperature;",
      "exp": "Narrowing casting double to int requires manual cast (int) to compile."
    },
    {
      "id": 5,
      "title": "Array Index Loop Bound",
      "title_ar": "حلقة مؤشر الصفيف منضمة",
      "code": "public class Main {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int i = 0; i <= numbers.length; i++) {\n            System.out.println(numbers[i]);\n        }\n    }\n}",
      "ans": "for (int i = 0; i < numbers.length; i++) {",
      "exp": "Loop condition must use < instead of <= to prevent IndexOutOfBoundsException."
    },
    {
      "id": 6,
      "title": "Constructor Chaining order",
      "title_ar": "ترتيب تسلسل البناء",
      "code": "class Product {\n    String name;\n    double price;\n    Product(String name) {\n        this.name = name;\n    }\n    Product(String name, double price) {\n        this.price = price;\n        this(name);\n    }\n}",
      "ans": "Product(String name, double price) {\n    this(name);\n    this.price = price;\n}",
      "exp": "this(name) call must be the very first statement inside the constructor block."
    },
    {
      "id": 7,
      "title": "ArrayList Primitive Type Usage",
      "title_ar": "ArrayList استخدام النوع البدائي",
      "code": "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<int> list = new ArrayList<int>();\n        list.add(10);\n    }\n}",
      "ans": "ArrayList<Integer> list = new ArrayList<Integer>();",
      "exp": "Generics do not support primitives. Use wrapper class Integer."
    },
    {
      "id": 8,
      "title": "LocalDate Initialization",
      "title_ar": "تهيئة التاريخ المحلي",
      "code": "import java.time.LocalDate;\npublic class Main {\n    public static void main(String[] args) {\n        LocalDate today = new LocalDate();\n        System.out.println(today);\n    }\n}",
      "ans": "LocalDate today = LocalDate.now();",
      "exp": "LocalDate constructor is private. Use static factory method LocalDate.now()."
    },
    {
      "id": 9,
      "title": "Instantiating an Abstract Class",
      "title_ar": "إنشاء مثيل فئة مجردة",
      "code": "abstract class Shape {\n    abstract void draw();\n}\n// In Main:\nShape s = new Shape();",
      "ans": "Shape s = new Circle(); // Circle must extend Shape",
      "exp": "Abstract classes cannot be directly instantiated. You must instantiate a concrete subclass."
    },
    {
      "id": 10,
      "title": "Class Inheritance Keyword",
      "title_ar": "الكلمة الرئيسية للميراث الطبقة",
      "code": "class Vehicle { }\nclass Car implements Vehicle { }",
      "ans": "class Car extends Vehicle { }",
      "exp": "Class inheritance uses 'extends'. 'implements' is for interfaces."
    },
    {
      "id": 11,
      "title": "Weaker Access Privilege in Overriding",
      "title_ar": "امتياز الوصول الأضعف في التجاوز",
      "code": "class Parent {\n    public void show() {}\n}\nclass Child extends Parent {\n    void show() {} // Compiler error here\n}",
      "ans": "public void show() {",
      "exp": "A subclass overriding method cannot have a weaker access privilege than the superclass method. Since Parent.show() is public, Child.show() must also be public."
    },
    {
      "id": 12,
      "title": "Missing Return Statement in Value Method",
      "title_ar": "بيان الإرجاع مفقود في أسلوب القيمة",
      "code": "public class Calculator {\n    int add(int a, int b) {\n        int sum = a + b;\n        // Missing statement here\n    }\n}",
      "ans": "return sum;",
      "exp": "Methods that declare a non-void return type (like int) must explicitly return a value of that type using a return statement."
    },
    {
      "id": 13,
      "title": "Exception Catch Blocks Order Rules",
      "title_ar": "قواعد ترتيب كتل الاستثناء",
      "code": "public class ExceptionDemo {\n    public static void main(String[] args) {\n        try {\n            int x = 5 / 0;\n        } catch (Exception e) {\n            System.out.println(\"Error\");\n        } catch (ArithmeticException e) { // Compiler error\n            System.out.println(\"Math error\");\n        }\n    }\n}",
      "ans": "Swap the catch blocks: catch ArithmeticException first, then Exception.",
      "exp": "Subclass exceptions (ArithmeticException) must be caught before their parent class exceptions (Exception) to prevent unreachable code compile errors."
    },
    {
      "id": 14,
      "title": "Final Instance Variable Reassignment",
      "title_ar": "إعادة تعيين متغير المثيل النهائي",
      "code": "public class FinalDemo {\n    final int LIMIT = 100;\n    void changeLimit() {\n        LIMIT = 200; // Compiler error here\n    }\n}",
      "ans": "Remove the assignment, or remove 'final' keyword from LIMIT declaration.",
      "exp": "Variables declared with the final keyword act as constants; once initialized, their values cannot be modified."
    },
    {
      "id": 15,
      "title": "Abstract Method in Concrete Class",
      "title_ar": "الطريقة المجردة في فئة الخرسانة",
      "code": "public class AbstractDemo {\n    abstract void run(); // Compiler error here\n}",
      "ans": "public abstract class AbstractDemo {",
      "exp": "If a class contains one or more abstract methods, the class itself must be explicitly declared as abstract using the abstract keyword."
    },
    {
      "id": 16,
      "title": "Body in Standard Interface Method",
      "title_ar": "الجسم في طريقة الواجهة القياسية",
      "code": "interface Printable {\n    void print() {\n        System.out.println(\"Print\"); // Compiler error\n    }\n}",
      "ans": "default void print() {",
      "exp": "Standard interface methods cannot contain a body in Java unless they are declared with the 'default' or 'static' modifiers."
    },
    {
      "id": 17,
      "title": "String Value Comparison using Operator",
      "title_ar": "مقارنة قيمة السلسلة باستخدام المشغل",
      "code": "public class StringComp {\n    boolean isUser(String name) {\n        return name == \"Ahmed\"; // Logic bug\n    }\n}",
      "ans": "return name.equals(\"Ahmed\");",
      "exp": "Strings are objects. The '==' operator compares references (memory addresses). Use the '.equals()' method to compare the actual character contents of strings."
    },
    {
      "id": 18,
      "title": "ArrayList Element Access Syntax",
      "title_ar": "بناء جملة الوصول إلى عنصر ArrayList",
      "code": "import java.util.ArrayList;\npublic class ArrayAccess {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        String item = list[0]; // Compiler error\n    }\n}",
      "ans": "String item = list.get(0);",
      "exp": "ArrayList elements cannot be accessed using the square bracket array syntax. Use the get(index) method instead."
    },
    {
      "id": 19,
      "title": "Incompatible Types in Class Casting",
      "title_ar": "أنواع غير متوافقة في فئة الصب",
      "code": "class Animal {}\nclass Dog extends Animal {}\npublic class CastDemo {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Dog d = a; // Compiler error\n    }\n}",
      "ans": "Dog d = (Dog) a; // Or instantiating a new Dog",
      "exp": "A parent reference (Animal) cannot be assigned directly to a subclass reference (Dog) without an explicit downcast, which would compile but throw ClassCastException at runtime if the object is not a Dog."
    },
    {
      "id": 20,
      "title": "Local Variable Initialisation Scope",
      "title_ar": "نطاق التهيئة المتغير المحلي",
      "code": "public class ScopeDemo {\n    public static void main(String[] args) {\n        int total;\n        System.out.println(total); // Compiler error\n    }\n}",
      "ans": "int total = 0;",
      "exp": "Local variables declared inside methods are not initialized to default values by the compiler and must be explicitly initialized before reading them."
    }
  ],
  "coding": [
    {
      "id": 1,
      "title": "Calculator using Switch-Case Statement",
      "title_ar": "آلة حاسبة باستخدام بيان حالة التبديل",
      "desc": "Write a Java program called <b>SimpleCalculator.java</b> that reads two double numbers and an operator character (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) from the user. Print the computed result. If the user attempts to divide by zero, print <code>'Error: Division by zero'</code>. Use a <code>switch</code> statement to handle the operator input.",
      "desc_ar": "اكتب برنامج Java يسمى SimpleCalculator.java يقرأ رقمين مزدوجين وحرف عامل التشغيل (+، -، *، /) من المستخدم. طباعة النتيجة المحسوبة. إذا حاول المستخدم القسمة على صفر، فاطبع \"خطأ: القسمة على صفر\". استخدم عبارة التبديل للتعامل مع إدخال المشغل.",
      "code_ans": "import java.util.Scanner;\n\npublic class SimpleCalculator {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        System.out.print(\"Enter first number: \");\n        double num1 = scanner.nextDouble();\n        \n        System.out.print(\"Enter second number: \");\n        double num2 = scanner.nextDouble();\n        \n        System.out.print(\"Enter operator (+, -, *, /): \");\n        char operator = scanner.next().charAt(0);\n        \n        double result = 0;\n        boolean validOperation = true;\n        \n        switch (operator) {\n            case '+':\n                result = num1 + num2;\n                break;\n            case '-':\n                result = num1 - num2;\n                break;\n            case '*':\n                result = num1 * num2;\n                break;\n            case '/':\n                if (num2 == 0) {\n                    System.out.println(\"Error: Division by zero\");\n                    validOperation = false;\n                } else {\n                    result = num1 / num2;\n                }\n                break;\n            default:\n                System.out.println(\"Error: Invalid operator.\");\n                validOperation = false;\n        }\n        \n        if (validOperation) {\n            System.out.println(\"Result = \" + result);\n        }\n        scanner.close();\n    }\n}"
    },
    {
      "id": 2,
      "title": "Array Operations (Min/Max/Average)",
      "title_ar": "عمليات المصفوفة (الحد الأدنى/الحد الأقصى/المتوسط)",
      "desc": "Write a Java program called <b>ArrayStats.java</b> that creates an array of 8 integers and reads their values from the user. Write logic using loops to find and print:<br/>1. The minimum value in the array.<br/>2. The maximum value in the array.<br/>3. The average value of the numbers in the array (returned as a double).",
      "desc_ar": "اكتب برنامج Java يسمى ArrayStats.java يقوم بإنشاء مصفوفة مكونة من 8 أعداد صحيحة ويقرأ قيمها من المستخدم. اكتب المنطق باستخدام الحلقات للبحث والطباعة:1. الحد الأدنى للقيمة في array.2. الحد الأقصى للقيمة في array.3. متوسط ​​قيمة الأرقام الموجودة في المصفوفة (يتم إرجاعها كرقم مزدوج).",
      "code_ans": "import java.util.Scanner;\n\npublic class ArrayStats {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int[] numbers = new int[8];\n        \n        System.out.println(\"Please enter 8 integers:\");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.print(\"Element \" + (i + 1) + \": \");\n            numbers[i] = scanner.nextInt();\n        }\n        \n        int min = numbers[0];\n        int max = numbers[0];\n        int sum = 0;\n        \n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] < min) min = numbers[i];\n            if (numbers[i] > max) max = numbers[i];\n            sum += numbers[i];\n        }\n        \n        double average = (double) sum / numbers.length;\n        System.out.println(\"Minimum Value = \" + min);\n        System.out.println(\"Maximum Value = \" + max);\n        System.out.println(\"Average Value = \" + average);\n        scanner.close();\n    }\n}"
    },
    {
      "id": 3,
      "title": "Recursive Fibonacci Sequence",
      "title_ar": "تسلسل فيبوناتشي العودي",
      "desc": "Write a Java program called <b>FibonacciRecursion.java</b> containing a recursive method named <code>fib(int n)</code> that calculates and returns the n-th Fibonacci number. In the <code>main</code> method, read the value of <code>n</code> from the user using <code>Scanner</code>, call the recursive method, and display the result. (Recall: <code>fib(0) = 0</code>, <code>fib(1) = 1</code>, and <code>fib(n) = fib(n-1) + fib(n-2)</code>).",
      "desc_ar": "اكتب برنامج Java يسمى FibonacciRecursion.java يحتوي على طريقة متكررة تسمى fib(int n) تقوم بحساب وإرجاع رقم فيبوناتشي n-th. في الطريقة الرئيسية، اقرأ قيمة n من المستخدم باستخدام الماسح الضوئي، واستدعاء الطريقة العودية، وعرض النتيجة. (تذكر: fib(0) = 0، fib(1) = 1، وfib(n) = fib(n-1) + fib(n-2)).",
      "code_ans": "import java.util.Scanner;\n\npublic class FibonacciRecursion {\n    public static int fib(int n) {\n        if (n <= 0) return 0;\n        if (n == 1) return 1;\n        return fib(n - 1) + fib(n - 2);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter the value of n (non-negative): \");\n        int n = scanner.nextInt();\n        \n        if (n < 0) {\n            System.out.println(\"Invalid input. n must be non-negative.\");\n        } else {\n            System.out.println(\"Fibonacci number at position \" + n + \" is: \" + fib(n));\n        }\n        scanner.close();\n    }\n}"
    },
    {
      "id": 4,
      "title": "Object-Oriented Design & Encapsulation",
      "title_ar": "التصميم الموجه للكائنات والتغليف",
      "desc": "Define a class called <b>Book</b> with private attributes: <code>title</code> (String), <code>author</code> (String), and <code>price</code> (double). Write:<br/>1. A parameterized constructor to initialize all three fields.<br/>2. A no-argument constructor that sets fields to default values (<code>'Unknown'</code>, <code>'None'</code>, <code>0.0</code>).<br/>3. Public getter and setter methods for each field. <b>In the setter for price, ensure that price cannot be negative</b>. If a negative price is entered, default it to <code>0.0</code>.<br/>4. In a test class, create instances of <code>Book</code> using both constructors, modify fields using setters, and display their details using getters.",
      "desc_ar": "حدد فئة تسمى كتاب بسمات خاصة: العنوان (سلسلة)، المؤلف (سلسلة)، والسعر (مزدوج). اكتب:1. منشئ معلمات لتهيئة كافة الحقول الثلاثة.2. مُنشئ بدون وسيطات يقوم بتعيين الحقول إلى القيم الافتراضية (\"غير معروف\"، \"لا شيء\"، 0.0).3. طرق getter و setter العامة لكل حقل. في أداة تحديد السعر، تأكد من أن السعر لا يمكن أن يكون سالبًا. إذا تم إدخال سعر سلبي، فاضبطه افتراضيًا على 0.0.4. في فئة اختبار، قم بإنشاء مثيلات Book باستخدام كلا المنشئين، وقم بتعديل الحقول باستخدام أدوات الضبط، وعرض تفاصيلها باستخدام الحروف.",
      "code_ans": "class Book {\n    private String title;\n    private String author;\n    private double price;\n    \n    public Book(String title, String author, double price) {\n        this.title = title;\n        this.author = author;\n        setPrice(price);\n    }\n    \n    public Book() {\n        this.title = \"Unknown\";\n        this.author = \"None\";\n        this.price = 0.0;\n    }\n    \n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n    \n    public String getAuthor() { return author; }\n    public void setAuthor(String author) { this.author = author; }\n    \n    public double getPrice() { return price; }\n    public void setPrice(double price) {\n        if (price < 0) {\n            this.price = 0.0;\n        } else {\n            this.price = price;\n        }\n    }\n}\n\npublic class BookTest {\n    public static void main(String[] args) {\n        Book book1 = new Book(\"Java Programming\", \"Dr. Radwa Rady\", 250.0);\n        Book book2 = new Book();\n        System.out.println(\"Book 1: \" + book1.getTitle() + \" | Price: \" + book1.getPrice());\n        book2.setPrice(-50.0);\n        System.out.println(\"Book 2 Price after negative set: \" + book2.getPrice());\n    }\n}"
    },
    {
      "id": 5,
      "title": "ArrayList Sorting and Filtering",
      "title_ar": "ArrayList الفرز والتصفية",
      "desc": "Write a Java program called <b>ArrayListFilter.java</b> that instantiates an <code>ArrayList</code> of integers. Read 6 integers from the user and append them to the list. Use a loop to scan the list and remove all odd numbers. Sort the list in ascending order using Collections class and print the filtered list using a for-each loop.",
      "desc_ar": "اكتب برنامج Java يسمى ArrayListFilter.java الذي يقوم بإنشاء مثيل لقائمة ArrayList من الأعداد الصحيحة. اقرأ 6 أعداد صحيحة من المستخدم وألحقها بالقائمة. استخدم حلقة لمسح القائمة وإزالة كافة الأرقام الفردية. قم بفرز القائمة بترتيب تصاعدي باستخدام فئة Collections وطباعة القائمة التي تمت تصفيتها باستخدام حلقة for-each.",
      "code_ans": "import java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Scanner;\n\npublic class ArrayListFilter {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        ArrayList<Integer> list = new ArrayList<>();\n        \n        System.out.println(\"Enter 6 integers:\");\n        for (int i = 0; i < 6; i++) {\n            list.add(scanner.nextInt());\n        }\n        \n        // Filter out odd numbers traversing backwards\n        for (int i = list.size() - 1; i >= 0; i--) {\n            if (list.get(i) % 2 != 0) {\n                list.remove(i);\n            }\n        }\n        \n        // Sort list\n        Collections.sort(list);\n        \n        System.out.println(\"Filtered & Sorted List (Even only):\");\n        for(Integer val : list) {\n            System.out.println(val);\n        }\n        scanner.close();\n    }\n}"
    },
    {
      "id": 6,
      "title": "Working with the LocalDate API",
      "title_ar": "العمل مع LocalDate API",
      "desc": "Write a Java program called <b>DateDifference.java</b> that:<br/>1. Prints the current system date in the format <code>dd-MM-yyyy</code> using the <code>LocalDate</code> and <code>DateTimeFormatter</code> classes.<br/>2. Reads another date (year, month, day) from the user using <code>Scanner</code>.<br/>3. Checks and prints whether the entered date is <i>before</i>, <i>after</i>, or <i>equal to</i> the current system date.",
      "desc_ar": "اكتب برنامج Java يسمى DateDifference.java يقوم بما يلي:1. يطبع تاريخ النظام الحالي بالتنسيق dd-MM-yyyy باستخدام فئتي LocalDate وDateTimeFormatter.2. يقرأ تاريخًا آخر (السنة والشهر واليوم) من المستخدم باستخدام الماسح الضوئي.3. يتحقق ويطبع ما إذا كان التاريخ الذي تم إدخاله قبل أو بعد أو يساوي تاريخ النظام الحالي.",
      "code_ans": "import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\nimport java.util.Scanner;\n\npublic class DateDifference {\n    public static void main(String[] args) {\n        LocalDate today = LocalDate.now();\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd-MM-yyyy\");\n        System.out.println(\"Current Date: \" + today.format(formatter));\n        \n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter year: \");\n        int year = scanner.nextInt();\n        System.out.print(\"Enter month: \");\n        int month = scanner.nextInt();\n        System.out.print(\"Enter day: \");\n        int day = scanner.nextInt();\n        \n        LocalDate userDate = LocalDate.of(year, month, day);\n        \n        if (userDate.isBefore(today)) {\n            System.out.println(userDate + \" is BEFORE current date.\");\n        } else if (userDate.isAfter(today)) {\n            System.out.println(userDate + \" is AFTER current date.\");\n        } else {\n            System.out.println(\"Both dates are EQUAL.\");\n        }\n        scanner.close();\n    }\n}"
    },
    {
      "id": 7,
      "title": "Polymorphism with Shape and Circle",
      "title_ar": "تعدد الأشكال مع الشكل والدائرة",
      "desc": "Create a superclass called <b>Shape</b> with a method <code>area()</code>. Create a subclass called <b>Circle</b> that extends <code>Shape</code> and overrides the <code>area()</code> method to print <code>'Area of Circle'</code>. In a <code>main</code> method, demonstrate Run-time polymorphism by creating a <code>Circle</code> object using a <code>Shape</code> reference.",
      "desc_ar": "قم بإنشاء فئة فائقة تسمى Shape باستخدام منطقة الطريقة (). قم بإنشاء فئة فرعية تسمى الدائرة والتي تعمل على توسيع الشكل وتتجاوز طريقة المنطقة () لطباعة \"مساحة الدائرة\". في الطريقة الرئيسية، قم بإظهار تعدد الأشكال في وقت التشغيل عن طريق إنشاء كائن دائرة باستخدام مرجع الشكل.",
      "code_ans": "class Shape {\n    void area() {\n        System.out.println(\"Area of Shape\");\n    }\n}\n\nclass Circle extends Shape {\n    @Override\n    void area() {\n        System.out.println(\"Area of Circle\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Run-time polymorphism: Shape reference pointing to Circle object\n        Shape s = new Circle();\n        s.area(); // Invokes overridden method in Circle\n    }\n}"
    }
  ]
};
