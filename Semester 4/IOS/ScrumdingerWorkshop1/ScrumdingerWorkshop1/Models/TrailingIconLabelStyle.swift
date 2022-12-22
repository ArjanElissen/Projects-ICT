//
//  TrailingIconLabelStyle.swift
//  ScrumdingerWorkshop1
//
//  Created by A.J.A.F. Elissen on 04/10/2022.
//

import SwiftUI

struct TrailingIconLabelStyle: LabelStyle {
    func makeBody(configuration: Configuration) -> some View {
        HStack {
            configuration.title
            configuration.icon
        }
    }
}

extension LabelStyle where Self == TrailingIconLabelStyle {
    static var trailingIcon: Self { Self() }
}
