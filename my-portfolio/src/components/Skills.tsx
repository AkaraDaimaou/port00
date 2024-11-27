import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe, Server, LineChart } from 'lucide-react';

const skills = [
  {
    category: "Web Development",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    items: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Data Science",
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    items: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Pandas"]
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-blue-600" />,
    items: ["Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    category: "Data Visualization",
    icon: <LineChart className="h-8 w-8 text-green-600" />,
    items: ["D3.js", "Matplotlib", "Seaborn", "Plotly", "Power BI"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Combining web development and data science capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}