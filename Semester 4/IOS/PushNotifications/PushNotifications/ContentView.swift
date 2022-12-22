//
//  ContentView.swift
//  PushNotifications
//
//  Created by A.J.A.F. Elissen on 12/10/2022.
//

import SwiftUI
import UserNotifications

struct ContentView: View {
    @State private var text = ""
    @State private var undertext = ""
    var body: some View {
        VStack {
            TextField("Title", text: $text)
                .padding(.top, -300)
                .padding(.leading, 130)
                
            TextField("Message", text: $undertext)
                .padding(.top, -250)
                .padding(.leading, 130)

            Button("Request for notifications") {UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { success, error in
                if success {
                    print("All set!")
                } else if let error = error {
                    print(error.localizedDescription)
                }
            }
            }
            .padding()
            Button("Notification") {
                let content = UNMutableNotificationContent()
                content.title = self.text
                content.subtitle = self.undertext
                content.sound = UNNotificationSound.default

                // show this notification five seconds from now
                let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)

                // choose a random identifier
                let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)

                // add our notification request
                UNUserNotificationCenter.current().add(request)
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
