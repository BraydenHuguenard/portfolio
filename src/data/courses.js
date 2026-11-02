export const courses = [
  {
    title: 'Computer Vision', num: 'CS 6476', status: 'In progress · Fall 2026 · Graduate',
    highlights: ['Image formation & filtering', 'Features & geometry', 'Recognition with deep learning'],
    description: ['Graduate course taken toward the M.S. in Computer Science (Machine Learning).', 'Covers image formation, camera models, linear filtering, edge detection, and frequency-domain analysis.', 'Works with feature detection and matching, homographies, epipolar geometry, stereo, and motion estimation.', 'Builds toward object recognition and detection with convolutional neural networks through hands-on Python projects.'],
  },
  {
    title: 'Deep Learning', num: 'CS 7643', status: 'In progress · Fall 2026 · Graduate',
    highlights: ['Neural network optimization', 'CNNs & transformers', 'PyTorch implementation'],
    description: ['Graduate course taken toward the M.S. in Computer Science (Machine Learning).', 'Covers backpropagation, optimization, regularization, and the practical training of deep neural networks.', 'Studies convolutional networks, recurrent models, attention, transformers, and generative models.', 'Implements and trains models from scratch and in PyTorch, with a team research-style final project.'],
  },
  {
    title: 'Introduction to Cognitive Science', num: 'CS 3790', status: 'In progress · Fall 2026 · Undergraduate',
    highlights: ['Perception & memory', 'Language & reasoning', 'Computational models of mind'],
    description: ['Undergraduate course completing the B.S. in Computer Science.', 'Explores the mind from multiple angles: psychology, neuroscience, linguistics, philosophy, and artificial intelligence.', 'Examines perception, attention, memory, language, learning, and decision-making.', 'Compares human cognition with computational models, connecting the material to how AI systems are designed.'],
  },
  {
    title: 'Introduction to Database Systems', num: 'CS 4400', status: 'Completed · Spring 2026',
    highlights: ['SQL & relational databases', 'Schema design & normalization', 'Teaching assistant'],
    description: ['Designed relational schemas from entity-relationship models and normalized them using keys and functional dependencies.', 'Wrote SQL for joins, aggregation, nested queries, views, constraints, and database-backed applications.', 'Studied indexing, transactions, concurrency, and the design choices behind reliable database systems.', 'Completed with an A; now a teaching assistant for the course.'],
  },
  {
    title: 'Introduction to High Performance Computing', num: 'CX 4220', status: 'Completed · Spring 2026',
    highlights: ['Parallel algorithms', 'Shared & distributed memory', 'Performance analysis'],
    description: ['Designed and evaluated parallel programs for multicore and distributed computing systems.', 'Worked with parallel decomposition, synchronization, communication, load balancing, and memory locality.', 'Measured speedup, efficiency, scalability, and the practical limits of parallel execution.', 'Completed with an A.'],
  },
  {
    title: 'Machine Learning', num: 'CS 4641', status: 'Completed · Fall 2025',
    highlights: ['Supervised learning', 'Unsupervised learning', 'Model evaluation'],
    description: ['Built regression and classification models and evaluated them with cross-validation and appropriate performance metrics.', 'Studied clustering, dimensionality reduction, feature selection, neural networks, and ensemble methods.', 'Applied learning algorithms to real datasets while managing overfitting, bias, variance, and hyperparameter selection.'],
  },
  {
    title: 'Introduction to Artificial Intelligence', num: 'CS 3600', status: 'Completed · Summer 2025',
    highlights: ['Search & planning', 'Probabilistic reasoning', 'Reinforcement learning'],
    description: ['Implemented breadth-first, uniform-cost, and A* search and used heuristics to solve planning problems.', 'Modeled constraint satisfaction problems and uncertainty with Bayesian networks and probabilistic inference.', 'Studied Markov decision processes, value iteration, Q-learning, and introductory machine learning.', 'Later served two semesters as a teaching assistant for the course.'],
  },
  {
    title: 'Linear Algebra', num: 'MATH 1554', status: 'Completed · Fall 2024',
    highlights: ['Vector spaces', 'Eigenvalues & eigenvectors', 'Least squares'],
    description: ['Solved linear systems and worked with matrices, linear transformations, bases, rank, and dimension.', 'Studied eigenvalues, eigenvectors, diagonalization, orthogonality, projections, and least-squares approximation.', 'Connected the material to data analysis, optimization, and machine learning.'],
  },
  {
    title: 'Introduction to Probability and Statistics', num: 'MATH 3215', status: 'Completed · Fall 2025',
    highlights: ['Probability distributions', 'Statistical inference', 'Regression'],
    description: ['Modeled discrete and continuous random variables using common probability distributions and expectations.', 'Used sampling distributions, point estimation, confidence intervals, and hypothesis tests to draw conclusions from data.', 'Studied covariance, correlation, and introductory linear regression.'],
  },
  {
    title: 'Design and Analysis of Algorithms', num: 'CS 3510', status: 'Completed · Summer 2025',
    highlights: ['Algorithm design', 'Graph algorithms', 'NP-completeness'],
    description: ['Analyzed time and space complexity and proved the correctness of algorithms.', 'Applied divide-and-conquer, greedy, and dynamic programming techniques to optimization problems.', 'Studied graph algorithms, reductions, computational hardness, and NP-completeness.'],
  },
  {
    title: 'Objects and Design', num: 'CS 2340', status: 'Completed · Spring 2025',
    highlights: ['Object-oriented design', 'Design patterns', 'Team development'],
    description: ['Designed maintainable object-oriented software using UML, interfaces, inheritance, and composition.', 'Applied common design patterns and tested software at the unit and system levels.', 'Built a semester project in a team using Git, iterative development, and Agile practices.'],
  },
  {
    title: 'Computing, Society, and Professionalism', num: 'CS 3001', status: 'Completed · Fall 2025',
    highlights: ['Professional ethics', 'Privacy & policy', 'Technology and society'],
    description: ['Analyzed the social consequences of computing through professional codes, case studies, and ethical frameworks.', 'Examined privacy, intellectual property, security, accessibility, bias, and public policy.', 'Practiced communicating technical decisions and their effects on users and communities.'],
  },
  {
    title: 'Systems and Networks', num: 'CS 2200', status: 'Completed · Spring 2025',
    highlights: ['Processor architecture', 'Operating systems', 'Networking'],
    description: ['Studied instruction set architecture, processor datapaths, pipelining, caches, and virtual memory.', 'Worked with processes, threads, synchronization, interrupts, and operating-system resource management.', 'Learned how network layers, addressing, routing, and transport protocols move data between systems.'],
  },
  {
    title: 'Computer Organization and Programming', num: 'CS 2110', status: 'Completed · Fall 2024',
    highlights: ['C & assembly', 'Memory & pointers', 'Digital logic'],
    description: ['Programmed in C and assembly while working directly with pointers, memory, stacks, and calling conventions.', 'Built an understanding of binary arithmetic, digital logic, instruction sets, and processor datapaths.', 'Studied interrupts, input/output, recursion, and the relationship between software and hardware.'],
  },
  {
    title: 'Applied Combinatorics', num: 'MATH 3012', status: 'Completed · Fall 2025',
    highlights: ['Counting methods', 'Graph theory', 'Recurrence relations'],
    description: ['Applied permutations, combinations, inclusion-exclusion, and generating functions to counting problems.', 'Studied graphs, trees, matchings, colorings, network models, and discrete optimization.', 'Solved recurrence relations and used combinatorial methods to analyze algorithms and finite structures.'],
  },
  {
    title: 'Discrete Mathematics', num: 'CS 2050', status: 'Completed · Spring 2025',
    highlights: ['Logic & proofs', 'Sets & relations', 'Graphs & counting'],
    description: ['Used propositional and predicate logic, sets, functions, relations, and proof techniques.', 'Practiced direct proof, contradiction, contraposition, and mathematical induction.', 'Studied counting, recurrences, graphs, trees, and the discrete foundations of computer science.'],
  },
  {
    title: 'Data Structures and Algorithms', num: 'CS 1332', status: 'Completed · Fall 2024',
    highlights: ['Trees, heaps & hash maps', 'Graph algorithms', 'Runtime analysis'],
    description: ['Implemented linked structures, binary search trees, balanced trees, heaps, hash tables, and graphs.', 'Applied sorting, pattern matching, graph traversal, and shortest-path algorithms.', 'Compared implementations using asymptotic runtime, memory use, and real performance tradeoffs.'],
  },
  {
    title: 'Introduction to Object-Oriented Programming', num: 'CS 1331', status: 'Completed · Spring 2023',
    highlights: ['Java', 'Object-oriented programming', 'Core software design'],
    description: ['Learned Java fundamentals and built programs using classes, interfaces, inheritance, and polymorphism.', 'Worked with exceptions, recursion, collections, generics, and basic algorithms.', 'Developed habits for readable, reusable, and testable software.'],
  },
];
