import { Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-200 p-8">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-600 mb-6">
              s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-2 text-gray-600" />
              <a href="mailto:kashifhurmat893@gmail.com" className="text-gray-600 hover:underline">
                kashifhurmat893@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-gray-600" />
              <a href="tel:+923025058413" className="text-gray-600 hover:underline">
                +92 302 5058 413
              </a>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-2">We'd love to hear from you!</h2>
            <p className="text-gray-600 mb-6">Lets get in touch</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">User</label>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Type text</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}