//
//  ContentView.swift
//  ScrumdingerWorkshop1
//
//  Created by A.J.A.F. Elissen on 04/10/2022.
//

import SwiftUI

struct MeetingView: View {
    var body: some View {
        VStack {
            
            ProgressView(value: 5, total: 15)
            
            HStack {
                VStack(alignment: .leading) {
                    Text("Seczonds Elapsed")
                        .font(.caption)
                    Label("300", systemImage: "hourglass.bottomhalf.fill")
                }
                Spacer()

                VStack(alignment: .leading) {
                    Text("Seconds Remaining")
                        .font(.caption)
                    Label("600", systemImage: "hourglass.tophalf.fill")
                }
            }
            .accessibilityElement(children: .ignore)
            .accessibilityLabel("Time remaining")
            .accessibilityValue("10 minutes")

            Circle()
                .strokeBorder(lineWidth: 12)
            HStack {
                Text("Speaker 1 of 3")
            }
            Spacer()
            Button(action: {}) {
                                Image(systemName: "forward.fill")
                            }
            .accessibilityLabel("Next speaker")
        }
        .padding()
    }
}

struct MeetingView_Previews: PreviewProvider {
    static var previews: some View {
        MeetingView()
    }
}
